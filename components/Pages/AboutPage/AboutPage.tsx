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
      <CorporateCulture />
    </div>
  );
};
