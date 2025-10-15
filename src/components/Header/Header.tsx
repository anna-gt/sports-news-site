import React, { useState } from 'react';
import Logo from '../UI/Logo/Logo';
import DesktopNav from '../Navigation/DesktopNav';
import BurgerButton from '../UI/BurgerButton/BurgerButton';
import styles from './Header.module.scss';
import MobileMenu from '../Navigation/MobileMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />
        <div className={styles.navWrapper}>
          <DesktopNav />
          <div className={styles.buttonWrapper}>
            <BurgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>     
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </header>
  );
};

export default Header;