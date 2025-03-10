"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const images = [
  "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreigavloespmyryfryfwz3xetvimi56tuamljkh5zbdf5nbxnfupr2m",
  "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreia7necmdjeo2zi3adxpak54elrgjuslogbzdrqhhv7vr5ttq2wpoy",
  "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
  "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiccm5qnddeleyro2zj6gd3boi4ymaszuqlril2a6wth6auyty5opq",
  "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifk2s27k24pgqeya7m57vitnhlwrqw3debnxlbjkohezjunbd7rci",
];

export default function MovingCards() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"], // Moves continuously
      transition: { ease: "linear", duration: 15, repeat: Infinity },
    });
  }, [controls]);

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center bg-transparent">
      <motion.div className="flex gap-4" animate={controls}>
        {[...images, ...images].map((src, index) => {
          const middleIndex = Math.floor(images.length / 2);
          let scale = 1;

          if (index % images.length === middleIndex) scale = 2.2; // Middle Image (Biggest)
          else if (
            index % images.length === middleIndex - 1 ||
            index % images.length === middleIndex + 1
          )
            scale = 1.6; // Images beside middle (Medium)
          else scale = 1.2; // Outer Images (Smallest)

          return (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
              style={{
                width: `${scale * 80}px`,
                height: `${scale * 120}px`,
                transformOrigin: "bottom",
              }}
              animate={{ scale }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
