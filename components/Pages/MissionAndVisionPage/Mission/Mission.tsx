import Image from 'next/image';
import React from 'react'

export const Mission = () => {
  return (
    <div className=" bg-accent shadow-lg p-6 rounded-md">
      <div className="border-b">
        <Image
          src="/image/mission-statement.jpg"
          alt=""
          width={400}
          height={300}
          className="rounded w-full"
          objectFit="cover"
        />
      </div>
      <div className="mt-5">
        <p>
          Our mission is to deliver exceptional comfort and satisfaction through
          trusted, high-quality products and services. We uphold unwavering
          integrity and believe in the power of serving humanity. With faith and
          dedication, we aim to impact our societies and the world at large.
        </p>
      </div>
    </div>
  );
}
