import { useParams } from "react-router";
import PurchaseOptions from "../components/PurchaseOptions";
import ProductSidebar from "../components/ProductSidebar";
import ProductTabs from "../components/ProductTabs";
import { useGetProductByIdQuery } from "../store/productAPI";
import styles from "../css_modules/ProductDetailPage.module.css";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string; slug: string }>();

  const { data: product, isLoading } = useGetProductByIdQuery(id || "");

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
    <div className={styles.productDetailPage}>
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
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
    </div>
  );
};

export default ProductDetailPage;
