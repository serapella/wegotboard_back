import { Link } from "react-router";
import style from "../css_modules/about.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <h1>About Us</h1>
      <h2>Who We Are</h2>
      <p>
        WeGotBoard is a team of passionate board game enthusiasts who are
        dedicated to creating a unique and enjoyable gaming experience for all
        ages. Our mission is to provide a diverse range of board, card and dice
        games that cater to different interests and preferences.
      </p>
      <p>
        We believe that board games have the power to bring people together,
        create friendships, and foster camaraderie. That's why we're committed
        to managing a carefully curated collection of games that reflect the
        diversity of our community.
      </p>
      <h2>What We Offer</h2>
      <p>
        At WeGotBoard, we offer a wide selection of board, card and dice games
        that cater to a wide range of interests and preferences. Whether you're
        a fan of strategy, luck, or fast-paced action, we have something for
        everyone.
      </p>
      <p>
        Our collection of games includes a variety of genres, from classic board
        games to modern card games and dice games. We also offer a range of
        themed games that allow you to immerse yourself in a unique and engaging
        experience.
      </p>
      <h2>Sign up now</h2>
      <p>
        Sign up now to keep track of discounts on your favorite games, latest
        news in the world of board games, and much more.
      </p>
      <p>
        Contribute by leaving a review for games to let others know if something
        is worth buying.
      </p>
      <p>
        <Link to="/user/register">Sign up now!</Link>
      </p>
    </div>
  );
};
export default About;
