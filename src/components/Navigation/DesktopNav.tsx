import React from "react";
import styles from "./Navigation.module.scss";
import { menuItems } from "../../helpers/menyItems";

const DesktopNav: React.FC = () => {
  return (
    <nav className={styles.desktopNav} aria-label="Основная навигация">
      <ul className={styles.navList}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <a href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
