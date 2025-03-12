"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Fluffy Bedframe",
      button: "View Catelog",
      src: "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreia7necmdjeo2zi3adxpak54elrgjuslogbzdrqhhv7vr5ttq2wpoy",
    },
    {
      title: "Morden TV Console",
      button: "View Catelog",
      src: "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidzr2arqlqskqdfc2cd7o223ul5lbjaydmgjpyi5ufqntlezqayym",
    },
    {
      title: "Wardrobe",
      button: "View Catelog",
      src: "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifk2s27k24pgqeya7m57vitnhlwrqw3debnxlbjkohezjunbd7rci",
    },
    {
      title: "Walk in Closet",
      button: "View Catelog",
      src: "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreibkgp57la66vbd6o4jqggrba6bwg33tccfnxrvf74fxtc4obmzzrm",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
