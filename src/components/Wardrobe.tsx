import React from 'react'
import { ParallaxScroll } from './ui/parallax-scroll'

interface WardrobeProps {
    id?: string;
  }
  
  export default function Wardrobe({ id }: WardrobeProps) {
    return (
      <div id={id} className="bg-black">
        <h1 className="md:block text-xl pt-10 pb-10 md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
          WARDROBE
        </h1>
        <ParallaxScroll images={images} />
      </div>
    );
  }
  


const images = [
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidkgpeu4inwtucspbhmbx4rpoxr5e4rxkn4euh4yrpdzdk7hrrkxy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifp763lxkbwxymbzksovqbljk4dj7atezz4qvnyyv23jnt2zpovwu",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreic6ksoi3hbbsuowfmofrv45kcz5bedt5jgegcmhshqa2pyvijm2sm",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidwxyabmcqf6du6uxilnj66423ioe4cw5r2oo7eitbyzb7zx2r65a",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiec6aikme57cjr4yd5wsx4hu37ijm3ytjtk5hvisjs7mcd6f7bqpy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeihcnsflpyqd37hmlrdo2dyxesesx4f3yumj3sfimkb7qjtbpdauwy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiesxgec6q4itnhetmtrct4wdgng3rpbnkwphqaddd25agkg2pqe24",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreigpubm3mg2qh4vru3dr46rzig6c62lja3fbv4bqvicnessknqnbzq",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiakw6pdg4m6enepvitp6v625lmb25msfi3c2ooy6l7l57rbn4zffu"
  ];
  