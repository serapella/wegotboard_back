import ShopNowSection from "../components/ShopNowSection";
import ShopNowSlider from "../components/ShopNowSlider";
import styles from "../css_modules/landingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div>
        <ShopNowSlider />
      </div>
      <div>
        <ShopNowSection />
      </div>
      <div></div>
    </div>
  );
};
export default LandingPage;
