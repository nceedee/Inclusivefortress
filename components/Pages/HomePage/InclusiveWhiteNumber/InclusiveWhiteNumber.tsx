import React from "react";
import { CountingNumber } from "./CountingNumber";

export const InclusiveWhiteNumber: React.FC = () => {
  return (
    <div className="bg-primary py-12">
      <div className="h-auto p-11 text-secondary bg-accent flex sm:flex-col md:flex-row md:text-7xl sm:text-2xl justify-evenly items-center w-full font-bold">
        <CountingNumber targetCount={1000} speed={90} />
        <h1>Inclusive White</h1>
      </div>
    </div>
  );
};
