import { Link } from "react-router";
import { BsPerson, BsHeart, BsCart3, BsSearch } from "react-icons/bs";
import styles from "../css_modules/HeaderUserNav.module.css";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";

const HeaderUserNav = () => {
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
          <Link to={user ? "/user/profile" : "/user/login"}>
            <i>
              <BsPerson />
            </i>
            {user ? `${user.name.first}` : "Account"}
          </Link>
        </li>
        <li>
          <Link to="/user/wishlist">
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
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUserNav;
