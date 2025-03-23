import React from "react";
import styles from "../css_modules/ProductGrid.module.css";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  maxItems?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  maxItems = 8,
}) => {
  const displayProducts = products.slice(0, maxItems);

  return (
    <div className={styles.grid}>
      {displayProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
