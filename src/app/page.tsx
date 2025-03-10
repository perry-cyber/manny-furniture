"use client";
import React from "react";
import { HeroParallax } from "../components/ui/google-gemini-effect";
import FloatingNavbar from '../components/FloatingNav';
import Snowfall from "@/components/Snowfall";

export default function HeroParallaxDemo() {

  return( <>
     <div
      className="flex justify-center items-center inset-0 bg-black  bg-[radial-gradient(circle_at_top_right,_rgba(255,255,0,0.2),_transparent_20%),radial-gradient(circle_at_bottom,_rgba(255,255,0,0.2),_transparent_20%)] rounded-md relative pb-4 overflow-clip"
      
    >
      <Snowfall/>
<FloatingNavbar/>
  <HeroParallax products={products} />;
  <div className="fixed bottom-20 left-4 group">
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

  {/* WhatsApp Button - Right Side */}
  <div className="fixed bottom-20 right-4 group">
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
  </>
  )
}
export const products = [
  {
    title: "TV Console",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
  },
  {
    title: "Wardrobe",
    link: "https://cursor.so",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifk2s27k24pgqeya7m57vitnhlwrqw3debnxlbjkohezjunbd7rci",
  },
  {
    title: "TV Stand",
    link: "https://userogue.com",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiccm5qnddeleyro2zj6gd3boi4ymaszuqlril2a6wth6auyty5opq",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreigavloespmyryfryfwz3xetvimi56tuamljkh5zbdf5nbxnfupr2m",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreih73llsz7olmq5anfmeuugp4valqz4pscqnbfog5khntaxbhqb2zm",
  },
  {
    title: "Pixel Perfect",
    link: "https://manny-furniture.vercel.app",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreibkgp57la66vbd6o4jqggrba6bwg33tccfnxrvf74fxtc4obmzzrm",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiccm5qnddeleyro2zj6gd3boi4ymaszuqlril2a6wth6auyty5opq",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreibkgp57la66vbd6o4jqggrba6bwg33tccfnxrvf74fxtc4obmzzrm",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreia7necmdjeo2zi3adxpak54elrgjuslogbzdrqhhv7vr5ttq2wpoy",
  },
];
