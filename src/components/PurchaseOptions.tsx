import styles from "../css_modules/purchaseOptions.module.css";
import Counter from "./Counter";

const PurchaseOptions = () => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.gameCategory}></div>
      <h1>Luxury Wooden Chess Set</h1>
      <p>
        Luxury Wooden Chess Set Luxury Wooden Chess Set Luxury Wooden Chess Set
        Luxury Wooden Chess Set Luxury Wooden Chess Set
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
          {/* <button className={styles.qtyBtnPlus}>+</button>
              <button className={styles.qtyBtnMinus}>-</button> */}

          <button className={styles.addToCart}>Add To Cart</button>
          <div className={styles.actionButtons}>
            <button className={styles.wishlist}>
              <img src="./wishlist.svg" alt="Wishlist" />
            </button>
            <button className={styles.zoom}>
              <img src="./vieuw.svg" alt="Quick View" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PurchaseOptions;
