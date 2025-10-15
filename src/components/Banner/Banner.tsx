import React from "react";
import type { BaseComponentProps } from "../../types";
import styles from "./Banner.module.scss";

interface BannerProps extends BaseComponentProps {
  backgroundUrl: string;
  title?: string;
  subtitle?: string;
  tag?: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundUrl,
  title,
  subtitle,
  tag,
  className = "",
}) => {
  return (
    <section
      className={`${styles.banner} ${className}`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        {tag && <span className={styles.tag}>#{tag}</span>}

        {title && <h2 className={styles.title}>{title}</h2>}

        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
    </section>
  );
};

export default Banner;
