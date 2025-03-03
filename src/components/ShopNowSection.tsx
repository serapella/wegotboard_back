import styles from "../css_modules/shopNowSection.module.css";

const ShopNowSection = () => {
  return (
    <section className={styles.shopNowSection}>
      <div className={styles.shopNowCards}>
        <div>
          <img src="../mh_bg.png" alt="monster hunter boargame" />
          <h3>Hunt Monsters together with your party at home!</h3>
          <button>Shop Now</button>
        </div>
        <div>
          <img src="../deadcells_bg.png" alt="deadcells boargame" />
          <h3>Fight your way through endless dungeons!</h3>
          <button>Shop Now</button>
        </div>
        <div>
          <img src="../terraria_bg.png" alt="terraria boargame" />
          <h3>Terraria releases as a standalone boardgame!</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};
export default ShopNowSection;
