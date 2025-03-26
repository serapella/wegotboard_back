import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { useGetProductReviewsQuery } from "../store/reviewAPI";
import { Product } from "../types";

interface ProductCardInfoProps {
  product: Product;
}
const ProductCardInfo: React.FC<ProductCardInfoProps> = ({ product }) => {
  const { data: reviews } = useGetProductReviewsQuery(product._id);

  if (!product) {
    return null;
  }
  console.log(reviews);
  const avgRating = reviews?.length
    ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
    : 0;
  const fullStars = Math.floor(avgRating);
  const halfStar = avgRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const discountedPrice = (
    product.price *
    (1 - product.discount / 100)
  ).toFixed(2);

  const renderStars = () => (
    <>
      {Array.from({ length: fullStars }).map((_, index) => (
        <BsStarFill key={`full-${index}`} className={styles.starFilled} />
      ))}
      {halfStar && <BsStarHalf key={"half"} className={styles.starHalf} />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <BsStar key={`empty-${index}`} className={styles.starEmpty} />
      ))}
    </>
  );

  return (
    <div className={styles.content}>
      <p className={styles.category}>{product.category?.name}</p>
      <div className={styles.ratingContainer}>
        <div className={styles.stars}>{renderStars()}</div>
        <div className={styles.ratingValue}>
          ({reviews?.length || 0} {reviews?.length === 1 ? "Review" : "Reviews"}
          )
        </div>
      </div>
      <h5>{product.name}</h5>
      <div className={styles.cardinfo_bottom}>
        <div className={styles.price_container}>
          <span className={styles.current_price}>${discountedPrice}</span>
          <span className={styles.old_price}>${product.price}</span>
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
