// ProductCardB.tsx
import React from "react";

interface ProductCardProps {
  id: number; // Added an id for identifying the product
  image: string;
  title: string;
  description: string;
  onSelect: (id: number) => void; // Callback function when a product is selected
  isSelected: boolean; // State to indicate if the product is selected
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  onSelect,
  isSelected,
}) => {
  return (
    <div className="flex flex-col items-center bg-white p-4 shadow rounded">
      <img src={image} alt={title} className="w-32 h-32 object-cover" />
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button
          onClick={() => onSelect(id)}
          className={`mt-4 w-full bg-red-500 text-white py-2 px-4 rounded ${
            isSelected ? "bg-black" : "hover:bg-red-700"
          }`}
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
