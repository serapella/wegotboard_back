import React from "react";
import styles from "../css_modules/ProductGrid.module.css";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  maxItems?: number;
  viewMode: "grid" | "list";
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  maxItems = 8,
  viewMode,
}) => {
  const displayProducts = products.slice(0, maxItems);

  return (
    <div className={viewMode === "grid" ? styles.grid : styles.list}>
      {displayProducts.map((product) => (
        <ProductCard key={product._id} product={product} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default ProductGrid;
