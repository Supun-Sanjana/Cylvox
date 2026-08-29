"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 -mr-2 text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>
      
      {/* Drawer */}
      <div 
        className={`fixed top-[4.5rem] left-4 right-4 p-8 bg-[#0a0f14]/80 backdrop-blur-3xl saturate-150 border border-white/[0.06] rounded-[2rem] shadow-2xl transition-all duration-300 ease-out origin-top ${
          isOpen 
            ? "scale-y-100 opacity-100 pointer-events-auto" 
            : "scale-y-95 opacity-0 pointer-events-none"
        }`}
        style={{
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div 
          className="flex flex-col gap-6"
          onClick={() => setIsOpen(false)} // Close when clicking a link inside
        >
          {children}
        </div>
      </div>
    </div>
  );
}
