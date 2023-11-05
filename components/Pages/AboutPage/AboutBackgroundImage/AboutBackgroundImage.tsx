import React from "react";

export const AboutBackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/image/aboutbg.jpeg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "60vh",
    width: "100%",
  };

  return (
    <div className="mt-20 flex items-center " style={backgroundImageStyle}>
      <h1 className="font-bold text-5xl p-8 text-accent">About Us</h1>
    </div>
  );
};
