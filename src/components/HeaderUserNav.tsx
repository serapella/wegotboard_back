import styles from "../css_modules/HeaderUserNav.module.css";
import { BsPerson, BsHeart, BsCart3 } from "react-icons/bs";
import SearchBar from "./SearchBar";

import WeGotBoardLogo from "../images/WeGotBoard_.png";
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
              {" "}
              <BsHeart />
            </i>
            Wishlist
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              {" "}
              <BsCart3 />
            </i>
            {total !== 0 && <span className={styles.quantity}>{total}</span>}
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
};
export default HeaderUserNav;
