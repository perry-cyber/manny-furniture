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
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeiachixp6ghy4ocoscd6h3qfxngmy6fv43wtohv36smt2y6e3jmczy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeia76qhs2qasotwcodgfewd7eogqahulmmgwnziprnxbavcju7cwjq",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeibjf6s4p6mkhadczbe5iedmmwxo3ceqa4seprk5l4yzjmle3n7mgi",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeifgramii63n2kbnkiosixwklbsrrb42vp2i2pdswtvi4obkvxn6le",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeicqypgpz4h4rvjddom6blbtps7o6dkzyclydnc2x7cjifhyeihvcy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeidkn2oxz3blaww7twuforkvpyurckm4al7abz73vaxpvobebvkxi4",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeierr3mbcd5vjyjlxz5bu2juftzhqd6azlmk3urgojleujq6s35nca",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeiee44dct6a3qkwpmmvj5a3iciuhx6zmfsml4hacmufoxiyudmgoqi",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreie4wa2jeirfatr23nl67wlmuo4p34fxhulcrxm33sepfxot2o52ea",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeiciyumc2bza3oe2jkmnga33d5gfb4ad34kajyoya7zv2cnlxhtyji",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreidaf2pr36rtuhhuaev6lphp65kgcsbxc74n3w2t22xcugnzlpxjzm",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreifdqsrythty2s2hny6pragn6kiucktvprz47q3e7n4gwbdjfjuvlu",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreigy6cxig7iuyoycld2n256eanvh4fscptwri5vet674yhraqljkpy",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeicipc7vpb5reezza4u34r2qqhsxrxsa5jnkfgksvbsa7c5fnrspxu",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeib533d5h66sa74v4moebgxm7icw37qoh6q3luyeq4kmkbfmn3flbq",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafybeidrp4xuaz7sgyhl4v35n5fzafcbykpobfwffe6opspziypq5iox74",
    "https://harlequin-legal-ox-300.mypinata.cloud/ipfs/bafkreieprzzz4krqajmairv6wid2ksrvtvgkw46nwi6gknejczksiree5y"
  ];