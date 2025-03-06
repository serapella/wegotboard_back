import styles from "../css_module/shopNowSlider.module.css";
import { Fade } from "react-slideshow-image";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";

const slideImages = ["../slide2.jpg", "../slide1.jpg"];

const ShopNowSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.slideContainer}>
      <Fade
        defaultIndex={activeSlide}
        onChange={(index) => setActiveSlide(index)}
      >
        <div className={styles.eachFade}>
          <img src={slideImages[0]} alt="Slide 1" />
        </div>
        <div className={styles.eachFade}>
          <img src={slideImages[1]} alt="Slide 2" />
        </div>
      </Fade>
      <div className={styles.navigationButtons}>
        <button
          className={`${styles.radioButtons} ${
            activeSlide === 0 ? styles.active : ""
          }`}
          onClick={nextSlide}
        ></button>
        <button
          className={`${styles.radioButtons} ${
            activeSlide === 1 ? styles.active : ""
          }`}
          onClick={nextSlide}
        ></button>
      </div>
    </section>
  );
};
export default ShopNowSlider;

// <section className={styles.slider}>
//   <div className={styles.slide1}>
//     <div className={styles.slide1_content}>
//       <h3>
//         <span>100%</span> Fantastic Memories
//       </h3>
//       <h1>The best way to spend your time.</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//       </p>
//       <button>Shop now</button>
//     </div>
//   </div>
//   <div className={styles.slide2}>
//     <div className={styles.slide2_content}>
//       <h3>
//         <span>100%</span> Fantastic Memories
//       </h3>
//       <h1>The best way to spend your time.</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//       </p>
//       <div>
//         <input type="email" placeholder="Your email address" />
//         <button>Subscribe</button>
//       </div>
//     </div>
//   </div>
// </section>
