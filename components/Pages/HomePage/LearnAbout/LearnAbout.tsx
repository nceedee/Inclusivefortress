import { Button } from "@/components/Global/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LearnAbout = () => {
  return (
    <div className="bg-primary text-accent flex justify-center sm:flex-col md:flex-row  md:space-x-4 sm:space-x-0 sm:space-y-4 p-4 mt-12">
      <div className="md:w-[40%] sm:w-full">
        <Image
          src="/image/learnabout.jpeg"
          alt=""
          width={500}
          height={400}
          className="rounded"
        />
      </div>
      <div className="md:w-[40%] sm:w-full">
        <h4 className="font-bold text-1xl">LEARN ABOUT</h4>
        <div className=" text-5xl">
          <h2 className="font-bold">Inclusive</h2>
          <h2 className="font-bold">Fortress</h2>
        </div>
        <p>
          Avila Naturalle is a leading manufacturer of 100% NATURAL Skincare
          products in Africa. Since inception in 2017, the company has redefined
          the Nigerian body care space by promoting the health and safety of
          Nigerians through the encouragement of the adoption of all-natural
          body care solutions comprising of skincare, hair care, mouth care,
          foot care etc.
        </p>
        <Button className="mt-4">
          <Link href="/about">Read More</Link>
        </Button>
      </div>
    </div>
  );
};
