import styles from "../css_modules/popularProducts.module.css";
import ProductGrid from "./ProductGrid";

const PopularProducts = () => {
  return (
    <div className={styles.popular_products}>
      <div className={styles.popular_nav}>
        <h2>Popular products</h2>
        <ul>
          <li>All</li>
          <li>Milk & Dairies</li>
          <li>Cofees & Teas</li>
          <li>Pet Foods</li>
          <li>Meats</li>
          <li>Vegetables</li>
          <li>Fruits</li>
        </ul>
      </div>
      <ProductGrid />
    </div>
  );
};
export default PopularProducts;
