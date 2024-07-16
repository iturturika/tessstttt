'use client';

import styles from "./card.module.scss";

interface CardProps {
    link: string;
    imgPath: string;
    title: string;
    condition: boolean;
}

export function Card({ link, imgPath, title, condition }: CardProps) {
    if (condition){
        var cardConditionClass = '';
    } else{
        var cardConditionClass = ' active-card';
    }
  return (
    <div className={styles.card}>
      <a href={link} className={styles.link}>
        <img
          src={imgPath}
          alt={title}
          className={styles.image + cardConditionClass}
          width={92}
          height={92}
        />
        <span>{title}</span>
      </a>
    </div>
  );
}
