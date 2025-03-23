import { useNavigate } from "react-router";
import styles from "../css_modules/ProductCard.module.css";
import ProductCardInfo from "./ProductCardInfo";
import { ProductCardProps } from "../types";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=300&q=80";

const ProductCard: React.FC<ProductCardProps> = ({
  variant = "landing",
  product,
}) => {
  const navigate = useNavigate();

  if (!product) {
    return null;
  }

  const handleClick = () => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    navigate(`/products/${product._id}/${slug}`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <div
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <img
          src={product.images[0] || FALLBACK_IMAGE}
          alt={product.name}
          onError={handleImageError}
        />
        <div className={styles.category}>
          {product.category?.name || "Board Game"}
        </div>
      </div>
      <ProductCardInfo variant={variant} product={product} />
    </div>
  );
};

export default ProductCard;
