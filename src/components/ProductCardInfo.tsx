import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { Product } from "../types";

interface ProductCardInfoProps {
  product: Product;
}

const ProductCardInfo = ({ product }: ProductCardInfoProps) => {
  const avgRating =
    product.userRating.reduce((a, b) => a + b, 0) / product.userRating.length;
  const fullStars = Math.floor(avgRating);
  const halfStar = avgRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const discountedPrice = (
    product.price *
    (1 - product.discount / 100)
  ).toFixed(2);

  return (
    <div className={styles.popular_item_text}>
      <h5>{product.name}</h5>
      <i className={styles.ratingIcon}>
        {Array.from({ length: fullStars }, (_, index) => (
          <BsStarFill key={index} />
        ))}
        {halfStar && <BsStarHalf />}
        {Array.from({ length: emptyStars }, (_, index) => (
          <BsStar key={index} />
        ))}
      </i>
      <p>({avgRating.toFixed(2)})</p>
      <p>
        By <span>De Spelfanaat</span>
      </p>
      <div className={styles.popular_item_bottom}>
        <h4>{discountedPrice}</h4>
        {product.discount > 0 && <p>${product.price}</p>}

        <button
          type="button"
          className={styles.addToCart}
          // TODO: onClick= add product to cart!
        >
          <span>
            <BsCart3 />
          </span>
          Add
        </button>
      </div>
    </div>
  );
};
export default ProductCardInfo;
