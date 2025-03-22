import styles from "../css_modules/popularProducts.module.css";
import ProductGrid from "./ProductGrid";

const PopularProducts = ({ variant = "landing" }) => {
  const containerClass =
    variant === "landing" ? styles.popular_products : styles.product_detail;

  return (
    <div className={containerClass}>
      <div className={styles.popular_nav}>
        <h2>Popular Products</h2>
        {variant === "landing" && (
          <ul>
            <li className={styles.active}>All</li>
            <li>Boardgames</li>
            <li>Cardgames</li>
            <li>Dice games</li>
            <li>Party games</li>
            <li>Travel games</li>
            <li>Theme games</li>
          </ul>
        )}
      </div>
      <ProductGrid maxItems={variant === "detail" ? 4 : 8} />
    </div>
  );
};

export default PopularProducts;
