import { Link } from "react-router";
import style from "../css_modules/p404.module.css";
const P404 = () => {
  return (
    <div className={style.container}>
      <h1>404 - Page Not Found</h1>
      <h2>Oops! Lost in the Game?</h2>
      <p>
        Looks like you've rolled the wrong number. <br />
        This page doesn't exist, but you can always go back to the home page!
      </p>
      <span className={style.link}>
        <br />
        <br />
        <Link to="/">Return to Home</Link>
        <br />
        <br />
        <br />
      </span>
    </div>
  );
};
export default P404;
