import React, { useState } from "react";
import { Button } from "@/components/Global/Button/Button";
import Link from "next/link";

export const HealthAndHappy = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="text-accent mt-16">
      <div className="bg-primary p-8">
        <h1 className="md:text-7xl sm:3xl font-bold max-w-[2000px] text-center">
          Healthier & Happier World
        </h1>
      </div>
      <div
        className="max-w-[2000px] py-20 w-full bg-no-repeat flex flex-col sm:p-4 justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/image/teeth.png')` }}
      >
        <div className="bg-accent text-primary rounded md:w-[50%] sm:w-[100%] p-6">
          <h4 className="md:text-2xl sm:text-1xl font-bold">
            Explore the Features Of
          </h4>
          <h1 className="font-bold md:text-6xl sm:text-4xl">Our Story</h1>
          <p className={`mt-5 ${showFullText ? "" : "line-clamp-4"}`}>
            {`First is that we're a Faith based establishment, firmly rooted in
            God and we're not repentant about our Faith. It was by the leading
            of God that this establishment was found. Just like every other
            genuine business, we started very small with what was at our
            disposal. Judging by where we were, it was madness to believe that
            the vision God has for this establishment is "THE ENDS OF THE
            EARTH". There's no establishment without challenges. We have
            experienced and still are experiencing challenges. One of the
            challenges of this time is in the area of compromise. If you ever
            stand to do business in righteousness and in integrity, it is like
            declaring war. We have maintained our ground and will continue to
            deal with our customers rightly upholding integrity. We have our
            values and we're not ready to compromise them or even step them
            down. We believe God is the owner of this establishment and we're
            just stewards who will give account.`}
          </p>
          {showFullText ? (
            <Button className="mt-5" onClick={toggleFullText}>
              Show Less
            </Button>
          ) : (
            <Button className="mt-5" onClick={toggleFullText}>
              Read More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
