'use client';

import styles from './card.module.scss';
import { HandySvg } from 'handy-svg';
import { useRouter } from 'next/navigation';

interface CardProps {
  link: string;
  imgPath: string;
  imgPathWebp?: string;
  title: string;
  price: number;
  oldPrice?: number;
  address: string;
  date: string;
}

export function Card({
                       link,
                       imgPath,
                       imgPathWebp,
                       title,
                       price,
                       oldPrice,
                       address,
                       date,
                     }: CardProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(link);
  };

  return (
      <article className={styles.card}>
        <a href={link} onClick={handleClick} className={styles.link}>
          <div className={styles.picture} title={title}>
            <picture>
              <source srcSet={imgPathWebp} type='image/webp' />
              <img loading='lazy' src={imgPath} className='image' alt={title} />
            </picture>
          </div>
        </a>
        <div className={styles.content}>
          <a href={link} onClick={handleClick}>
            <div className={styles.description}>
              <h3 className={styles.title} title={title}>
                {title}
              </h3>
              <div className={styles.price}>
                <strong>{price}</strong>
              </div>
              <div className={styles.oldPrice}>
                <span>{oldPrice}</span>
                <span className={styles.discount}>-30</span>
              </div>
              <div className={styles.text}>{address}</div>
              <div className={styles.text}>{date}</div>
            </div>
          </a>
          <button type='button' className={styles.btn + ' btn-reset'}>
            <HandySvg
                src='/img/like.svg'
                className={styles.icon}
                width='20'
                height='20'
            />
          </button>
        </div>
      </article>
  );
}