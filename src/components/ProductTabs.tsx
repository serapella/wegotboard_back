import { useState } from "react";
import styles from "../css_modules/ProductTabs.module.css";
import { Product } from "../types";

interface ProductTabsProps {
  product: Product;
}

type TabContentProps = {
  isActive: boolean;
  children: React.ReactNode;
};

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => (
  <div className={`${styles.description} ${isActive ? styles.active : ""}`}>
    {children}
  </div>
);

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

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
          <p>{product.description}</p>
          <h3>Features</h3>
          <p>
            Experience the thrill of strategic gameplay and immersive
            storytelling.
          </p>
          <h3>Components</h3>
          <ul className={styles["component-list"]}>
            <li>Game board</li>
            <li>Player pieces</li>
            <li>Cards</li>
            <li>Rulebook</li>
          </ul>
          <h3>Packaging & Delivery</h3>
          <p>Securely packaged to ensure safe delivery to your doorstep.</p>
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
            <li>Category: {product.category}</li>
          </ul>
          <h3>Care Instructions</h3>
          <p>Store in a cool, dry place. Keep away from direct sunlight.</p>
        </TabContent>

        <TabContent isActive={activeTab === "review"}>
          <h3>Customer Reviews</h3>
          <p>Reviews coming soon!</p>
        </TabContent>
      </div>
    </div>
  );
};

export default ProductTabs;
