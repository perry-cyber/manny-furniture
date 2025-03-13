import React from 'react'
import { ParallaxScroll } from './ui/parallax-scroll'
interface SofaProps {
    id?: string;
  }
  
  export default function Sofa({ id }: SofaProps) {
    return (
      <div id={id} className="bg-black">
        <h1 className="md:block text-xl pt-10 pb-10 md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
          SOFA
        </h1>
        <ParallaxScroll images={images} />
      </div>
    );
  }
  


const images = [
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
  ];