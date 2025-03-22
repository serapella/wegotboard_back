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
            Discover the most popular games that bring people together! Whether
            you enjoy strategy, luck, or fast-paced action, there's a perfect
            game for every occasion.
          </p>
        )}
      </div>
      <ProductGrid maxItems={variant === "detail" ? 4 : 8} variant="detail" />
    </div>
  );
};

export default PopularProducts;
