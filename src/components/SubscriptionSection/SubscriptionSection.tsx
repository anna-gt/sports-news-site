import React, { useState } from 'react';
import styles from './SubscriptionSection.module.scss';
import SocialIcons from '../UI/SocialIcons/SocialIcons';

const SubscriptionSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    console.log('Email:', email);
  };

  return (
    <section className={styles.subscriptionSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.socialBlock}>
            <h3 className={styles.blockTitle}>Соцсети</h3>
            <SocialIcons variant='default' className={styles.socialIcons}/>
          </div>
          <div className={styles.subscriptionBlock}>
            <h3 className={styles.blockTitle}>Подписка</h3>
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
    </section>
  );
};

export default SubscriptionSection;