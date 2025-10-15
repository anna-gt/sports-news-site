import React, { useState } from "react";
import type { MobileMenuProps, MenuItem } from "../../types";
import Logo from "../UI/Logo/Logo";
import styles from "./MobileMenu.module.scss";
import { menuItems } from "../../helpers/menyItems";
import { sportsCategories } from "../../helpers/sportsCategories";
import closeIcon from "../../assets/icons/closeIcon.svg";
import SocialIcons from "../UI/SocialIcons/SocialIcons";

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    console.log("Email:", email);
  };

  const aboutItems: MenuItem[] = [
    { id: 1, label: "О проекте", href: "#" },
    { id: 2, label: "Обратная связь", href: "#" },
  ];

  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenuOverlay}>
      <div className={styles.mobileMenu}>
        <div className={styles.menuHeader}>
          <Logo variant="white-only" />
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            <img src={closeIcon} />
          </button>
        </div>
        <div className={styles.menuContent}>
          <div className={styles.menuColumn}>
            <ul className={styles.columnList}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className={styles.columnLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menuColumn}>
            <ul className={styles.sportsColumn}>
              {sportsCategories.map((sport) => (
                <li key={sport.id}>
                  <span className={styles.columnLink}>{sport.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menuColumn}>
            <ul className={styles.columnList}>
              {aboutItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className={styles.columnLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SocialIcons className={styles.socialIcons} />
        <div className={styles.menuFooter}>
          <div className={styles.ads}>
            <div className={styles.footerTitle}>Размещение рекламы:</div>
            <div>ads@sporthub.news</div>
          </div>
          <div className={styles.subscription}>
            <div className={styles.footerTitle}>Подписка:</div>
            <form onSubmit={handleSubmit} className={styles.subscriptionForm}>
              <input
                type="email"
                placeholder="Введите ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.subscribeButton}>
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
