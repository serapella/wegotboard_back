import styles from "../css_modules/shopNowSection.module.css";

const ShopNowSection = () => {
  return (
    <section className={styles.shopNowSection}>
      <div className={styles.shopNowCards}>
        <div>
          <img src="../public/mh_bg.png" alt="monster hunter boargame" />
          <p>Hunt Monsters together with your party at home!</p>
          <button>Shop Now</button>
        </div>
        <div>
          <img src="../public/mh_bg.png" alt="monster hunter boargame" />
          <p>Hunt Monsters together with your party at home!</p>
          <button>Shop Now</button>
        </div>
        <div>
          <img src="../public/mh_bg.png" alt="monster hunter boargame" />
          <p>Hunt Monsters together with your party at home!</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};
export default ShopNowSection;
