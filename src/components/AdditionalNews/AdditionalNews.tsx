import React from 'react';
import type { NewsCardProps } from '../../types';
import NewsCard from '../NewsGrid/NewsCard/NewsCard';
import styles from './AdditionalNews.module.scss';

const AdditionalNews: React.FC = () => {
  const additionalNews: NewsCardProps[] = [
    {
      id: 5,
      title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
      content: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
      date: '09.07.19',
      tag: 'любительский_спорт',
      imageUrl: '/news5.jpg',
      variant: 'light'
    },
    {
      id: 6,
      title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
      content: 'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
      date: '09.07.19',
      tag: 'Профессиональный_спорт', 
      imageUrl: '/news6.jpg',
      variant: 'dark'
    },
  ];

  return (
    <section className={styles.additionalNews}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {additionalNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalNews;