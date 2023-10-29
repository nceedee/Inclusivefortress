import { BackgroundImage } from "./BackgroundImage/BackgroundImage";
import { HealthAndHappy } from "./HealthAndHappy/HealthAndHappy";
import { LearnAbout } from "./LearnAbout/LearnAbout";
import { OurDevisionSide } from "./OurDevisionSide/OurDevisionSide";

export const HomePage = () => {
  return (
    <div>
      <BackgroundImage />
      <OurDevisionSide />
      <LearnAbout />
      <HealthAndHappy />
    </div>
  );
};
