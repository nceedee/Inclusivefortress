import { Button } from "@/components/Global/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const OurDevisionSide = () => {
  return (
    <div className="bg-primary p-8 flex flex-col space-y-4 text-accent relative">
      <div>
        <h1 className="md:text-7xl sm:text-3xl font-bold">Our Divisions</h1>
      </div>
      <div className="relative h-96">
        <Image
          src="/image/division.jpeg"
          layout="fill"
          objectFit="cover"
          alt=""
        />
        <div className="absolute inset-0 flex items-end justify-center text-center">
          <div className="bg-gradient-to-t from-transparent to-black via-transparent bg-opacity-[.5] p-5 text-white text-center">
            <div className="flex flex-col space-y-4">
              <h4 className="text-2xl font-bold">Inclusive White</h4>
              <Button>
                <Link href="">Click here</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
