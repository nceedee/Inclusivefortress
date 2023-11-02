import React from 'react'

export const MissionAndVisionBackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/image/visonandmission.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div
      className="mt-20 flex md:h-[100vh] sm:h-[50vh] items-center "
      style={backgroundImageStyle}
    >
      <h1 className="font-bold text-5xl p-8 text-accent">Mission | Vision Statement</h1>
    </div>
  );
}
