import styles from "../css_module/shopNowSlider.module.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = ["../slide2.jpg", "../slide1.jpg"];

const ShopNowSlider = () => {
  return (
    <section className={styles.slideContainer}>
      <div>
        <Fade infinite={true} canSwipe={true} pauseOnHover={true}>
          <div className={styles.eachFade}>
            <img src={slideImages[0]} />
            <span className={styles.sliderContent}>
              <div className={styles.textContent1}>
                <h3>
                  Keep up to date <br />
                  with our latest <br />
                  releases!
                </h3>
              </div>
              <div className={styles.subscribe}>
                <input
                  type="email"
                  placeholder="Please enter your email address..."
                />
                <button>Subscribe</button>
              </div>
            </span>
          </div>
          <div className={styles.eachFade}>
            <img src={slideImages[1]} />
            <span className={styles.sliderContent}>
              <div className={styles.textContent2}>
                <div>
                  <h3>
                    <span>100%</span> Fantastic Memories
                  </h3>
                </div>
                <h1>
                  The best way to spend your time
                  <br />
                  with friends at home.
                </h1>
              </div>
              <div className={styles.shopNow}>
                <button>Shop now</button>
              </div>
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default ShopNowSlider;
