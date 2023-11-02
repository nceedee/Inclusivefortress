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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          dignissimos suscipit consequuntur quo qui quae rem quibusdam
          architecto reiciendis natus minima corrupti eos dicta aperiam
          cupiditate fuga libero illo. Ex quos nam ipsa tempore incidunt
          voluptas sed dolor sunt debitis ut! Hic consequuntur natus deleniti
          consectetur eum, incidunt sunt doloribus explicabo non perferendis
          possimus numquam eligendi nostrum repellat! Natus quaerat eum ex
          necessitatibus hic eveniet, laudantium rerum ut soluta? Velit nesciunt
          dolore odit. Voluptas, consectetur asperiores assumenda reprehenderit
          repellat praesentium nemo eaque ea perferendis ut accusamus cumque
          deleniti cupiditate? Sapiente fuga minus ab quibusdam debitis fugit
          molestiae voluptate aliquam eligendi.
        </p>
      </div>
    </div>
  );
}
