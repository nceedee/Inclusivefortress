import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
          <a className="text-[18px]" href="tel:+2349031594924">
            + (234) 903 159 4924
          </a>
        </div>
        <div className="flex space-x-6 items-center">
          <AiOutlineWhatsApp />
          <a href="https://wa.me/+2348026897080" className="text-[18px]">
            +234 802 689 7080
          </a>
        </div>
        <div className="flex space-x-6 items-center">
          <h4>@</h4>
          <a className="text-[18px]" href="mailto:inclusivefortress@gmail.com">
            inclusivefortress@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
