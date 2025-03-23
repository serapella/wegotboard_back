import styles from "../css_modules/HeaderUserNav.module.css";
import { BsSearch, BsPerson, BsHeart, BsCart3 } from "react-icons/bs";
import SearchBar from "./SearchBar";

import WeGotBoardLogo from "../images/WeGotBoard_cut.png";
import { Link } from "react-router";

const HeaderUserNav = () => {
  return (
    <div className={styles.userNav}>
      <a href="#">
        <img src={WeGotBoardLogo} alt="logo" />
      </a>
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
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HeaderUserNav;
