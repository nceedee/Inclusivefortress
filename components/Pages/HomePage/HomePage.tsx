import { BackgroundImage } from "./BackgroundImage/BackgroundImage";
import { Distributions } from "./Distributions/Distributions";
import { HealthAndHappy } from "./HealthAndHappy/HealthAndHappy";
import { InclusiveWhiteNumber } from "./InclusiveWhiteNumber/InclusiveWhiteNumber";
import { LearnAbout } from "./LearnAbout/LearnAbout";
import { OurDevisionSide } from "./OurDevisionSide/OurDevisionSide";

export const HomePage = () => {
  return (
    <div>
      <BackgroundImage />
      <OurDevisionSide />
      <LearnAbout />
      <HealthAndHappy />
      <InclusiveWhiteNumber />
      <Distributions />
    </div>
  );
};
