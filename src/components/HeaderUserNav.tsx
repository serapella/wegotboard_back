import { Link } from "react-router";
import { BsPerson, BsHeart, BsCart3 } from "react-icons/bs";
import styles from "../css_modules/HeaderUserNav.module.css";
import WeGotBoardLogo from "../images/WeGotBoard_cut.png";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../store/userAPI";
import { getTotalQuantity } from "../store/cartSlice";
import SearchBar from "./SearchBar";

const HeaderUserNav = () => {
  const { data: user, isLoading, isError } = useGetProfileQuery();
  const total = useSelector(getTotalQuantity);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error loading user profile</div>;

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
