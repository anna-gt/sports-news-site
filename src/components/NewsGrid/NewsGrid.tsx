import React from 'react';
import type { NewsCardProps } from '../../types';
import styles from './NewsGrid.module.scss';
import NewsCard from './NewsCard/NewsCard';

const NewsGrid: React.FC = () => {
  const newsItems: NewsCardProps[] = [
    {
      id: 1,
      title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
      content: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
      date: 'Сегодня',
      tag: 'болельщикам',
      imageUrl: '/news1.jpg',
      variant: 'light'
    },
    {
      id: 2,
      title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
      content: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
      date: '09.07.19',
      tag: 'любительский_спорт',
      imageUrl: '/news2.jpg',
      variant: 'light'
    },
    {
      id: 3,
      title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
      content: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
      date: '09.07.19',
      tag: 'Профессиональный_спорт',
      imageUrl: '/news3.jpg',
      variant: 'dark'
    },
    {
      id: 4,
      title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
      content: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
      date: 'Сегодня',
      tag: 'болельщикам',
      imageUrl: '/news4.jpg',
      variant: 'light'
    },
  ];

  return (
    <section className={styles.newsGrid}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Последнее</h2>
        <div className={styles.grid}>
          {newsItems.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;