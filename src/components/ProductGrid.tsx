import React from "react";
import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";
import { ProductGridProps } from "../types";

const ProductGrid: React.FC<ProductGridProps> = ({
  maxItems = 8,
  variant = "landing",
}) => {
  const items = Array(maxItems).fill(null);

  return (
    <div className={styles.product_grid}>
      {items.map((_, index) => (
        <ProductCard key={index} variant={variant} />
      ))}
    </div>
  );
};

export default ProductGrid;
