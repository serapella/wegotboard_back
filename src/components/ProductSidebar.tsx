import { useNavigate } from "react-router";
import { useGetProductsQuery } from "../store/productAPI";
import styles from "../css_modules/ProductSidebar.module.css";
import { Product } from "../types";
import { BsStarFill, BsStar } from "react-icons/bs";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=300&q=80";

interface ProductSidebarProps {
  currentProductId: string;
  categoryId: string;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({
  currentProductId,
  categoryId,
}) => {
  const navigate = useNavigate();

  const { data: products, isLoading } = useGetProductsQuery({
    categories: categoryId,
    limit: 4,
  });

  const relatedProducts = products
    ?.filter((p) => p._id !== currentProductId)
    .slice(0, 3);

  if (isLoading) {
    return (
      <aside className={styles["product-sidebar"]}>
        <h3>Related Products</h3>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-24 bg-gray-200 rounded"></div>
          ))}
        </div>
      </aside>
    );
  }

  if (!relatedProducts?.length) {
    return null;
  }

  return (
    <aside className={styles["product-sidebar"]}>
      <h3>Related Products</h3>
      <div className={styles["game-list"]}>
        {relatedProducts.map((product) => (
          <div
            key={product._id}
            className={styles["game-item"]}
            onClick={() => {
              const slug = product.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              navigate(`/products/${product._id}/${slug}`);
            }}
          >
            <img
              src={product.images[0] || FALLBACK_IMAGE}
              alt={product.name}
              className={styles["game-image"]}
              onError={(e) => {
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
            <div className={styles["game-info"]}>
              <h4>{product.name}</h4>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < 4 ? (
                      <BsStarFill className={styles.filled} />
                    ) : (
                      <BsStar />
                    )}
                  </span>
                ))}
              </div>
              <div className={styles["player-count"]}>
                {product.playerCount.min}-{product.playerCount.max} Players
              </div>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProductSidebar;
