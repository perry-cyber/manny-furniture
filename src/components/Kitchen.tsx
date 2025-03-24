import React from 'react'
import { ParallaxScroll } from './ui/parallax-scroll'

interface kitchenProps {
    id?: string;
  }
  
  export default function Kitchen({ id }: kitchenProps) {
    return (
      <div id={id} className="bg-black">
        <h1 className="md:block text-xl pt-10 pb-10 md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
          KITCHEN CABINET
        </h1>
        <ParallaxScroll images={images} />
      </div>
    );
  }
  


const images = [
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifyofdemjijsz4yj4bsy2hhak4ttgl3k4ldi5xu7zygaif6rpfueq",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeihmdxg5j5yddn4wuj426pbqg3sjkkbadlnmx4ebm5g3kx3bagvmpe",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiexknzrt2vn5a33cxp2f2uwufxwroyzvnrfzvk6behkq777yyozyi",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreicohvrzku4hupoavxgtjzrut7kjxcoc75gnhlmixpoaccp2d4o4s4",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifs26btnzfxnrjkodymoiwmg3bz5hcivhoebg3bfxw4kgksef57oe",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreic7czmligxr4ruoj2en7cqjru2qbrstkt46dzsw6zffilzvuqtf74",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeih5ha2kyu5dwcd4tw3fs3uyzbachbhcntt7rf2pmgx3y3hxsbjhg4",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreiazrgqzkq475przr72rb24efk5ojzd2k274fjm7fopu4lkoy3vgku",
  ];
  