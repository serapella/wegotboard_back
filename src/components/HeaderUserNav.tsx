import styles from "../css_modules/HeaderUserNav.module.css";
import { BsPerson, BsHeart, BsCart3 } from "react-icons/bs";
import SearchBar from "./SearchBar";

import WeGotBoardLogo from "../images/WeGotBoard_cut.png";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../store/cartSlice";

const HeaderUserNav = () => {
  const total = useSelector(getTotalQuantity);
  return (
    <div className={styles.userNav}>
      <Link to="/">
        <img src={WeGotBoardLogo} alt="logo" />
      </Link>
      <SearchBar />
      <ul>
        <li>
          <Link to="/user">
            <i>
              <BsPerson />
            </i>
            Account
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <i>
              {" "}
              <BsHeart />
            </i>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i>
              {" "}
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
