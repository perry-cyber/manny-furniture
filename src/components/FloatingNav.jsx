import React, { useState } from "react";

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar - Visible on Medium and Larger Screens */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[50%] md:w-[30%] lg:w-[20%] bg-transparent backdrop-blur-md rounded-xl border border-yellow-700/50 shadow-lg animate-glow hidden md:block">
        <ul className="flex justify-between items-center p-4 text-white font-semibold">
          <li className="cursor-pointer hover:text-yellow-200 transition">Home</li>
          <li className="cursor-pointer hover:text-yellow-200 transition">About</li>
          <li className="cursor-pointer hover:text-yellow-200 transition">Contact</li>
        </ul>
        {/* Glow effect */}
        <div className="absolute inset-0 border-2 border-white/15 rounded-xl animate-glowing-border"></div>
      </nav>

      {/* SVG Menu Icon - Visible Only on Small Screens */}
      <div className="fixed top-4 right-4 block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
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

        {/* Dropdown Menu - Appears Like a Tooltip */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-900 text-white rounded-lg shadow-lg">
            <ul className="py-2 text-sm">
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Home</li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">About</li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
