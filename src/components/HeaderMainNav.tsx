import { useState } from "react";
import styles from "../css_modules/headerNav.module.css";
import { LuPhone } from "react-icons/lu";
import { BsX } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router";

const HeaderMainNav = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      navigate(`/products?category=${value}`);
      setIsSidebarOpen(false);
    }
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      setIsSidebarOpen(false);
    }
  };

  return (
    <header>
      <nav>
        <div className={styles.headerMainNavContent}>
          <div className={styles.menuIcon}>
            <button
              type="button"
              className={styles.menuButton}
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            ></button>
          </div>
          <ul className={styles.mainNav}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <select
                name="product"
                id="product"
                onChange={handleProductChange}
                value=""
              >
                <option value="" disabled>
                  Products
                </option>
                <option value="board-games">Board Games</option>
                <option value="dice-games">Dice Games</option>
                <option value="card-games">Card Games</option>
              </select>
            </li>
            <li>
              <select
                name="pages"
                id="pages"
                onChange={handlePageChange}
                value=""
              >
                <option value="" disabled>
                  Pages
                </option>
                <option value="/products">All Products</option>
                <option value="/user/wishlist">Wishlist</option>
                <option value="/cart">Cart</option>
                <option value="/about">About Us</option>
                <option value="/contact">Contact</option>
                <option value="/faq">FAQ</option>
                <option value="/terms">Terms & Conditions</option>
                <option value="/privacy">Privacy Policy</option>
              </select>
            </li>
          </ul>
          <div className={styles.phone}>
            <a href="tel:+1234567890">
              <LuPhone size={20} /> +123 ( 456 ) ( 7890 )
            </a>
          </div>
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        >
          <div className={styles.sidebarHeader}>
            <h2>Menu</h2>
            <button
              onClick={toggleSidebar}
              className={styles.closeButton}
              aria-label="Close menu"
            >
              <BsX size={24} />
            </button>
          </div>
          <div className={styles.sidebarContent}>
            <nav className={styles.sidebarNav}>
              <NavLink to="/" onClick={toggleSidebar}>
                Home
              </NavLink>
              <NavLink to="/products" onClick={toggleSidebar}>
                All Products
              </NavLink>
              <NavLink
                to="/products?category=board-games"
                onClick={toggleSidebar}
              >
                Board Games
              </NavLink>
              <NavLink
                to="/products?category=dice-games"
                onClick={toggleSidebar}
              >
                Dice Games
              </NavLink>
              <NavLink
                to="/products?category=card-games"
                onClick={toggleSidebar}
              >
                Card Games
              </NavLink>
              <NavLink to="/user/wishlist" onClick={toggleSidebar}>
                Wishlist
              </NavLink>
              <NavLink to="/cart" onClick={toggleSidebar}>
                Cart
              </NavLink>
              <NavLink to="/about" onClick={toggleSidebar}>
                About Us
              </NavLink>
              <NavLink to="/contact" onClick={toggleSidebar}>
                Contact
              </NavLink>
              <NavLink to="/faq" onClick={toggleSidebar}>
                FAQ
              </NavLink>
              <NavLink to="/terms" onClick={toggleSidebar}>
                Terms & Conditions
              </NavLink>
              <NavLink to="/privacy" onClick={toggleSidebar}>
                Privacy Policy
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className={styles.overlay}
            onClick={toggleSidebar}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
};

export default HeaderMainNav;
