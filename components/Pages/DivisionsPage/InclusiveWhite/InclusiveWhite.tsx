import Image from "next/image";
import React from "react";
import { products } from "../ProductData";



export const InclusiveWhite: React.FC = () => {
  return (
    <div className="p-8 my-11 bg-primary">
      <h1 className="text-2xl font-semibold mb-4 text-accent">Inclusive White Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <button
              className="bg-secondary text-white p-2 rounded-md mt-2"
              onClick={() => {
                window.location.href =
                  "https://www.jumia.com.ng/inc-fortress-limited/"; 
              }}
            >
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
