import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";
import { ProductGridProps } from "../types";

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  maxItems = 8,
  variant = "landing",
}) => {
  const displayProducts = products.slice(0, maxItems);

  return (
    <div className={styles.product_grid}>
      {displayProducts.map((product) => (
        <ProductCard key={product._id} product={product} variant={variant} />
      ))}
    </div>
  );
};

export default ProductGrid;
