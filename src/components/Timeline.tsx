import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Foundational Principles",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          At Manny Furniture Production and Interior, we are guided by a set of core principles that shape our culture, values, and behavior. These principles include:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24">
<path d="M 12.542969 2 C 11.007813 2.039063 9.542969 2.375 8.289063 3 C 8.953125 2.9375 9.0625 2.890625 9.6875 2.890625 C 12.082031 2.832031 13.152344 3.617188 14 5 C 14.890625 6.429688 14.859375 8.15625 14.859375 9.585938 C 14.859375 12.972656 16.648438 14 18.433594 14 C 20.351563 14 22 11.902344 22 9.984375 C 21.953125 5.835938 16.914063 2 12.542969 2 Z M 7.875 4 C 7.125 3.984375 6.359375 4.148438 5.726563 4.484375 C 2.035156 6.4375 0.96875 12.621094 3.054688 16.441406 C 3.800781 17.851563 4.816406 18.992188 5.996094 19.824219 C 5.707031 19.417969 5.503906 19.109375 5.191406 18.578125 C 4.347656 17.066406 4.433594 15.332031 5.191406 13.90625 C 5.992188 12.394531 7.414063 11.597656 8.65625 10.929688 C 11.636719 9.375 11.550781 7.195313 10.839844 5.640625 C 10.339844 4.554688 9.125 4.027344 7.875 4 Z M 21.847656 14 C 20.710938 15.855469 18.96875 16.667969 17.359375 16.667969 C 15.621094 16.667969 14.195313 16.042969 12.988281 15.285156 C 10.582031 13.769531 8.261719 14.570313 7.371094 16.132813 C 6.433594 17.738281 7.371094 20.234375 9.066406 21.21875 C 12.632813 23.3125 18.519531 20.949219 20.660156 17.15625 C 21.25 16.167969 21.648438 15.089844 21.847656 14 Z"></path>
</svg> A commitment to customer satisfaction and delight
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24">
<path d="M 12.542969 2 C 11.007813 2.039063 9.542969 2.375 8.289063 3 C 8.953125 2.9375 9.0625 2.890625 9.6875 2.890625 C 12.082031 2.832031 13.152344 3.617188 14 5 C 14.890625 6.429688 14.859375 8.15625 14.859375 9.585938 C 14.859375 12.972656 16.648438 14 18.433594 14 C 20.351563 14 22 11.902344 22 9.984375 C 21.953125 5.835938 16.914063 2 12.542969 2 Z M 7.875 4 C 7.125 3.984375 6.359375 4.148438 5.726563 4.484375 C 2.035156 6.4375 0.96875 12.621094 3.054688 16.441406 C 3.800781 17.851563 4.816406 18.992188 5.996094 19.824219 C 5.707031 19.417969 5.503906 19.109375 5.191406 18.578125 C 4.347656 17.066406 4.433594 15.332031 5.191406 13.90625 C 5.992188 12.394531 7.414063 11.597656 8.65625 10.929688 C 11.636719 9.375 11.550781 7.195313 10.839844 5.640625 C 10.339844 4.554688 9.125 4.027344 7.875 4 Z M 21.847656 14 C 20.710938 15.855469 18.96875 16.667969 17.359375 16.667969 C 15.621094 16.667969 14.195313 16.042969 12.988281 15.285156 C 10.582031 13.769531 8.261719 14.570313 7.371094 16.132813 C 6.433594 17.738281 7.371094 20.234375 9.066406 21.21875 C 12.632813 23.3125 18.519531 20.949219 20.660156 17.15625 C 21.25 16.167969 21.648438 15.089844 21.847656 14 Z"></path>
</svg> A culture of innovation and creativity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24">
<path d="M 12.542969 2 C 11.007813 2.039063 9.542969 2.375 8.289063 3 C 8.953125 2.9375 9.0625 2.890625 9.6875 2.890625 C 12.082031 2.832031 13.152344 3.617188 14 5 C 14.890625 6.429688 14.859375 8.15625 14.859375 9.585938 C 14.859375 12.972656 16.648438 14 18.433594 14 C 20.351563 14 22 11.902344 22 9.984375 C 21.953125 5.835938 16.914063 2 12.542969 2 Z M 7.875 4 C 7.125 3.984375 6.359375 4.148438 5.726563 4.484375 C 2.035156 6.4375 0.96875 12.621094 3.054688 16.441406 C 3.800781 17.851563 4.816406 18.992188 5.996094 19.824219 C 5.707031 19.417969 5.503906 19.109375 5.191406 18.578125 C 4.347656 17.066406 4.433594 15.332031 5.191406 13.90625 C 5.992188 12.394531 7.414063 11.597656 8.65625 10.929688 C 11.636719 9.375 11.550781 7.195313 10.839844 5.640625 C 10.339844 4.554688 9.125 4.027344 7.875 4 Z M 21.847656 14 C 20.710938 15.855469 18.96875 16.667969 17.359375 16.667969 C 15.621094 16.667969 14.195313 16.042969 12.988281 15.285156 C 10.582031 13.769531 8.261719 14.570313 7.371094 16.132813 C 6.433594 17.738281 7.371094 20.234375 9.066406 21.21875 C 12.632813 23.3125 18.519531 20.949219 20.660156 17.15625 C 21.25 16.167969 21.648438 15.089844 21.847656 14 Z"></path>
</svg> A dedication to building long-term relationships with our clients and partners
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 24 24">
<path d="M 12.542969 2 C 11.007813 2.039063 9.542969 2.375 8.289063 3 C 8.953125 2.9375 9.0625 2.890625 9.6875 2.890625 C 12.082031 2.832031 13.152344 3.617188 14 5 C 14.890625 6.429688 14.859375 8.15625 14.859375 9.585938 C 14.859375 12.972656 16.648438 14 18.433594 14 C 20.351563 14 22 11.902344 22 9.984375 C 21.953125 5.835938 16.914063 2 12.542969 2 Z M 7.875 4 C 7.125 3.984375 6.359375 4.148438 5.726563 4.484375 C 2.035156 6.4375 0.96875 12.621094 3.054688 16.441406 C 3.800781 17.851563 4.816406 18.992188 5.996094 19.824219 C 5.707031 19.417969 5.503906 19.109375 5.191406 18.578125 C 4.347656 17.066406 4.433594 15.332031 5.191406 13.90625 C 5.992188 12.394531 7.414063 11.597656 8.65625 10.929688 C 11.636719 9.375 11.550781 7.195313 10.839844 5.640625 C 10.339844 4.554688 9.125 4.027344 7.875 4 Z M 21.847656 14 C 20.710938 15.855469 18.96875 16.667969 17.359375 16.667969 C 15.621094 16.667969 14.195313 16.042969 12.988281 15.285156 C 10.582031 13.769531 8.261719 14.570313 7.371094 16.132813 C 6.433594 17.738281 7.371094 20.234375 9.066406 21.21875 C 12.632813 23.3125 18.519531 20.949219 20.660156 17.15625 C 21.25 16.167969 21.648438 15.089844 21.847656 14 Z"></path>
</svg> A passion for excellence and quality
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Strategic Objectives",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Our strategic objectives are centered around delivering exceptional value to our clients, driving business growth, and maintaining our position as a leader in the Nigerian furniture industry. 
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Building strategic partnerships with interior designers, architects, and other industry professionals to enhance our services and offerings
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mission Statement",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Our mission is to provide bespoke furniture and interior design solutions that exceed our clients' expectations, while maintaining a culture of excellence, innovation, and customer satisfaction.
          </p>
          
        </div>
      ),
    },
    {
      title: "Organizational Structure and Team",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Our team consists of experienced professionals who share our passion for furniture design, production, and interior design. We work closely with our partners, including interior designers and architects, to deliver comprehensive solutions that meet our clients' needs.
          </p>
          
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
         
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
