import React from "react";
import styles from "./BurgerButton.module.scss";
import type { BurgerButtonProps } from "../../../types";

import burgerIcon from "../../../assets/icons/burger.svg";

const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  onClick,
  className = "",
}) => {
  if (isOpen) {
    return null;
  }

  return (
    <img
      src={burgerIcon}
      className={`${styles.burgerButton} ${className}`}
      onClick={onClick}
      aria-label={"Open menu"}
    />
  );
};

export default BurgerButton;
