import OpenAI from "openai";
import axios from 'axios';
import fs from "fs";

const openaiAPIKey = process.env.OPENAI_KEY;
const openaiModel = process.env.OPENAI_MODEL;

console.log(openaiAPIKey)
console.log(openaiModel)

const openai = new OpenAI({apiKey: openaiAPIKey})

const documentQuestionAssistantID = "asst_K5SzoP1rWSMLS30aIFow9bsX"

async function getDocumentTextFromLink(link) {
  // Create assistant to get inner content from document. Already created the assistant
  const instructions = `You are a really good assistant, ready to get the inner content from the document link provided to you. You summarize it in a shorter, digestible way, while still keeping in all necessary details.`;

  const assistant = await openai.beta.assistants.create({
    name: "Document Inner Content Assistant",
    instructions: instructions,
    model: openaiModel || "gpt-4-turbo",
    tools: [{ type: "file_search" }],
  });

  const assistantId = assistant.id;

  // Download the file URL and save it with the file name
  const fileName = link.split("/").pop();
  const response = await axios.get(link, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data);

  fs.writeFileSync(fileName, buffer);
  console.log(`File "${fileName}" downloaded successfully.`);

  //creating a vector store:
  const fileStreams = ["filename"].map((path) =>
    fs.createReadStream(path),
  );

  // Create a vector store including our two files.
  let vectorStore = await openai.beta.vectorStores.create({
    name: fileName.split(".")[0],
  });

  // await openai.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, fileStreams)
  //
  // await openai.beta.assistants.update(assistant.id, {
  //   tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
  // });
  
  // A user wants to attach a file to a specific message, let's upload it.
  const file = await openai.files.create({
    file: fs.createReadStream(fileName),
    purpose: "assistants",
  });

  const thread = await openai.beta.threads.create({
    messages: [
      {
        role: "user",
        content: "Summarize this in a digestable, and well informed way, making it shorter while still having all the necessary details.",
        // Attach the new file to the message.
        attachments: [{ file_id: file.id, tools: [{ type: "file_search" }] }],
      },
    ],
  });

  // The thread now has a vector store in its tool resources.
  console.log(thread.tool_resources?.file_search);

  const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
    assistant_id: assistant.id,
  });

  const messages = await openai.beta.threads.messages.list(thread.id, {
    run_id: run.id,
  });

  const message = messages.data.pop();
  if (message.content[0].type === "text") {
    const { text } = message.content[0];
    const { annotations } = text;
    const citations = [];

    let index = 0;
    for (let annotation of annotations) {
      text.value = text.value.replace(annotation.text, "[" + index + "]");
      const { file_citation } = annotation;
      if (file_citation) {
        const citedFile = await openai.files.retrieve(file_citation.file_id);
        citations.push("[" + index + "]" + citedFile.filename);
      }
      index++;
    }

    console.log(text.value);
    console.log(citations.join("\n"));

    // Delete the file after use
    fs.unlikcSync(fileName);
    console.log(`File "${fileName}" deleted successfully.`);
    return text.value;
  }

}
export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      // Parse the request body
      const body = JSON.parse(req.body);

      const linkOrText = body.linkOrText;
      const question = body.question;
      console.log("Link or Text: ", linkOrText);
      console.log("Question: ", question);
    
      // creating assistant (I already created it)
      // const instructions = `You are a really good assistant, ready to answer the question based off of the question and document link or text provided to you. If the user provides a link, you call the "getDocumentTextFromLink" from your arsenal, to get the returning text from the document, and answer the user's question.`;
      // const assistant = await openai.beta.assistants.create({
      //   name: "Document Question Assistant",
      //   instructions: instructions,
      //   tools: [
      //     {
      //       type: "function",
      //       function: {
      //         name: "getDocumentTextFromLink",
      //         description: "Get the text string as a return from a document by only providing a link",
      //         parameters: {
      //           type: "object",
      //           properties: {
      //             link: {
      //               type: "string",
      //               description: "The full link of the document.",
      //             },
      //           },
      //           required: ["link"],
      //         },
      //       },
      //     },
      //   ],
      //   model: openaiModel || "gpt-4-turbo"
      // });

      const thread = await openai.beta.threads.create();

      let userMessage;
      if (linkOrText.includes("http")) {
        userMessage = `My question: ${question}. Here is the document I want to ask the question about: ${linkOrText}`
      } else {
        userMessage = `My question: ${question}. The question is about this: ${linkOrText}`
      }

      const message = await openai.beta.threads.messages.create(
        thread.id,
        {
          role: "user",
          content: userMessage,
        }
      );
       
      let run = await openai.beta.threads.runs.create(
        thread.id,
        { 
          assistant_id: documentQuestionAssistantID,
          instructions: "Please answer the user question based off of the link or text provided. If the user provided a link, call the 'getdocumentTextFromLink' function to get the text from the document. Answer the users question to the best of your ability, and provide a detailed response that will satisfies the users question.",
        }
      );
      
      while (true) {
        await delay(2500); // Delay for 5 seconds

        const runStatus = await openai.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );

        if (runStatus.status === 'completed') {
          console.log("Completed")
          const messages = await openai.beta.threads.messages.list(
            thread.id
          );

          for (const message of messages.data) {
            const messageStr = message.content[0].text.value;
            console.log(`${message.role} > ${messageStr}`)
            return res.status(200).json({ message: messageStr });
          }
          break; // Exit the loop once completed
        } 

        else if (runStatus.status === 'requires_action') {
          console.log("Requires action")
          const requiredActions = runStatus.required_action.submit_tool_outputs;
          console.log(requiredActions)
          const toolsOutput = []
          for (let i = 0; i < requiredActions["tool_calls"].length; i++) {
            const action = requiredActions["tool_calls"][i]
            const functionName = action["function"]["name"]
            const args = JSON.parse(action["function"]["arguments"])
            console.log("action", action)
            console.log("functionName", functionName)
            console.log("args", args)
            if (functionName == "getDocumentTextFromLink") {
              console.log("Function found")
              console.log("Link arg: ", args.link)
              const output = await getDocumentTextFromLink(args.link)
              console.log("Output: ", output)

              toolsOutput.push({
                "tool_call_id": action["id"],
                "output": output,
              })
            }
            else {
              console.log("Function not found")
            }
          }

          // Submit tools outputs back to the Assistants API 
          console.log("Submitting tool outputs...")
          run = await openai.beta.threads.runs.submitToolOutputsAndPoll(
            thread.id,
            run.id,
            { tool_outputs: toolsOutput }
          );
          console.log("Tool outputs submitted")
        }

        else {
          console.log("Waiting for the Assistant to process...")
          console.log(runStatus.status);
        }
      }
      
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ error: "Error processing request" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// Function to create a delay using a promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
