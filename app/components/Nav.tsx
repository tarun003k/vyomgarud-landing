"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0b0d10] border-b border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-wide">
          Vyom<span className="text-[#ff7b00]">Garud</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#capabilities" className="hover:text-white">Capabilities</Link>
          <Link href="#highlights" className="hover:text-white">Highlights</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>

          <Link
            href="#contact"
            className="ml-4 bg-[#ff7b00] text-black px-4 py-2 rounded-md font-medium hover:bg-orange-500"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white border border-gray-700 px-3 py-1 rounded"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f1114] border-t border-gray-800 px-6 py-4 space-y-4">
          <Link href="#about" className="block text-gray-300 hover:text-white">About</Link>
          <Link href="#capabilities" className="block text-gray-300 hover:text-white">Capabilities</Link>
          <Link href="#highlights" className="block text-gray-300 hover:text-white">Highlights</Link>
          <Link href="#contact" className="block text-gray-300 hover:text-white">Contact</Link>

          <Link
            href="#contact"
            className="block bg-[#ff7b00] text-black px-4 py-2 rounded-md font-medium"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
