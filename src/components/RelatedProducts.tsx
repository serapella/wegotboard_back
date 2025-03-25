import React from "react";
import styles from "../css_modules/RelatedProducts.module.css";
import ProductGrid from "../components/ProductGrid";
import { useGetProductsQuery } from "./../store/productAPI";

interface RelatedProductsProps {
  categoryId: string;
  currentProductId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  categoryId,
  currentProductId,
}) => {
  const { data: products, isLoading } = useGetProductsQuery({
    categories: categoryId,
    limit: 4,
    page: 0,
  });

  const relatedProducts = products?.filter((p) => p._id !== currentProductId);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Related Products</h2>
          <p className={styles.description}>
            Discover more games that bring people together! Whether you enjoy
            strategy, luck, or fast-paced action, there's a perfect game for
            every occasion.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 px-8 md:grid-cols-2 sm:grid-cols-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!relatedProducts?.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Related Products</h2>
        <p className={styles.description}>
          Discover more games that bring people together! Whether you enjoy
          strategy, luck, or fast-paced action, there's a perfect game for every
          occasion.
        </p>
      </div>
      <ProductGrid viewMode="list" products={relatedProducts} maxItems={4} />
    </div>
  );
};

export default RelatedProducts;
