import React from "react";
import styles from "../css/NewsSection.module.css";

type NewsItem = {
  id: number;
  imageUrl: string;
  altText: string;
  date: {
    day: string;
    month: string;
  };
  author: string;
  category: string;
  title: string;
  link: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    imageUrl: "/images/game.jpg",
    altText: "Board game",
    date: { day: "10", month: "Oct" },
    author: "Admin",
    category: "Board Games",
    title: "Urna pretium elit mauris cursus at elit Vestibulum.",
    link: "#",
  },
  {
    id: 2,
    imageUrl: "/images/game.jpg",
    altText: "Card game",
    date: { day: "11", month: "Oct" },
    author: "Admin",
    category: "Card Games",
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    id: 3,
    imageUrl: "/images/game.jpg",
    altText: "Dice game",
    date: { day: "12", month: "Oct" },
    author: "Admin",
    category: "Dice Games",
    title:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "#",
  },
];

const NewsSection: React.FC = () => (
  <section className={styles.news}>
    <h2>Latest News</h2>
    <p>
      Stay updated with the latest trends and insights in the world of board
      games, card games, and dice games.
    </p>
    <div className={styles.newsGrid}>
      {newsItems.map(
        ({ id, imageUrl, altText, date, author, category, title, link }) => (
          <div key={id} className={styles.newsItem}>
            <div className={styles.newsItemText}>
              <p>
                By {author} <span>|</span> {category}
              </p>
              <h5>{title}</h5>
              <a href={link}>Read More</a>
            </div>
            <div className={styles.news_img_container}>
              <img src={imageUrl} alt={altText} />
              <div className={styles.date}>
                <p>{date.day}</p>
                <p>{date.month}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export default NewsSection;
