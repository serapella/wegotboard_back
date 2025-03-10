import styles from "../css_modules/purchaseOptions.module.css";
import { BsHeart, BsEye } from "react-icons/bs";
import Counter from "./Counter";
import { useState } from "react";
import Modal from "./Modal";

const imageList = [
  "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2958&auto=format&fit=crop",
  "../Gloomhaven.jpg",
  "../HeroQuest.jpg",
  "../mh_bg.png",
  "../talisman.jpg",
  "../terraria_bg.png",
];

const PurchaseOptions = () => {
  const [mainImage, setMainImage] = useState(imageList[0]);
  return (
    <div className={styles.productOverview}>
      <div className={styles.productContent}>
        <div className={styles.productGallery}>
          <div className={styles.mainImage}>
            <Modal imgSrc={mainImage} imgAlt="needs to be changed" />
          </div>
          <div className={styles.thumbnailImages}>
            {imageList.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`${styles.thumbnail} ${
                  mainImage === img ? styles.active : ""
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.gameCategory}></div>
        <h1>Luxury Wooden Chess Set</h1>
        <p>
          Luxury Wooden Chess Set Luxury Wooden Chess Set Luxury Wooden Chess
          Set Luxury Wooden Chess Set Luxury Wooden Chess Set
        </p>
        <div className={styles.rating}>
          <div className={styles.stars}>★★★★★</div>
          <span>(182 Reviews)</span>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Brand</span>
            <span className={styles.value}>Royal Chess Collection</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Publisher</span>
            <span className={styles.value}>classNameic Games Co.</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Players</span>
            <span className={styles.value}>2 Players</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Age</span>
            <span className={styles.value}>8+</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Material</span>
            <span className={styles.value}>Rosewood & Maple</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Board Size</span>
            <span className={styles.value}>20" x 20"</span>
          </div>
        </div>
        <div className={styles.priceSection}>
          <span className={styles.discountPrice}>$199.99</span>
          <span className={styles.originalPrice}>$249.99</span>
        </div>
        <div className={styles.purchaseOptions}>
          <div className={styles.addToCartSection}>
            <Counter />
            <button className={styles.addToCart}>Add To Cart</button>
            <div className={styles.actionButtons}>
              <button className={styles.wishlist}>
                <BsHeart />
              </button>
              <button className={styles.zoom}>
                <BsEye />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PurchaseOptions;
