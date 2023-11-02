import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export const BackToTopArrow: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down a certain amount (e.g., 200 pixels)
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        showArrow ? "block" : "hidden"
      } fixed bottom-5 right-5 bg-secondary text-accent p-4 rounded shadow cursor-pointer`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  );
};
