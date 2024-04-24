import OpenAI from "openai"

export default async function handler(req, res) {

  const openaiAPIKey = process.env.OPENAI_KEY;
  const openaiModel = process.env.OPENAI_MODEL;

  console.log(openaiAPIKey)
  console.log(openaiModel)

  const openai = new OpenAI({apiKey: openaiAPIKey})

  if (req.method === 'POST') {
    try {
      // Parse the request body
      const body = JSON.parse(req.body);

      const linkOrText = body.linkOrText;
      const question = body.question;
      console.log("Link or Text: ", linkOrText);
      console.log("Question: ", question);

      const instructions = `You are a really good assistant, ready to answer the question based off of the question and document link or text provided to you. If the user provides a link, you call the "getDocumentTextFromLink" from your arsenal, to get the returning text from the document, and answer the user's question.`;
      const assistant = await openai.beta.assistants.create({
        name: "Document Question Assistant",
        instructions: instructions,
        tools: [{ type: "code_interpreter" }],
        model: openaiModel || "gpt-4-turbo"
      });

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
          assistant_id: assistant.id,
          instructions: "Please answer the user question based off of the link or text provided. If the user provided a link, call the 'getdocumentTextFromLink' function to get the text from the document. Answer the users question to the best of your ability, and provide a detailed response that will satisfies the users question.",
        }
      );
      
      while (true) {
        await delay(5000); // Delay for 5 seconds

        const runStatus = await openai.beta.threads.runs.retrieve(
          thread.id,
          run.id
        );

        console.log(runStatus.status)

        if (runStatus.status === 'completed') {
          const messages = await openai.beta.threads.messages.list(
            thread.id
          );

          for (const message of messages.data) {
            console.log(`${message.role} > ${message.content[0].text.value}`);
          }
          break; // Exit the loop once completed
        } else {
          console.log("Waiting for the Assistant to process...")
          console.log(run.status);
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
