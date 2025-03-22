import styles from "../css_modules/PopularProducts.module.css";
import ProductGrid from "./ProductGrid";
import { PopularProductsProps } from "../types";
import { useGetProductsQuery } from "../store/productAPI";

const PopularProducts: React.FC<PopularProductsProps> = ({
  variant = "landing",
}) => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({
    limit: variant === "detail" ? 4 : 8,
    page: 0,
  });

  const containerClass = variant === "landing" ? styles.landing : styles.detail;

  if (isLoading) {
    return (
      <div className={containerClass}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={containerClass}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-red-500 text-xl font-semibold">
            Error loading products
          </div>
        </div>
      </div>
    );
  }

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
      <ProductGrid
        products={products || []}
        maxItems={variant === "detail" ? 4 : 8}
        variant={variant}
      />
    </div>
  );
};

export default PopularProducts;
