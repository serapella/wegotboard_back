import { useParams } from "react-router";
import PurchaseOptions from "../components/PurchaseOptions";
import ProductSidebar from "../components/ProductSidebar";
import ProductTabs from "../components/ProductTabs";
import PopularProducts from "../components/PopularProducts";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../store/productAPI";
import styles from "../css_modules/productDetailPage.module.css";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useGetProductByIdQuery(id || "");

  const { data: relatedProducts, isLoading: relatedLoading } =
    useGetProductsQuery({
      limit: 4,
      page: 0,
    });

  if (productLoading || relatedLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (productError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl font-semibold">
          Error loading product
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500 text-xl font-semibold">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productDetailPage}>
      <section className={styles.productContent}>
        <div className={styles.mainContent}>
          <ProductSidebar products={relatedProducts?.slice(0, 3) || []} />
          <PurchaseOptions product={product} />
        </div>
        <ProductTabs product={product} />
      </section>

      <section className={styles.popularSection}>
        <PopularProducts variant="detail" />
      </section>
    </div>
  );
};

export default ProductDetailPage;
