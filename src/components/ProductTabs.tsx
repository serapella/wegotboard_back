import { useState, useEffect } from "react";
import styles from "../css_modules/ProductTabs.module.css";

type TabContentProps = {
  isActive: boolean;
  children: React.ReactNode; //alle types
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

  //bij toevoegen van api, ondertsaande code replacen met code dat in comment staat:
  if (loading) {
    return <div>Loading...</div>;
  }
  //   if (!productData) {
  //     return <div>Loading...</div>;
  //   }

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

//zonder api hieronder

// import { useState } from "react";
// import styles from "../css_modules/ProductTabs.module.css";

// type TabContentProps = {
//   isActive: boolean;
//   children: React.ReactNode;
// };

// const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => (
//   <div className={`${styles.description} ${isActive ? styles.active : ""}`}>
//     {children}
//   </div>
// );
// const ProductTabs = () => {
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className={styles["product-tabs"]}>
//       <div className={styles["tab-buttons"]}>
//         <button
//           className={activeTab === "description" ? styles.active : ""}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button
//           className={activeTab === "information" ? styles.active : ""}
//           onClick={() => setActiveTab("information")}
//         >
//           Information
//         </button>
//         <button
//           className={activeTab === "review" ? styles.active : ""}
//           onClick={() => setActiveTab("review")}
//         >
//           Review
//         </button>
//       </div>
//       <div className={styles["tab-content"]}>
//         <TabContent isActive={activeTab === "description"}>
//           <h3>Product Overview</h3>
//           <p>
//             This exquisite chess set combines traditional craftsmanship with
//             luxurious materials. Each piece is hand-carved from premium rosewood
//             and maple, creating a stunning contrast that's both beautiful and
//             functional.
//           </p>
//           <h3>Features</h3>
//           <p>
//             The weighted chess pieces feature felt bottoms for smooth, quiet
//             movement. The board is crafted from matching rosewood and maple
//             squares, with a protective finish that enhances the natural wood
//             grain while ensuring durability.
//           </p>
//           <h3>Components</h3>
//           <ul className={styles["component-list"]}>
//             <li>1 Solid Wood Chess Board (20" x 20")</li>
//             <li>32 Hand-Carved Chess Pieces</li>
//             <li>2 Extra Queens</li>
//             <li>Felt Storage Compartment</li>
//             <li>Certificate of Authenticity</li>
//             <li>Care Instructions</li>
//           </ul>
//           <h3>Packaging & Delivery</h3>
//           <p>
//             The set comes in a luxury presentation box, perfect for gifting.
//             Each piece is individually wrapped for protection. Premium shipping
//             with insurance is included. Standard delivery takes 3-5 business
//             days.
//           </p>
//         </TabContent>
//         <TabContent isActive={activeTab === "information"}>
//           <h3>Product Specifications</h3>
//           <ul className={styles["component-list"]}>
//             <li>Material: Premium Rosewood and Maple</li>
//             <li>Board Dimensions: 20" x 20"</li>
//             <li>King Height: 4 inches</li>
//             <li>Weight: 4.5 lbs</li>
//             <li>Recommended Age: 8+</li>
//             <li>Players: 2</li>
//             <li>Skill Level: All levels</li>
//           </ul>

//           <h3>Care Instructions</h3>
//           <p>
//             Clean with a soft, dry cloth. Avoid direct sunlight and extreme
//             temperatures. Apply wood polish every 6 months to maintain finish.
//           </p>
//         </TabContent>

//         <TabContent isActive={activeTab === "review"}>
//           <h3>Customer Reviews</h3>
//           <p>
//             Reviews will be implemented in a future update. This section will
//             include customer ratings, written reviews, and the ability to submit
//             new reviews.
//           </p>
//         </TabContent>
//       </div>
//     </div>
//   );
// };

// export default ProductTabs;
