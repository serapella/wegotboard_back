import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className={styles.product_grid}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
export default ProductGrid;
