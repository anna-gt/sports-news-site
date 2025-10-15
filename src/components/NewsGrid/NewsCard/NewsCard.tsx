import React from "react";
import type { NewsCardProps } from "../../../types";
import styles from "./NewsCard.module.scss";

import news1 from "../../../assets/images/news/news-1.webp";
import news2 from "../../../assets/images/news/news-2.webp";
import news3 from "../../../assets/images/news/news-3.webp";
import news4 from "../../../assets/images/news/news-1.webp";
import news5 from "../../../assets/images/news/news-2.webp";
import news6 from "../../../assets/images/news/news-3.webp";

const newsImages: { [key: number]: string } = {
  1: news1,
  2: news2,
  3: news3,
  4: news4,
  5: news5,
  6: news6,
};

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  content,
  date,
  tag,
  variant = "light",
  className = "",
}) => {
  const imageUrl = newsImages[id];

  if (variant === "dark") {
    return (
      <article className={`${styles.newsCard} ${styles[variant]} ${className}`}>
        <div className={styles.imageContainer}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.newsImage}
            loading="lazy"
          />

          <div className={styles.content}>
            <div className={styles.meta}>
              <span className={styles.date}>{date} |</span>
              <span className={styles.tag}>#{tag}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{content}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`${styles.newsCard} ${styles[variant]} ${className}`}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={title}
          className={styles.newsImage}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{date} |</span>
          <span className={styles.tag}>#{tag}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{content}</p>
      </div>
    </article>
  );
};

export default NewsCard;
