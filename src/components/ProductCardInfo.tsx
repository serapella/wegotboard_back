import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { ProductCardProps } from "../types";

const ProductCardInfo: React.FC<ProductCardProps> = ({
  variant = "landing",
}) => {
  return (
    <div className={styles.popular_item_text}>
      <p className={styles.vendor}>
        By <span>De Spelfanaat</span>
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
      <h5>Deep Rock Galactic Board Game</h5>
      <div className={styles.popular_item_bottom}>
        <div className={styles.price_container}>
          <span className={styles.current_price}>$32.85</span>
          <span className={styles.original_price}>$33.80</span>
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
