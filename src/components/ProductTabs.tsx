import { useState } from "react";
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
