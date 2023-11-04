import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export interface Product {
  id: number;
  name: string;
  image: string;
  slideImage: string[];
  description: string;
}

interface ProductModalProps {
  selectedProduct: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  selectedProduct,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? selectedProduct!.slideImage.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === selectedProduct!.slideImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-40"></div>
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <div className="relative p-4 md:p-8 bg-white rounded-lg w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-500 cursor-pointer z-50"
          >
            &times;
          </button>
          <div className="flex items-center justify-between">
            <div className="w-1/12 cursor-pointer p-2" onClick={prevSlide}>
              <BsChevronCompactLeft className="text-4xl text-gray-500" />
            </div>
            <div className="w-10/12">
              {selectedProduct && (
                <div className="p-4 md:p-8">
                  <img
                    src={selectedProduct.slideImage[currentIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <h1 className="text-2xl font-semibold mt-4">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedProduct.description}
                  </p>
                </div>
              )}
            </div>
            <div className="w-1/12 cursor-pointer p-2" onClick={nextSlide}>
              <BsChevronCompactRight className="text-4xl text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
