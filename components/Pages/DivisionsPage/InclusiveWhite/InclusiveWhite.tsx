import React, { useState } from "react";
import { products } from "../ProductData";
import { ProductModal, Product } from "../ProductModal";

export const InclusiveWhite: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="p-8 my-11 bg-primary">
      <h1 className="text-2xl font-semibold mb-4 text-accent">
        Inclusive White Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover cursor-pointer" // Set the desired height and width
              onClick={() => openModal(product)}
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
      {selectedProduct && (
        <ProductModal selectedProduct={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};
