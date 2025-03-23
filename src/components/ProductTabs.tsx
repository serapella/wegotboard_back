import { useState } from "react";
import {
  useGetProductReviewsQuery,
  useDeleteReviewMutation,
} from "../store/reviewAPI";
import styles from "../css_modules/ProductTabs.module.css";
import { Product, Review } from "../types";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface ProductTabsProps {
  product: Product;
}

type TabContentProps = {
  isActive: boolean;
  children: React.ReactNode;
};

const REVIEWS_PER_PAGE = 4;

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => (
  <div className={`${styles.description} ${isActive ? styles.active : ""}`}>
    {children}
  </div>
);

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: reviews, isLoading } = useGetProductReviewsQuery(product._id);
  const [deleteReview] = useDeleteReviewMutation();

  const averageRating = reviews?.length
    ? reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) /
      reviews.length
    : 0;

  const totalPages = Math.ceil((reviews?.length || 0) / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const endIndex = startIndex + REVIEWS_PER_PAGE;
  const currentReviews = reviews?.slice(startIndex, endIndex) || [];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <BsStarFill key={`full-${i}`} className={styles.star} size={20} />
      );
    }

    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" className={styles.star} size={20} />);
    }

    const remainingStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <BsStar
          key={`empty-${i}`}
          className={`${styles.star} ${styles.emptyStar}`}
          size={20}
        />
      );
    }

    return stars;
  };

  const handleDeleteReview = async (reviewId: string) => {
    try {
      await deleteReview({ productId: product._id, reviewId }).unwrap();
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  return (
    <div className={styles["product-tabs"]}>
      <div className={styles["tab-buttons"]}>
        <button
          className={activeTab === "description" ? styles.active : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "information" ? styles.active : ""}
          onClick={() => setActiveTab("information")}
        >
          Information
        </button>
        <button
          className={activeTab === "review" ? styles.active : ""}
          onClick={() => setActiveTab("review")}
        >
          Reviews ({reviews?.length || 0})
        </button>
      </div>

      <div className={styles["tab-content"]}>
        <TabContent isActive={activeTab === "description"}>
          <h3>Product Overview</h3>
          <p>{product.description}</p>
          <h3>Features</h3>
          <ul className={styles["component-list"]}>
            {product.overview?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            )) || <li>Features information not available</li>}
          </ul>
          <h3>Components</h3>
          <ul className={styles["component-list"]}>
            {product.overview?.components?.map((component, index) => (
              <li key={index}>{component}</li>
            )) || <li>Components information not available</li>}
          </ul>
          <h3>Packaging & Delivery</h3>
          <p>
            {product.overview?.packaging ||
              "Packaging information not available"}
          </p>
        </TabContent>

        <TabContent isActive={activeTab === "information"}>
          <h3>Product Specifications</h3>
          <ul className={styles["component-list"]}>
            <li>Language: {product.language}</li>
            <li>
              Players: {product.playerCount.min}-{product.playerCount.max}
            </li>
            <li>Difficulty: {product.difficulty}</li>
            <li>Duration: {product.duration}</li>
            <li>Category: {product.category.name}</li>
          </ul>
          <h3>Care Instructions</h3>
          <p>Store in a cool, dry place. Keep away from direct sunlight.</p>
        </TabContent>

        <TabContent isActive={activeTab === "review"}>
          <h3>Customer Reviews</h3>
          <div className={styles["review-summary"]}>
            <div className={styles["average-rating"]}>
              <span className={styles["rating-number"]}>
                {averageRating.toFixed(1)}
              </span>
              <div className={styles["rating-stars"]}>
                {renderStars(averageRating)}
              </div>
              <span className={styles["total-reviews"]}>
                Based on {reviews?.length || 0} reviews
              </span>
            </div>
          </div>

          {isLoading ? (
            <div className={styles.loading}>Loading reviews...</div>
          ) : (
            <div className={styles["reviews-container"]}>
              {currentReviews.map((review: Review) => (
                <div key={review._id} className={styles["review-card"]}>
                  <div className={styles["review-header"]}>
                    <div className={styles["reviewer-info"]}>
                      <h4>
                        {review.user.name.first} {review.user.name.last}
                      </h4>
                      <div className={styles["rating-stars"]}>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className={styles["review-quote"]}>{review.review}</p>
                </div>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                Previous
              </button>
              <span className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                Next
              </button>
            </div>
          )}
        </TabContent>
      </div>
    </div>
  );
};

export default ProductTabs;
