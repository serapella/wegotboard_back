import PurchaseOptions from "../components/PurchaseOptions";
import ProductSidebar from "../components/ProductSidebar";
import ProductTabs from "../components/ProductTabs";
import PopularProducts from "../components/PopularProducts";
import styles from "../css_modules/productDetailPage.module.css";

const ProductDetail = () => {
  return (
    <div className={styles.productDetailPage}>
      <section className={styles.productContent}>
        <div className={styles.mainContent}>
          <PurchaseOptions />
          <ProductSidebar />
        </div>
        <ProductTabs />
      </section>

      <section className={styles.popularSection}>
        <PopularProducts />
      </section>
    </div>
  );
};

export default ProductDetail;
