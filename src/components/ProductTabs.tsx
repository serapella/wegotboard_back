import { useState, useEffect } from "react";
import styles from "../css_modules/ProductTabs.module.css";

type TabContentProps = {
  isActive: boolean;
  children: React.ReactNode;
};

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => (
  <div className={`${styles.description} ${isActive ? styles.active : ""}`}>
    {children}
  </div>
);

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://api....");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Something went wrong:", error);
        setProductData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          Review
        </button>
      </div>

      <div className={styles["tab-content"]}>
        <TabContent isActive={activeTab === "description"}>
          <h3>Product Overview</h3>
          <p>{productData?.description}</p>
          <h3>Features</h3>
          <p>{productData?.features}</p>
          <h3>Components</h3>
          <ul className={styles["component-list"]}>
            {productData?.components?.map(
              (component: string, index: number) => (
                <li key={index}>{component}</li>
              )
            )}
          </ul>
          <h3>Packaging & Delivery</h3>
          <p>{productData?.packagingDelivery}</p>
        </TabContent>

        <TabContent isActive={activeTab === "information"}>
          <h3>Product Specifications</h3>
          <ul className={styles["component-list"]}>
            {productData?.specifications?.map((spec: string, index: number) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <h3>Care Instructions</h3>
          <p>{productData?.careInstructions}</p>
        </TabContent>

        <TabContent isActive={activeTab === "review"}>
          <h3>Customer Reviews</h3>
          <p>{productData?.reviews}</p>
        </TabContent>
      </div>
    </div>
  );
};

export default ProductTabs;
