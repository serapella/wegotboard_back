import styles from "../css_modules/HeaderUserNav.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import WeGotBoardLogo from "../images/WeGotBoard_.png";
import { Link } from "react-router";

const HeaderUserNav = () => {
  return (
    <div className={styles.userNav}>
      <Link to="/">
        <img src={WeGotBoardLogo} alt="logo" />
      </Link>
      <div className={styles.search}>
        <input type="text" placeholder="Search for items..." />
        <select name="dropdown" id="dropdown">
          <option value="">All Categories</option>
        </select>

        <button>
          <i>
            <FiSearch />
          </i>
        </button>
      </div>
      <ul>
        <li>
          <a href="#">
            <i>
              <RxPerson />
            </i>
            Account
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              {" "}
              <AiOutlineHeart />
            </i>
            Wishlist
          </a>
        </li>
        <li>
          <a href="#">
            <i>
              {" "}
              <RiShoppingCartLine />
            </i>
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
};
export default HeaderUserNav;
