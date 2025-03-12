"use client"

import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Adebayo Samson",
    review: "Was doubting since it was my first time, but i am glad it was delivered on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Oluchi Eze",
    review: "I love how soft the sofa was and how neat the kitchen cabinet came out, Thanks.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emmanuel Ozasuwa Odia",
    review: "the whole interior was really affordable and beautiful i love the whole setup, you guys will also work on my other appartment.",
    rating: 5,
  },
  {
    id: 4,
    name: "Chidebere Okoli",
    review: "Decent quality, but shipping was slow this time although very affordable thanks.",
    rating: 3,
  },
  {
    id: 5,
    name: "Adeola Samuel",
    review: "You guys did a clean job, the Tv console  came out the way it is in the catelog. Will definately patronize you again!",
    rating: 5,
  },
];

const ReviewSlider = () => {
  return (
    <div className="overflow-hidden bg-white text-white py-10">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex space-x-6 animate-scroll">
          {reviews.concat(reviews).map((review, index) => (
            <div
              key={index}
              className="max-w-[400px] bg-black p-6 rounded-lg shadow-lg"
            >
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-sm text-gray-400">⭐ {review.rating}/5</p>
              <p className="mt-2 text-sm ">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
