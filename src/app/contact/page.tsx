import FloatingNavbar from '@/components/FloatingNav'
import { WavyBackground } from '@/components/ui/wavy-background'
import React from 'react'

export default function page() {
  return (
    <div>
                <FloatingNavbar/>
                  <WavyBackground className="w-full mx-auto flex items-center justify-center pb-10">
                  <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                    CONTACT US
                  </p>
                  
                </WavyBackground>
                <footer className=" border-t border-yellow-600 bottom-0 left-0 w-full bg-black text-white py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Top Section: Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
              {/* Services */}
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">SERVICES</h3>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>
                    <a href="#">Interor Design</a>
                  </li>
                  <li>
                    <a href="#">Furnishing</a>
                  </li>
                  <li>
                    <a href="#">upholstery solutions.</a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">COMPANY</h3>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Catelog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-gray-300 mb-2">LEGAL</h3>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-yellow-600 my-6"></div>

          {/* Bottom Section: Logo & Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo & Info */}
            <div className="flex items-center space-x-2">
              <div className=" bg-transparent backdrop-blur-md rounded-full flex items-center justify-center border border-yellow-700/50 shadow-lg w-20 h-20">
                <img
                  src="https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreihpyskso3k3evs355tmrd5fn747g4liyhz3znjmutxio6ujpyrefu"
                  alt="Logo"
                  className="h-4 w-14 md:w-14 md:h-14 object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  Manny Production & Interior Design.
                </h2>
                <p className="text-gray-400 text-sm">
                  Providing reliable tech since 1992
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m11.7 3.6l.365-.002l.653.004c.872.006 2.46.026 4.06.086l.257.01c1.8.071 3.57.195 4.36.409c.509.138.972.406 1.35.778c.373.372.641.836.779 1.34c.793 3.19.61 8.23.015 11.5c-.138.508-.406.972-.779 1.34s-.836.64-1.35.778c-1.75.477-8.48.506-9.28.508l-.807-.004c-.817-.006-2.22-.024-3.68-.074l-.465-.017l-.444-.018c-1.69-.073-3.3-.195-4.04-.396a3.02 3.02 0 0 1-2.129-2.118c-.797-3.18-.579-8.22-.015-11.5a3.02 3.02 0 0 1 2.129-2.119c1.63-.444 7.56-.51 9.03-.522zM9.04 8v8l7-4z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-10 left-4 group">
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex items-center bg-white text-black text-xs px-2 py-1 rounded-md">
      Reach us via Call
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={1}
      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 cursor-pointer"
      onClick={() => window.location.href = "tel:+2349071770868"} // Replace with your number
    >
      <path d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z"></path>
    </svg>
  </div>
  <div className="fixed bottom-10 right-4 group">
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex items-center bg-white text-black text-xs px-2 py-1 rounded-md">
      Reach us on WhatsApp
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 cursor-pointer"
      onClick={() => window.location.href = "https://wa.me/+2349033765699"} // Replace with your WhatsApp number
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
    </svg>
  </div>
    </div>
   
  )
}
