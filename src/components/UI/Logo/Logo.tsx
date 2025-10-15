import React from 'react';
import type { BaseComponentProps } from '../../../types';
import styles from './Logo.module.scss';

interface LogoProps extends BaseComponentProps {
  variant?: 'red-white' | 'white-only';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant='red-white' }) => {
  return (
    <div 
      className={`${styles.logo} ${styles[variant]} ${className}`}
    >
      <span className={styles.sport}>sport</span>
      <span className={styles.hub}>hub</span>
    </div>
  );
};

export default Logo;