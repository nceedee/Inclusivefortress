import Image from 'next/image';
import React from 'react'

export const Vision = () => {
  return (
    <div className=" bg-accent shadow-lg p-6 rounded-md">
      <div className="border-b">
        <Image
          src="/image/vission.png"
          alt=""
          width={400}
          height={300}
          className="rounded w-full"
          objectFit="cover"
        />
      </div>
      <div className="mt-5">
        <p>
          Our vision is to be a global leader in providing unparalleled comfort
          and satisfaction through innovative, trusted products and services. We
          aspire to set the standard for integrity in all our endeavors, and we
          aim to make a profound impact on societies worldwide, creating a more
          comfortable and harmonious world, with our influence extending to the
          ends of the Earth.
        </p>
      </div>
    </div>
  );
}
