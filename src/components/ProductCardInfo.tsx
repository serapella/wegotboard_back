import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { ProductCardProps } from "../types";
import { useGetProductReviewsQuery } from "../store/reviewAPI";

const ProductCardInfo: React.FC<ProductCardProps> = ({
  variant = "landing",
  product,
}) => {
  const { data: reviews } = useGetProductReviewsQuery(product?._id || "", {
    skip: !product?._id,
  });

  if (!product) {
    return null;
  }
  const avgRating =
    product.userRating.reduce((a, b) => a + b, 0) / product.userRating.length;
  const fullStars = Math.floor(avgRating);
  const halfStar = avgRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const discountedPrice = (
    product.price *
    (1 - product.discount / 100)
  ).toFixed(2);

  const renderStars = () => {
    return Array.from({ length: fullStars }, (_, index) => (
      <span key={index}>
        <BsStarFill className={styles.starFilled} />
      </span>
    ));
    {
      halfStar && (
        <span>
          <BsStarHalf />
        </span>
      );
    }
    {
      Array.from({ length: emptyStars }, (_, index) => (
        <span key={index}>
          <BsStar className={styles.starEmpty} />
        </span>
      ));
    }
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
          <span className={styles.current_price}>${discountedPrice}</span>
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
