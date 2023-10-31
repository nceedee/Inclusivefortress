import React, { useState, useEffect } from "react";

interface CountingNumberProps {
  targetCount: number;
  speed?: number;
}

export const CountingNumber: React.FC<CountingNumberProps> = ({
  targetCount,
  speed = 90,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetCount) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [count, targetCount, speed]);

  return <h1 className="text-primary">{count}+</h1>;
};
