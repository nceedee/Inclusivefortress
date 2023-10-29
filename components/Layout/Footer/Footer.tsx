import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary h-auto mt-auto text-accent p-8">
      <div className="max-w-[2000px] space-y-8 items-center sm:flex-col md:flex-row flex justify-around w-full m-auto">
        <div className="md:w-[25%] sm:w-[100%]">
          <h4 className="text-2xl font-bold">About Inclusive Fortress</h4>
          <p>
            Avila Naturalle is a leading manufacturer of 100% NATURAL body care
            products in Africa. Since inception in 2017, the company has
            redefined the Nigerian Skincare
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
    </footer>
  );
};
