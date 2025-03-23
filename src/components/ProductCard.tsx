import styles from "../css_modules/productCard.module.css";
import ProductCardInfo from "./ProductCardInfo";
import { ProductCardProps } from "../types";

const ProductCard: React.FC<ProductCardProps> = ({
  variant = "landing",
  product,
}) => {
  if (!product) {
    return null;
  }

  return (
    <div className={styles.popular_item}>
      <img
        src={product.images[0]}
        alt={product.name}
        className={styles.product_image}
      />
      <ProductCardInfo variant={variant} product={product} />
    </div>
  );
};

export default ProductCard;
