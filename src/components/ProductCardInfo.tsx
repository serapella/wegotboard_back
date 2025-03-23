import styles from "../css_modules/ProductCardInfo.module.css";
import { BsCart3, BsStarFill, BsStar } from "react-icons/bs";
import { Product } from "../types";
import { useGetProductReviewsQuery } from "../store/reviewAPI";

interface ProductCardInfoProps {
  product: Product;
}

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({ product }) => {
  const { data: reviews } = useGetProductReviewsQuery(product._id);

  const averageRating = reviews?.length
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>
        {index < Math.round(averageRating) ? (
          <BsStarFill className={styles.starFilled} />
        ) : (
          <BsStar className={styles.starEmpty} />
        )}
      </span>
    ));
  };

  return (
    <div className={styles.content}>
      <p className={styles.vendor}>
        By <span>{product.category?.name}</span>
      </p>
      <div className={styles.ratingContainer}>
        <div className={styles.stars}>{renderStars()}</div>
        <div className={styles.ratingValue}>
          ({reviews?.length || 0} {reviews?.length === 1 ? "Review" : "Reviews"}
          )
        </div>
      </div>
      <h5>{product.name}</h5>
      <div className={styles.priceContainer}>
        <div className={styles.price}>
          <span className={styles.currentPrice}>
            ${product.price.toFixed(2)}
          </span>
        </div>
        <button className={styles.addToCart}>
          <BsCart3 />
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCardInfo;
