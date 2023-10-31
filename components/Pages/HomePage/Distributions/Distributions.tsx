import React from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BiMap } from "react-icons/bi";
import { CountingNumber } from "../InclusiveWhiteNumber/CountingNumber";

export const Distributions = () => {
  return (
    <div className="bg-primary py-12 mb-6">
      <div className="h-auto p-11 sm:space-y-5 text-secondary bg-accent flex md:text-4xl sm:flex-col md:flex-row sm:text-2xl justify-evenly items-center w-full font-bold">
        <div className="flex justify-center items-center flex-col space-y-2">
          <BsFillBoxSeamFill />
          <div className="text-primary">
            <CountingNumber targetCount={2000} speed={90} />
          </div>
          <h2>Product</h2>
        </div>
        <div className="flex justify-center items-center flex-col space-y-2">
          <LiaPeopleCarrySolid />
          <div className="text-primary">
            <CountingNumber targetCount={100} speed={90} />
          </div>
          <h2>Distributors</h2>
        </div>
        <div className="flex justify-center items-center flex-col space-y-2">
          <BiMap />
          <h1 className="text-primary">All Locations</h1>
          <h2>Locations</h2>
        </div>
      </div>
    </div>
  );
};
