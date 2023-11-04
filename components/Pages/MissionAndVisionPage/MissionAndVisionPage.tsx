import React from "react";
import { MissionAndVisionBackgroundImage } from "./MissionAndVisionBackgroundImage/MissionAndVisionBackgroundImage";
import { Mission } from "./Mission/Mission";
import { Vision } from "./Vision/Vision";

export const MissionAndVisionPage = () => {
  return (
    <div>
      <MissionAndVisionBackgroundImage />
      <div className="flex justify-around items-center bg-primary my-11 p-8 sm:flex-col md:flex-row  sm:space-y-5">
        <div className="md:w-[40%] sm:w-[100%]">
          <h1 className="font-bold text-4xl text-accent text-center p-4">
            Our Vision Statement
          </h1>
          <Vision />
        </div>
        <div className="md:w-[40%] sm:w-[100%]">
          <h1 className="font-bold text-4xl text-center p-4 text-accent">
            Our Mission Statement
          </h1>
          <Mission />
        </div>
      </div>
    </div>
  );
};
