import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { ProductCardProps } from "../types";

const ProductCardInfo: React.FC<ProductCardProps> = ({
  variant = "landing",
  product,
}) => {
  if (!product) {
    return null;
  }

  return (
    <div className={styles.popular_item_text}>
      <p className={styles.vendor}>
        By <span>{product.category?.name || "Unknown"}</span>
      </p>
      <div className={styles.rating_container}>
        <div className={styles.ratingIcon}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </div>
        <div className={styles.rating_value}>(4.0)</div>
      </div>
      <h5>{product.name}</h5>
      <div className={styles.popular_item_bottom}>
        <div className={styles.price_container}>
          <span className={styles.current_price}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        {variant === "landing" && (
          <button className={styles.add_button}>
            <BsCart3 />
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCardInfo;
