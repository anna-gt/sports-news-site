import React from 'react';
import type { CoachCardProps } from '../../types';
import styles from './CoachesSection.module.scss';
import CoachCard from './CoachCard/CoachCard';

import coach1 from '../../assets/images/coaches/coach-1.webp';
import coach2 from '../../assets/images/coaches/coach-2.webp';
import coach3 from '../../assets/images/coaches/coach-3.webp';

const CoachesSection: React.FC = () => {
  const coaches: CoachCardProps[] = [
    {
      id: 1,
      name: 'Алексей Михайличенко',
      position: 'Главный тренер ф.к. Динамо',
      quote: 'Сергей Корниленко станет играющим тренером «Крыльев советов»',
      imageUrl: coach1,
    },
    {
      id: 2,
      name: 'Алексей Михайличенко',
      position: 'Главный тренер ф.к. Динамо',
      quote: '«Динамо» как бы начинает работать заново',
      imageUrl: coach2,
    },
    {
      id: 3,
      name: 'Алексей Михайличенко',
      position: 'Главный тренер ф.к. Динамо',
      quote: 'Сергей Корниленко станет играющим тренером «Крыльев советов»',
      imageUrl: coach3,
    },
    {
      id: 4,
      name: 'Алексей Михайличенко',
      position: 'Главный тренер ф.к. Динамо',
      quote: '«Динамо» как бы начинает работать заново',
      imageUrl: coach1,
    },
  ];

  return (
    <section className={styles.coachesSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {coaches.map((coach) => (
            <CoachCard key={coach.id} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;