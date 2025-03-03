import styles from "../css_modules/shopNowSection.module.css";

const ShopNowSection = () => {
  return (
    <section className={styles.shopNowSection}>
      <div className={styles.shopNowCards}>
        <div>
          <img src="../mh_bg.png" alt="monster hunter boargame" />
          <p>Hunt Monsters together with your party at home!</p>
          <button>Shop Now</button>
        </div>
        <div>
          <img src="../deadcells_bg.png" alt="deadcells boargame" />
          <p>Fight your way through endless dungeons!</p>
          <button>Shop Now</button>
        </div>
        <div>
          <img src="../terraria_bg.png" alt="terraria boargame" />
          <p>Terraria releases as a standalone boardgame!</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};
export default ShopNowSection;
