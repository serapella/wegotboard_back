import React from "react";
import styles from "../css_modules/productCard.module.css";
import ProductCardInfo from "./ProductCardInfo";
import { ProductCardProps } from "../types";

const ProductCard: React.FC<ProductCardProps> = ({ variant = "landing" }) => {
  return (
    <div className={styles.popular_item}>
      <div className={styles.image_placeholder} />
      <ProductCardInfo variant={variant} />
    </div>
  );
};

export default ProductCard;
