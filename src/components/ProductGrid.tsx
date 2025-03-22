import React from "react";
import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  maxItems?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ maxItems }) => {
  const items = Array(maxItems || 8).fill(null);

  return (
    <div
      className={`${styles.product_grid} ${
        maxItems ? styles.fixed_columns : ""
      }`}
    >
      {items.map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
