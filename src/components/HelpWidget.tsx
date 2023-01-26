import React, { useState } from "react";

interface Message{ 
    message:string,
    id:string,
    sender:string,
}

function HelpWidget() {
  const [isChatPanelDisplayed, setChatPanelDisplayed] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {message:"Hello i need help",id:"dydvgiwudoiwd",sender:"0"},
   { message:"I need help to fix my computer",id:"bjwdbiuwduiwd",sender:"0"},
   { message:"sure what is da problem",id:"bjwdbi23duiwsqw",sender:"1"},
   { message:"I cannot conecty to internet",id:"bjwdbiuwdu23wsqw",sender:"0"},
   { message:"Just buy a new laptop",id:"bjwdbiuwduiw2sqw",sender:"1"},
  ]);
  const [senderid, setSenderId] = useState<string>("0")
  return (
    <>
      {isChatPanelDisplayed ? (
        <div className="fixed bottom-10 right-10 flex h-96 w-72 flex-col justify-between bg-white">
          <button
            className="absolute top-1 right-2 bg-white shadow-md"
            onClick={() => setChatPanelDisplayed(false)}
          >
            X
          </button>
          <div className="p-3 mt-5">
            <ul>
              {messages.map(({message,id,sender},i) => {
                return <li key={i} className={`rounded p-1 mb-2 ${sender===senderid?"bg-sky-400":"bg-indigo-500"}`}>{message}</li>;
              })}
            </ul>
          </div>
          <form className="flex justify-center items-center p-2">
            <input className=" rounded w-full border border-gray-700 p-1  "/>
            <button className=" absolute right-2 border border-gray-700 bg-cyan-600 p-1 text-white">send</button> 
            
          </form>
        </div>
      ) : (
        <button
          onClick={() => setChatPanelDisplayed(true)}
          className=" fixed bottom-10 right-10 cursor-pointer bg-blue-500 p-2 text-white hover:bg-blue-700"
        >
          Support
        </button>
      )}
    </>
  );
}

export default HelpWidget;
