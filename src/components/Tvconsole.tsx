import React from 'react'
import { ParallaxScroll } from './ui/parallax-scroll'

interface TvconsoleProps {
    id?: string;
  }
  
  export default function Tvconsole({ id }: TvconsoleProps) {
    return (
      <div id={id} className="bg-black">
        <h1 className="md:block text-xl pt-10 pb-10 md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
          TV CONSOLE
        </h1>
        <ParallaxScroll images={images} />
      </div>
    );
  }
  


const images = [
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeibcc7zzzwulu2cidprcfhafjyp3mg33mxlrdd6xbqsgrknyqs5t6a",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeiermm7wkurzxb2ym2cp4pzychxmzhqalopk3wug5xuiwnzzp3vjxa",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeifwbymvrbroeabb4h7vaan2eew2ngep72lnqcdi4smwp2kduz5x3q",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreib4ir7w53vmzzeizrkfh4xb553akz6qsdv273njrvkrq76tdqxtvy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiec6aikme57cjr4yd5wsx4hu37ijm3ytjtk5hvisjs7mcd6f7bqpy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeihcnsflpyqd37hmlrdo2dyxesesx4f3yumj3sfimkb7qjtbpdauwy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiesxgec6q4itnhetmtrct4wdgng3rpbnkwphqaddd25agkg2pqe24",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreigpubm3mg2qh4vru3dr46rzig6c62lja3fbv4bqvicnessknqnbzq",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiakw6pdg4m6enepvitp6v625lmb25msfi3c2ooy6l7l57rbn4zffu"
  ];
  