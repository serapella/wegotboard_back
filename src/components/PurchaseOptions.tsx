import React, { useState } from "react";
import styles from "../css_modules/PurchaseOptions.module.css";
import { BsHeart, BsHeartFill, BsShare } from "react-icons/bs";
import Counter from "./Counter";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../types";

interface PurchaseOptionsProps {
  product: Product;
}

const PurchaseOptions: React.FC<PurchaseOptionsProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image[0]);
  const [isLiked, setIsLiked] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (err) {
      toast.error("Failed to copy link. Please try again.");
    }
  };

  return (
    <div className={styles.productOverview}>
      <div className={styles.productContent}>
        <div className={styles.productGallery}>
          <div className={styles.mainImage}>
            <Modal imgSrc={mainImage} imgAlt={product.name} />
          </div>
          <div className={styles.thumbnailImages}>
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} - View ${index + 1}`}
                className={mainImage === img ? styles.active : ""}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.gameCategory}>
          {product.categories[0]?.name || "Board Game"}
        </div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className={styles.rating}>
          <div className={styles.stars}>★★★★★</div>
          <span>(182 Reviews)</span>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Players</span>
            <span className={styles.value}>
              {product.playerCount.min}-{product.playerCount.max} Players
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
            <Counter />
            <button className={styles.addToCart}>Add To Cart</button>
            <div className={styles.actionButtons}>
              <button
                className={`${isLiked ? styles.liked : ""}`}
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
