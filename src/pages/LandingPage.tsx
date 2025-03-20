import DealsOfTheDay from "../components/DealsOfTheDay";
import GreatWords from "../components/GreatWords";
import NewsSection from "../components/NewsSection";
import PopularProducts from "../components/PopularProducts";
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
      <div>
        <PopularProducts />
      </div>
      <div>
        <DealsOfTheDay />
      </div>
      <div>
        <GreatWords />
      </div>
      <div>
        <NewsSection />
      </div>
    </div>
  );
};
export default LandingPage;
