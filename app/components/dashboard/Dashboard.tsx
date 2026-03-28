"use client";

import Sidebar from "../sidebar/Sidebar";
import { Mic, Sparkles, Plus, LucideArrowBigUp } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [isOpen,isSetOpen] = useState(true);
  const [message,setmessage] = useState("");
  return (
    <div className="h-screen flex bg-[#0b0f17] text-white overflow-hidden">

      <Sidebar isOpen={isOpen} toggleSidebar={()=> isSetOpen(!isOpen)} />

      {/* MAIN */}
      <div className="flex-1 flex flex-col relative">

        {/* NAVBAR */}
        <div className="h-14 flex items-center justify-between px-6 border-b border-white/10 backdrop-blur-md">
          <div className="text-sm font-medium text-gray-300 flex items-center gap-1 cursor-pointer hover:text-white transition">
            Orbix AI
            <span className="text-xs">▾</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            {/* <div className="hover:text-white cursor-pointer transition">⚙️</div> */}
            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">

          {/* Heading */}
          <h1 className="text-4xl text-gray-300 mb-10 animate-fadeIn">
            What's on your mind?
          </h1>

          {/* INPUT */}
          <div className="w-full max-w-2xl group">
            <div className="flex items-center justify-between px-4 py-3 
              rounded-full border border-white/20 
              bg-[#111827]/80 backdrop-blur-xl
              shadow-[0_0_40px_rgba(0,0,0,0.6)]
              transition-all duration-300
              group-hover:border-white/40">

              {/* LEFT */}
              <div className="flex items-center gap-3 w-full">
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Plus size={18} />
                </button>

                <input
                  type="text"
                  placeholder="Ask anything"
                  className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm"
                  value={message}
                  onChange={(e)=>setmessage(e.target.value)}
                />
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2">
                {message.trim() === "" ? (
                  <>
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Mic size={16} />
                </button>
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Sparkles size={16} />
                </button>
                </>
                ): (
                  <button onClick={()=>{
                    console.log(message);
                    setmessage("");
                  }}
                  className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition"
                  >
                  <LucideArrowBigUp size={18} />
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}