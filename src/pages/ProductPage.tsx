// ProductsPage.tsx
import React, { useEffect, useState } from "react";
import ProductCardB from "../components/ProductCard";
import useDocumentId from "../hooks/useDocumentId";
import { useDocument } from "@automerge/automerge-repo-react-hooks";
import { UserFormData } from "../types";

const ProductsPage: React.FC = () => {
  const docUrl = useDocumentId();
  const [doc, changeDoc] = useDocument<UserFormData>(docUrl);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (doc && doc.form) {
      setSelectedProductId(doc.form.product);
    }
  }, [doc]);

  const handleSelectProduct = (id: number) => {
    changeDoc((doc) => (doc.form.product = id));
    if (selectedProductId === id) {
      setSelectedProductId(null);
    } else {
      setSelectedProductId(id);
    }
  };

  type Product = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: string; // assuming price is a string that includes the currency symbol
  };

  const products: Product[] = new Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    image: "./product-image.png",
    title: `Product ${index + 1}`,
    description: "Lorem ipsum dolor sit amet",
    price: `${(index + 1) * 10}€`, // Example to generate different prices
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCardB
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          onSelect={handleSelectProduct}
          isSelected={selectedProductId === product.id}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
