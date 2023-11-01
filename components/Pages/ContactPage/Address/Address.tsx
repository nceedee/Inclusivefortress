import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Address = () => {
  return (
    <div className=" p-8 text-2xl flex justify-center">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-6 items-center">
          <CiLocationOn />
          <p className="text-[18px]">Online</p>
        </div>
        <div className="flex space-x-6 items-center">
          <BsFillTelephoneFill />
          <p className="text-[18px]">+ (234) 812 769 3839</p>
        </div>
        <div className="flex space-x-6 items-center">
          <h4>@</h4>
          <p className="text-[18px]">info@avilanaturalle.com</p>
        </div>
      </div>
    </div>
  );
};
