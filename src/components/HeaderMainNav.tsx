import styles from "../css_modules/headerNav.module.css";
import { LuPhone } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router";

const HeaderMainNav = () => {
  return (
    <header>
      <nav>
        <div className={styles.headerMainNavContent}>
          <div className={styles.menuIcon}></div>
          <ul className={styles.mainNav}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <select name="category" id="category">
                <option value="">Category</option>
              </select>
            </li>
            <li>
              <select name="product" id="product">
                <option value="">Products</option>
              </select>
            </li>
            <li>
              <select name="pages" id="pages">
                <option value="">Pages</option>
              </select>
            </li>
          </ul>
          <div className={styles.phone}>
            <a href="tel:+1234567890">
              <LuPhone size={20} /> +123 ( 456 ) ( 7890 )
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMainNav;
