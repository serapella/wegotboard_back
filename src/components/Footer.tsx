import { Link, useNavigate } from "react-router";
import style from "../css_modules/footer.module.css";
import footer_image from "../images/WeGotBoard_cut.png";
import { BsFillSendFill, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setCategories } from "../store/filterSlice";
const Footer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div className={style.footer}>
      <div>
        <div>
          <img src={footer_image} alt="WeGotBoard logo" />
          <ul>
            <li>WeGotBoard has a wide range of board games for all ages.</li>
            <li>
              <img src="../icons_temp/location-icon.svg" alt="" />
              123 Main Street, Anytown, BE
            </li>
            <li>
              <img src="../icons_temp/mail-icon.svg" alt="" />
              example@email.com
            </li>
            <li>
              <img src="../icons_temp/phone-icon.svg" alt="" />
              +32 123 4567890
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>Delivery Information</li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>
            <li
              onClick={() => {
                dispatch(setCategories("board-games"));
                navigate("/products");
              }}
              className={style.navFilter}
            >
              Board Games
            </li>
            <li
              onClick={() => {
                dispatch(setCategories("card-games"));
                navigate("/products");
              }}
              className={style.navFilter}
            >
              Card Games
            </li>
            <li
              onClick={() => {
                dispatch(setCategories("dice-games"));
                navigate("/products");
              }}
              className={style.navFilter}
            >
              Dice Games
            </li>
          </ul>
        </div>
        <div>
          <h4>Subscribe To Our Newsletter</h4>
          <form className={style.input_box}>
            <input type="text" placeholder="Enter email..." />
            <div className={style.send_icon}>
              <BsFillSendFill />
            </div>
          </form>
          <div className={style.socials}>
            <div>
              <a href="">
                <BsFacebook />
              </a>
            </div>
            <div>
              <a href="">
                <BsTwitterX />
              </a>
            </div>
            <div>
              <a href="">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          © {new Date().getFullYear()} <span>WeGotBoard</span>, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
