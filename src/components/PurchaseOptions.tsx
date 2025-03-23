import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../css_modules/PurchaseOptions.module.css";
import {
  BsHeart,
  BsHeartFill,
  BsShare,
  BsStarFill,
  BsStar,
} from "react-icons/bs";
// import Counter from "./Counter";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../types";
import { useGetProductReviewsQuery } from "../store/reviewAPI";
import { addToCart } from "../store/cartSlice";

interface PurchaseOptionsProps {
  product: Product;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=300&q=80";

const PurchaseOptions: React.FC<PurchaseOptionsProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(
    product.images[0] || FALLBACK_IMAGE
  );
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { data: reviews } = useGetProductReviewsQuery(product._id);

  const averageRating = reviews?.length
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    : 0;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy link. Please try again.");
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    toast.success("Added to cart!");
  };

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
    <div className={styles.productOverview}>
      <div className={styles.productContent}>
        <div className={styles.productGallery}>
          <div className={styles.mainImage}>
            <Modal imgSrc={mainImage} imgAlt={product.name} />
          </div>
          <div className={styles.thumbnailImages}>
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img || FALLBACK_IMAGE}
                alt={`${product.name} - View ${index + 1}`}
                className={mainImage === img ? styles.active : ""}
                onClick={() => setMainImage(img)}
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.gameCategory}>{product.category?.name}</div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className={styles.rating}>
          <div className={styles.stars}>{renderStars()}</div>
          <span>
            ({reviews?.length || 0}{" "}
            {reviews?.length === 1 ? "Review" : "Reviews"})
          </span>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Players</span>
            <span className={styles.value}>
              {product.playerCount.min}-{product.playerCount.max}
            </span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Difficulty</span>
            <span className={styles.value}>{product.difficulty}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Duration</span>
            <span className={styles.value}>{product.duration}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Language</span>
            <span className={styles.value}>{product.language}</span>
          </div>
        </div>
        <div className={styles.priceSection}>
          <span className={styles.discountPrice}>
            ${product.price.toFixed(2)}
          </span>
          <span className={styles.originalPrice}>
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>
        <div className={styles.purchaseOptions}>
          <div className={styles.addToCartSection}>
            <Counter value={quantity} onChange={setQuantity} />
            <button className={styles.addToCart} onClick={handleAddToCart}>
              Add To Cart
            </button>
            <div className={styles.actionButtons}>
              <button
                className={isLiked ? styles.liked : ""}
                onClick={() => setIsLiked(!isLiked)}
              >
                {isLiked ? <BsHeartFill /> : <BsHeart />}
              </button>
              <button onClick={handleShare}>
                <BsShare />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PurchaseOptions;
