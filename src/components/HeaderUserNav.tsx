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
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
};
export default HeaderUserNav;
