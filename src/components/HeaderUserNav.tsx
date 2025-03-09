import styles from "../css_modules/HeaderUserNav.module.css";
import { BsSearch, BsPerson, BsHeart, BsCart3 } from "react-icons/bs";

const HeaderUserNav = () => {
  return (
    <div className={styles.userNav}>
      <a href="#">
        <img src="../images/WeGotBoard_.png" alt="logo" />
      </a>
      <div className={styles.search}>
        <input type="text" placeholder="Search for items..." />
        <select name="dropdown" id="dropdown">
          <option value="default">All Categories</option>
          <option value="default">Boardgames</option>
          <option value="default">Cardgames</option>
          <option value="default">Dicegames</option>
        </select>

        <button>
          <i>
            <BsSearch />
          </i>
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
