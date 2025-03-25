import { useParams, Link } from "react-router";
import { useState } from "react";
import PurchaseOptions from "../components/PurchaseOptions";
import ProductSidebar from "../components/ProductSidebar";
import ProductTabs from "../components/ProductTabs";
import { useGetProductByIdQuery } from "../store/productAPI";
import styles from "../css_modules/ProductDetailPage.module.css";
import { BsList, BsX } from "react-icons/bs";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string; slug: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: product, isLoading } = useGetProductByIdQuery(id || "");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500 text-xl font-semibold">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <>
      <section className={styles.headerNav}>
        <nav>
          <Link to="/cart">Cart</Link>
          <div>
            <Link to="/">Home</Link>/<Link to="/products">Shop</Link>
          </div>
        </nav>
      </section>

      <div className={styles.productDetailPage}>
        <button
          className={styles.sidebarToggle}
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <BsX size={24} /> : <BsList size={24} />}
        </button>

        <div className={styles.mainContent}>
          <aside
            className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
          >
            <div className={styles.sidebarHeader}>
              <h2>Related Products</h2>
              <button
                onClick={toggleSidebar}
                className={styles.closeButton}
                aria-label="Close sidebar"
              >
                <BsX size={24} />
              </button>
            </div>
            <ProductSidebar
              currentProductId={product._id}
              categoryId={product.category._id}
            />
          </aside>
          <div className={styles.content}>
            <PurchaseOptions product={product} />
            <ProductTabs product={product} />
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className={styles.overlay}
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
