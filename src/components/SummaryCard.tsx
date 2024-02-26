// ProductCardB.tsx
import React from "react";
import { products } from "../db/products";
import { ProductCard } from ".";

interface SummaryCardProps {
  doc: {
    name: string;
    email: string;
    phone: number;
    product: number;
  };
}

const SummaryCard: React.FC<SummaryCardProps> = ({ doc }) => {
  const { name, email, phone, product } = doc;

  const selectedProduct = products.filter((item) => item.id === product);

  return (
    <section className="flex h-screen pt-2 pb-60 bg-primary-50">
      <div className="m-auto w-4/5 max-w-xl border border-neutral-300 shadow-md rounded-md bg-white p-10">
        <p className="text-lg text-gray-800 font-semibold mb-2">{name}</p>
        <p className="text-md text-gray-600 mb-2">{email}</p>
        <p className="text-md text-gray-600 mb-2">{phone}</p>

        {selectedProduct &&
          selectedProduct.map((item) => {
            return (
              <ProductCard
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                isSelected={true}
                onSelect={() => {}}
              ></ProductCard>
            );
          })}
      </div>
    </section>
  );
};

export default SummaryCard;
