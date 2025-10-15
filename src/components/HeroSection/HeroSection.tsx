import React from "react";
import Header from "../Header/Header";
import styles from "./HeroSection.module.scss";
import heroBg from "../../assets/images/backgrounds/hero-bg.webp";
import { sportsCategories } from "../../helpers/sportsCategories";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <Header />
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.heroSubtitle}>#Экстрим</span>
          <h1 className={styles.heroTitle}>
            Юрий Поклад: «Динамо» <br /> как бы начинает работать заново
          </h1>
        </div>
      </div>
      <div className={styles.sportsBar}>
        <div className={styles.sportsScroll}>
          {sportsCategories.map((sport) => (
            <span key={sport.id} className={styles.sportItem}>
              {sport.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
