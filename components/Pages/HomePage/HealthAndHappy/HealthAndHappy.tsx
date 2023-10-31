import { Button } from "@/components/Global/Button/Button";
import React from "react";

export const HealthAndHappy = () => {
  return (
    <div className=" text-accent mt-16">
      <div className="bg-primary p-8">
        <h1 className="md:text-7xl sm:3xl font-bold max-w-[2000px] text-center">
          Healthier & Happier World{" "}
        </h1>
      </div>
      <div
        className="max-w-[2000px] py-20 w-full bg-no-repeat flex flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/image/teeth.png')` }}
      >
        <div className="bg-accent text-primary rounded  md:w-[50%]  sm:w-[80%] p-6">
          <h4 className="md:text-2xl sm:text-1xl font-bold">
            Explore the Features Of
          </h4>
          <h1 className="font-bold md:text-6xl sm:text-4xl">Our Brand</h1>
          <h1 className="font-bold md:text-6xl sm:text-4xl"> Story</h1>
          <p className="mt-5">
            I got the divine inspiration to start working with natural
            ingredients to proffer solutions to thousands of people having
            skincare issues.
          </p>
          <Button className="mt-5">Read More</Button>
        </div>
      </div>
    </div>
  );
};
