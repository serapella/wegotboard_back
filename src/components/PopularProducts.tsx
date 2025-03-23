import styles from "../css_modules/PopularProducts.module.css";
import ProductGrid from "../components/ProductGrid";
import { PopularProductsProps } from "../types";
import { useGetProductsQuery } from "../store/productAPI";

const PopularProducts: React.FC<PopularProductsProps> = ({
  variant = "landing",
}) => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: variant === "detail" ? 4 : 8,
    page: 0,
    sort: "rating",
    order: "desc",
  });

  if (isLoading) {
    return (
      <div className={variant === "landing" ? styles.landing : styles.detail}>
        <div className={styles.nav}>
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
        <div className="grid grid-cols-4 gap-6 px-8 md:grid-cols-2 sm:grid-cols-1">
          {Array.from({ length: variant === "detail" ? 4 : 8 }).map((_, i) => (
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
    <div className={variant === "landing" ? styles.landing : styles.detail}>
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
      <ProductGrid
        products={products}
        maxItems={variant === "detail" ? 4 : 8}
        variant={variant}
      />
    </div>
  );
};

export default PopularProducts;
