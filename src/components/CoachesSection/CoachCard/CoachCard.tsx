import React from "react";
import type { CoachCardProps } from "../../../types";
import styles from "./CoachCard.module.scss";
import quoteIcon from '../../../assets/images/coaches/icon-quote.svg';

const CoachCard: React.FC<CoachCardProps> = ({
  name,
  position,
  quote,
  imageUrl,
  className = "",
}) => {
  return (
    <article className={`${styles.coachCard} ${className}`}>
      <div className={styles.photoSection}>
        <div className={styles.coachPhoto}>
          <img src={imageUrl} alt={name} className={styles.coachImage} />
        </div>
        <div className={styles.quoteIcon}>
          <img src={quoteIcon} alt={"quote-icon"} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <blockquote className={styles.quote}>{quote}</blockquote>
      </div>
    </article>
  );
};

export default CoachCard;
