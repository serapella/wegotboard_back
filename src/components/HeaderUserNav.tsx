import { BsPerson, BsHeart, BsCart3, BsSearch } from "react-icons/bs";
import styles from "../css_modules/HeaderUserNav.module.css";
import SearchBar from "./SearchBar";
import WeGotBoardLogo from "../images/WeGotBoard_cut.png";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../store/cartSlice";
import { selectCurrentUser } from "../store/authSlice";

const HeaderUserNav = () => {
  const total = useSelector(getTotalQuantity);
  const user = useSelector(selectCurrentUser);

  return (
    <div className={styles.userNav}>
      <Link to="/">
        <h1>WeGotBoard</h1>
      </Link>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search products..." />
        <button>
          <BsSearch />
        </button>
      </div>
      <ul>
        <li>
          <a href="#">
            <i>
              <BsPerson />
            </i>
            Account
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              <BsHeart />
            </i>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i>
              <BsCart3 />
            </i>
            {total !== 0 && <span className={styles.quantity}>{total}</span>}
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUserNav;
