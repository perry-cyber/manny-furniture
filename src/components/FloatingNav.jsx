"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function FloatingNavbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 w-full flex justify-between items-center px-6 py-3 z-50 bg-transparent">
    {/* Logo - Fully Left */}
    <div className="bg-transparent backdrop-blur-md rounded-full flex items-center justify-center border border-yellow-700/50 shadow-lg ml-6 w-28 h-28">
    <Link href="/"> <img
        src="https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreihpyskso3k3evs355tmrd5fn747g4liyhz3znjmutxio6ujpyrefu"
        alt="Logo"
        className="h-25 w-25 object-contain"
      /></Link>
     
    </div>
  
    {/* Navbar - Fully Right */}
    <nav className="hidden md:block bg-transparent backdrop-blur-md rounded-xl border border-yellow-700/50 shadow-lg px-6 py-3 mr-6">
      <ul className="flex justify-between items-center space-x-8 text-white font-semibold">
        <li className="cursor-pointer hover:text-yellow-500 transition"><Link href="/">Home</Link></li>
        <li className="cursor-pointer hover:text-yellow-500 transition"><Link href="/about">About Us</Link></li>
        <li className="cursor-pointer hover:text-yellow-500 transition"><Link href="/catelog">Catalog</Link></li>
        <li className="cursor-pointer hover:text-yellow-500 transition"><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  
    {/* Menu Icon - Mobile */}
    <div className="block md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={35}
        height={35}
        viewBox="0 0 20 20"
        className="cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
          <path
            d="M2.5 9.2a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-14a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1"
            opacity={0.2}
          ></path>
          <path d="M2 8.5a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11.308a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"></path>
        </g>
      </svg>
  
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-4 mt-3 w-44 bg-white text-black rounded-lg shadow-lg py-2">
          <ul className="text-sm space-y-2">
            <li className="px-4 py-2 cursor-pointer hover:bg-yellow-700"><Link href="/">Home</Link></li>
            <li className="px-4 py-2 cursor-pointer hover:bg-yellow-700"><Link href="/about">About Us</Link></li>
            <li className="px-4 py-2 cursor-pointer hover:bg-yellow-700"><Link href="/catelog">Catelog</Link></li>
            <li className="px-4 py-2 cursor-pointer hover:bg-yellow-700"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  </div>
  );
}
