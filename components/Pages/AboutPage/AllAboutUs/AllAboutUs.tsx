import Image from "next/image";
import React from "react";
import { TheAbouts } from "./TheAbouts";

export const AllAboutUs = () => {
  return (
    <div className="bg-primary text-accent flex items-center justify-center sm:flex-col md:flex-row  md:space-x-4 sm:space-x-0 sm:space-y-4 p-8 mt-12">
      <div className="md:w-[40%] sm:w-full">
        <Image
          src="/image/learnabout.jpeg"
          alt=""
          width={400}
          height={300}
          className="rounded w-full"
          objectFit="cover"
        />
      </div>
      <div className="md:w-[40%] sm:w-full">
        <TheAbouts />
      </div>
    </div>
  );
};
