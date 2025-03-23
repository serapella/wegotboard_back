import { Link } from "react-router";
import { BsPerson, BsHeart, BsCart3, BsSearch } from "react-icons/bs";
import styles from "../css_modules/HeaderUserNav.module.css";
import WeGotBoardLogo from "../images/WeGotBoard_cut.png";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/authSlice";
import { getTotalQuantity } from "../store/cartSlice";
import SearchBar from "./SearchBar";

const HeaderUserNav = () => {
  const user = useSelector(selectCurrentUser);
  const total = useSelector(getTotalQuantity);
  return (
    <div className={styles.userNav}>
      <Link to="/">
        <img src={WeGotBoardLogo} alt="logo" />
      </Link>
      <SearchBar />
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
