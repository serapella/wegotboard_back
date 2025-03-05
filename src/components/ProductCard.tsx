import styles from "../css_modules/productCard.module.css";
import { BsCart3, BsStarFill } from "react-icons/bs";

const ProductCard = () => {
  return (
    <div className={styles.popular_item}>
      <img src="" alt="" />
      <div className={styles.popular_item_text}>
        <p>Snack</p>
        <h5>Fresh organic villa farm lemon 500gm pack</h5>
        <BsStarFill />
        <p>(4.0)</p>
        <p>
          By <span>NestFood</span>
        </p>
        <div className={styles.popular_item_bottom}>
          <h4>$28.85</h4>
          <p>$32.8</p>
          <button>
            <BsCart3 />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
