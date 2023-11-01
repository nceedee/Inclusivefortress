import React from "react";
import { BackgroundImage } from "../HomePage/BackgroundImage/BackgroundImage";
import { AboutBackgroundImage } from "./AboutBackgroundImage/AboutBackgroundImage";
import { AllAboutUs } from "./AllAboutUs/AllAboutUs";
import { CorporateCulture } from "./CorporateCulture/CorporateCulture";

export const AboutPage = () => {
  return (
    <div>
      <AboutBackgroundImage />
      <AllAboutUs />
      <div>
        <h1 className="text-center text-5xl text-secondary font-bold p-4">Corporate Culture</h1>
        <CorporateCulture />
      </div>
    </div>
  );
};
