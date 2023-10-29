import { BackgroundImage } from "./BackgroundImage/BackgroundImage";
import { LearnAbout } from "./LearnAbout/LearnAbout";
import { OurDevisionSide } from "./OurDevisionSide/OurDevisionSide";

export const HomePage = () => {
  return (
    <div>
      <BackgroundImage />
      <OurDevisionSide />
      <LearnAbout />
    </div>
  );
};
