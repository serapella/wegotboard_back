import styles from "../css_modules/PopularProducts.module.css";
import ProductGrid from "./ProductGrid";
import { useGetProductsQuery } from "../store/productAPI";

const PopularProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 8,
    page: 0,
    sort: "rating",
    order: "desc",
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <h2>Popular Products</h2>
          <ul>
            <li className={styles.active}>All</li>
            <li>Boardgames</li>
            <li>Cardgames</li>
            <li>Dice games</li>
            <li>Party games</li>
            <li>Travel games</li>
            <li>Theme games</li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-6 px-8 md:grid-cols-2 sm:grid-cols-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

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
          <li>Party games</li>
          <li>Travel games</li>
          <li>Theme games</li>
        </ul>
      </div>
      <ProductGrid products={products} maxItems={8} />
    </div>
  );
};

export default PopularProducts;
