import { Button } from "@/components/Global/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LearnAbout = () => {
  return (
    <div className="bg-primary text-accent flex justify-center sm:flex-col md:flex-row  md:space-x-4 sm:space-x-0 sm:space-y-4 p-8 mt-12">
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
        <h4 className="font-bold text-1xl">LEARN ABOUT</h4>
        <div className=" text-5xl">
          <h2 className="font-bold">Inclusive</h2>
          <h2 className="font-bold">Fortress</h2>
        </div>
        <p>
          We proudly traverse the diverse landscapes of healthcare and general
          supplies, driven by a profound dedication to making a transformative
          difference in the lives of people around the world.
        </p>
        <Button className="mt-4">
          <Link href="/about">Read More</Link>
        </Button>
      </div>
    </div>
  );
};
