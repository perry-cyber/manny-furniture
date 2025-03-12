"use client";

import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showText && (
      <div className="fixed flex top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/55 text-lg font-semibold z-50 animate-bounce">
        <p>Scroll Down</p> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m17.16 7.59l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95zm0 4l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95z"></path></svg>
      </div>
    )
  );
}
