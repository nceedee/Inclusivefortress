import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary h-auto mt-auto text-accent p-8">
      <div className="max-w-[2000px] sm:space-y-8 md:space-y-0 sm:items-center md:items-start sm:flex-col md:flex-row flex justify-around w-full m-auto">
        <div className="md:w-[25%] sm:w-[100%]">
          <h4 className="text-2xl font-bold">About Inclusive Fortress</h4>
          <p>
            We proudly traverse the diverse landscapes of healthcare and general
            supplies, driven by a profound dedication to making a transformative
            difference in the lives of people around the world.
          </p>
          <Link href="/about" className="hover:text-secondary mt-8">
            Read More...
          </Link>
        </div>
        <div className="md:w-[20%] sm:w-[100%]">
          <h4 className="text-2xl font-bold">Our Divisions</h4>
          <Link
            href="/divisions/inclusive-white"
            className="hover:text-secondary"
          >
            Inclusive White
          </Link>
        </div>
        <div className="md:w-[20%] sm:w-[100%]">
          <h4 className="text-2xl font-bold">Our Locations</h4>
          <Link href="/contact">
            <Image src="/image/location.png" alt="" width={400} height={400} />
          </Link>
        </div>
      </div>
      <div className="border-t mt-6 flex sm:flex-col md:flex-row sm:text-center sm:space-y-4 justify-around p-9 items-center">
        <Link href="/" className="bg-secondary text-accent">
          Inclusive Fortress
        </Link>
        <p>© 2023 InclusiveFortress, All Rights Reserved</p>
      </div>
    </footer>
  );
};
