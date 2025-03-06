import styles from "../css_module/shopNowSlider.module.css";

const ShopNowSlider = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.slide1}>
        <div className={styles.slide1_content}>
          <h3>
            <span>100%</span> Fantastic Memories
          </h3>
          <h1>The best way to spend your time.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          </p>
          <button>Shop now</button>
        </div>
      </div>
      <div className={styles.slide2}>
        <div className={styles.slide2_content}>
          <h3>
            <span>100%</span> Fantastic Memories
          </h3>
          <h1>The best way to spend your time.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          </p>
          <div>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopNowSlider;
