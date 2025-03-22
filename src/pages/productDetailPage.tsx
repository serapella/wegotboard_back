import PurchaseOptions from "../components/PurchaseOptions";
import ProductSidebar from "../components/ProductSidebar";
import ProductTabs from "../components/ProductTabs";
import PopularProducts from "../components/PopularProducts";
import styles from "../css_modules/productDetailPage.module.css";

const ProductDetailPage = () => {
  return (
    <div className={styles.productDetailPage}>
      <section className={styles.productContent}>
        <div className={styles.mainContent}>
          <ProductSidebar />
          <PurchaseOptions />
        </div>
        <ProductTabs />
      </section>

      <section className={styles.popularSection}>
        <PopularProducts variant="detail" />
      </section>
    </div>
  );
};

export default ProductDetailPage;
