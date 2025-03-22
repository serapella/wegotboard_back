import React from "react";
import styles from "../css_modules/PopularProducts.module.css";
import ProductGrid from "./ProductGrid";
import { PopularProductsProps } from "../types";

const PopularProducts: React.FC<PopularProductsProps> = ({
  variant = "landing",
}) => {
  const containerClass = variant === "landing" ? styles.landing : styles.detail;

  return (
    <div className={containerClass}>
      <div className={styles.nav}>
        <h2>Popular Products</h2>
        {variant === "landing" ? (
          <ul>
            <li className={styles.active}>All</li>
            <li>Boardgames</li>
            <li>Cardgames</li>
            <li>Dice games</li>
            <li>Party games</li>
            <li>Travel games</li>
            <li>Theme games</li>
          </ul>
        ) : (
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et viverra maecenas accumsan
            lacus vel facilisis.
          </p>
        )}
      </div>
      <ProductGrid maxItems={variant === "detail" ? 4 : 8} variant={variant} />
    </div>
  );
};

export default PopularProducts;
