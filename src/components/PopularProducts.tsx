import styles from "../css_modules/PopularProducts.module.css";
import ProductGrid from "./ProductGrid";
import { useGetProductsQuery } from "../store/productAPI";

const PopularProducts = () => {
  const { data: products } = useGetProductsQuery({
    limit: 8,
    page: 0,
    sort: "rating",
    order: "desc",
  });

  if (!products?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h2>Popular Products</h2>
        <ul>
          <li className={styles.active}>All</li>
          <li>Boardgames</li>
          <li>Cardgames</li>
          <li>Dice games</li>
        </ul>
      </div>
      <ProductGrid products={products} maxItems={8} viewMode="grid" />
    </div>
  );
};

export default PopularProducts;
