import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStarFill, BsStar } from "react-icons/bs";
import { ProductCardProps } from "../types";
import { useGetUserReviewByIdQuery } from "../store/reviewAPI";

const ProductCardInfo: React.FC<ProductCardProps> = ({
  variant = "landing",
  product,
}) => {
  const { data: reviews } = useGetUserReviewByIdQuery(product?._id || "", {
    skip: !product?._id,
  });

  if (!product) {
    return null;
  }

  // Calculate average rating
  const averageRating = reviews?.length
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>
        {index < averageRating ? (
          <BsStarFill className={styles.starFilled} />
        ) : (
          <BsStar className={styles.starEmpty} />
        )}
      </span>
    ));
  };

  return (
    <div className={styles.popular_item_text}>
      <p className={styles.vendor}>
        By <span>{product.category?.name || "Unknown"}</span>
      </p>
      <div className={styles.rating_container}>
        <div className={styles.ratingIcon}>{renderStars()}</div>
        <div className={styles.rating_value}>
          ({reviews?.length || 0} {reviews?.length === 1 ? "Review" : "Reviews"}
          )
        </div>
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
