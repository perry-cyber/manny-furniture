"use client";
import React, { useState, useEffect, useRef } from "react";

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000; // Animation duration in ms
          const increment = Math.ceil(target / (duration / 16)); // Adjust increment step

          const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 16); // Run every frame (~60fps)

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl font-bold text-yellow-500">
      {count.toLocaleString()}+
    </div>
  );
};

const CommunitySection = () => {
  return (
    <div className="bg-[#1E1E1E] m-5 rounded-xl max-w-7xl mx-auto p-8 md:p-12 lg:p-16 text-white">
      {/* Heading & Description */}
      <div className="md:flex md:justify-between gap-4 md:items-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">
          Be a part of the Manny Production<br />
            <span className="text-yellow-500">where craftsmanship meets excellence</span> <br />
            <span className="text-yellow-500">elevate your space now!</span>
          </h1>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <p className="text-gray-300">
          Join the countless satisfied clients who trust us for high quality, handcrafted furniture. From timeless designs to modern innovations, we create pieces that blend style, comfort, and durability. Experience exceptional craftsmanship tailored to elevate your space.
          </p>
          <button onClick={() => window.location.href = "https://wa.me/+2349033765699"} className="mt-4 bg-white cursor-pointer text-black font-medium px-6 py-2 rounded-lg">
            Get connected
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        <div>
          <Counter target={214} />
          <p className="text-gray-300">
            <a href="#" className="font-bold">
            Project Completed and Delivered
            </a>
          </p>
        </div>
        <div>
          <Counter target={68} />
          <p className="text-gray-300">
            <a href="#" className="font-bold">
              Returning Customers
            </a>
          </p>
        </div>
        <div>
          <Counter target={52} />
          <p className="text-gray-300">
            <a href="#" className="font-bold">
              Hard working Staffs
            </a>
          </p>
        </div>
      </div>

    
    </div>
  );
};



export default CommunitySection;