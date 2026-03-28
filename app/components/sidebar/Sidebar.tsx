"use client";

import {
  PenSquare,
  Search,
  LayoutGrid,
  Folder,
  MessageSquare,
  Settings
} from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const router = useRouter();

  return (
    <div
      className={`h-full bg-[#0b0f17] border-r border-white/10 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >

      {/* TOP */}
      
      <div
        className={`px-3 py-3 ${
          isOpen
            ? "flex items-center justify-between"
            : "flex flex-col items-center gap-3"
        }`}
      >

        {/* LOGO */}
        <div
          onClick={() => router.push("/dashboard")}
          className="cursor-pointer hover:scale-105 transition flex-shrink-0"
        >
          <Image src="/favicon.ico" alt="Orbix AI" width={34} height={34} />
        </div>

        {/* TOGGLE BUTTON */}
        <div
          onClick={toggleSidebar}
          className="cursor-pointer hover:scale-105 transition flex-shrink-0"
        >
          <Image src="/sidebar.png" alt="toggle" width={26} height={26} />
        </div>
      </div>

    {isOpen && (
      <>
      {/* ACTIONS */}
      <div className="px-3 flex gap-2">
        <button className="w-full flex items-center justify-center py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
          <PenSquare size={18} />
        </button>

        <button className="w-full flex items-center justify-center py-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
          <Search size={18} />
        </button>
      </div>

      {/* ICON GRID */}
      <div className="grid grid-cols-4 gap-2 px-3 mt-4">
        {[LayoutGrid, Folder, MessageSquare, Settings].map((Icon, i) => (
          <div
            key={i}
            className="h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition"
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
   

      {/* TEXT CONTENT (HIDE WHEN CLOSED) */}
     
          <div className="mt-6 px-4 text-sm text-gray-400 space-y-3">
            <p className="hover:text-white cursor-pointer">GPTs</p>
            <p className="hover:text-white cursor-pointer">Projects</p>
            <p className="hover:text-white cursor-pointer">Group chats</p>
          </div>

          <div className="mt-6 px-4">
            <p className="text-gray-400 text-sm mb-2">Your chats</p>
            <div className="text-gray-600 text-sm">No chats yet</div>
          </div>
        </>
      )}

      {/* FOOTER */}
      <div className="mt-auto p-3 border-t border-white/10">
        <div className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg cursor-pointer transition">
          <div className="w-8 h-8 rounded-full bg-blue-500"></div>

          {isOpen && <span className="text-sm">Profile</span>}
        </div>
      </div>

    </div>
  );
}