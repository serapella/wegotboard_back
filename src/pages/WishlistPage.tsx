import { useParams } from "react-router";
import ProductGrid from "../components/ProductGrid";
import ProductCard from "../components/ProductCard";
import ProductCardInfo from "../components/ProductCardInfo";
import { useGetProductsQuery } from "../store/productAPI";
import styles from "../css_modules/wishlistPage.module.css";

const WishlistPage = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({
    products: "wishlist",
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-red-500 text-xl font-semibold">Error loading wishlist</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ProductGrid products={products}>
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}>
            <ProductCardInfo product={product} />
          </ProductCard>
        ))}
      </ProductGrid>
    </div>
  );
};
export default WishlistPage;
