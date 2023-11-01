import React from 'react'

export const ContactBackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url('/image/contact-us-img-01.jpg')`,
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
      <h1 className="font-bold text-5xl p-8 text-accent">Contact Us</h1>
    </div>
  );
}
