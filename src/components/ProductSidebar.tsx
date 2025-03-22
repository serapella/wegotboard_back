import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";
import styles from "../css_modules/ProductSidebar.module.css";
import { Product } from "../types";

interface ProductSidebarProps {
  products: Product[];
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({ products }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <AiFillStar
        key={index}
        size={12}
        color={index < rating ? "orange" : "#e4e4e4"}
      />
    ));
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <aside className={styles["product-sidebar"]}>
      <div className={styles["related-games"]}>
        <h3>Related Products</h3>
        <div className={styles["game-list"]}>
          {products.map((product) => (
            <Link
              to={`/products/${product._id}`}
              key={product._id}
              className={styles["game-item"]}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className={styles["game-image"]}
              />
              <div className={styles["game-info"]}>
                <h4>{product.name}</h4>
                <div className={styles.stars}>{renderStars(4)}</div>
                <div className={styles["player-count"]}>
                  {product.playerCount.min}-{product.playerCount.max} Players
                </div>
                <span className={styles.price}>
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
