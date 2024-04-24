"use client";

import Image from "next/image";
import {useState, useEffect} from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [question, setQuestion] = useState("");
  const [linkOrText, setLinkOrText] = useState("");

  useEffect(() => {
    if (Object.keys(result).length > 0) {
      document.getElementById("result").innerText = `Result: ${result}`;
      setResult("")
    }
  }, [result])

  async function getResult() {
    setLoading(true) 
    const result = await fetch("/api/ask")
    const resultJson = await result.json()
    const resultMessage = resultJson.message

    if (resultMessage) {
      setResult(resultMessage)
    }
    else {
      setError(resultJson.error)
    }
    setLoading(false)
  }

  return (
    <main
      className={`flex min-h-screen gap-[25px] flex-col items-center px-[25px] py-[15px] ${inter.className}`}
    >
      <div className="w-full flex align-center flex-col gap-[15px]">
        <div className="flex flex-col gap-[5px]">
          <label for="link-or-text" className="text-xl font-medium">Link or Text</label>
          <input 
            id="link-or-text" 
            value={linkOrText} 
            onChange={e => setLinkOrText(e.target.value)}
            className="px-[15px] py-[7px] rounded-[5px]" 
            name="link-or-text" type="text" 
            placeholder="Paste a link or text" 
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label for="link-or-text" className="text-xl font-medium">Question</label>
          <textarea 
            className="px-[15px] py-[7px] rounded-[5px]" 
            name="message" 
            placeholder="Type a message"
            value={question} 
            onChange={e => setQuestion(e.target.value)} 
          >
          </textarea>
        </div>
        <button 
          className="px-[15px] py-[7px] bg-blue-900 w-[fit-content] rounded-[5px] font-bold color-red"
          onClick={async () => {
            await getResult()
          }}
        >
          Ask
        </button>
      </div>
      {
        Object.keys(result).length > 0 && (
          <div className="w-full h-full flex flex-col gap-[5px] ">
            <h3
              className="text-2xl"
            >
              Result: 
            </h3>
            <div 
              id="result"
              className="text-black px-[15px] py-[10px] bg-white w-full h-[200px] rounded-[5px]"></div>
          </div>
        )
      }
      {
        error && (
          <div className="">
            <p className="text-red-500">Error occured</p>
          </div>
        )
      }
      {
        loading && (
          <p>Loading...</p>
        )
      }
    </main>
  );
}
