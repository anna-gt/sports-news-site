import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../UI/Logo/Logo";
import prasIcon from "../../assets/icons/pras-icon.svg";
import SocialIcons from "../UI/SocialIcons/SocialIcons";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoWrapper}>
            <Logo variant="white-only" className={styles.logo} />
          </div>
          <div className={styles.navItem}>О проекте</div>
          <div className={styles.navItem}>Обратная связь</div>
          <div>
            <div className={styles.ads}>Реклама:</div>
            <div className={styles.adsLink}>ads@sporthub.news</div>
          </div>
        </div>
        <SocialIcons className={styles.middleSection}/>
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            <span>© 2022 «Спортхаб»</span>
          </div>

          <div className={styles.additionalInfo}>
            <img src={prasIcon} aria-label="pras-icon" />
            <span>Разработка сайта — компания PRAS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
