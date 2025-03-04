import styles from "../css_modules/headerNav.module.css";
import { LuPhone } from "react-icons/lu";
import { BsList } from "react-icons/bs";
const HeaderMainNav = () => {
  return (
    <header>
      <nav>
        <div className={styles.menuIcon}>
          <a href="#">
            <BsList size={25} />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">
              {" "}
              Category <img src="../icons_temp/arrow_down.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Products <img src="../icons_temp/arrow_down.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Pages <img src="../icons_temp/arrow_down.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Blog <img src="../icons_temp/arrow_down.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              Elements <img src="../icons_temp/arrow_down.svg" alt="" />
            </a>
          </li>
        </ul>
        <div className={styles.phone}>
          <a href="tel:+1234567890">
            <LuPhone size={20} /> +123 ( 456 ) ( 7890 )
          </a>
        </div>
      </nav>
    </header>
  );
};
export default HeaderMainNav;
