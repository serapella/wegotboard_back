import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { removeFromWishlist } from "../store/wishlistSlice";
import ProductSidebar from "../components/ProductSidebar";
import ProductTabs from "../components/ProductTabs";
import PopularProducts from "../components/PopularProducts";
import styles from "../css_modules/wishlistPage.module.css";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";

const WishlistPage: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className={styles.wishlistPage}>
      <section className={styles.productContent}>
        <div className={styles.mainContent}>
          <ProductSidebar products={wishlist.slice(0, 3)} />
          <div className={styles.wishlistGrid}>
            {wishlist.length > 0 ? (
              wishlist.map((product: Product) => (
                <div key={product._id} className={styles.productCardWrapper}>
                  <ProductCard product={product} />
                  <button className={styles.removeButton} onClick={() => handleRemove(product._id)}>
                    Remove from Wishlist
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.emptyMessage}>Your wishlist is empty.</p>
            )}
          </div>
        </div>
        <ProductTabs product={wishlist[0]} />
      </section>
      <section className={styles.popularSection}>
        <PopularProducts variant="detail" />
      </section>
    </div>
  );
};

export default WishlistPage;
