'use client';

import { HandySvg } from 'handy-svg';
import styles from './dashboard.module.scss';

interface DashboardProps{
  margin?: string;
}

export function Dashboard({ margin = '0' }:DashboardProps) {
  return (
    <div style={{margin}}>
      <div className={styles.title}>
        <span>4,9</span>
        <div className={styles.titleStar}>
          <HandySvg
            className={styles.filled}
            src='/img/star.svg'
            width={25}
            height={25}
          />
          <HandySvg
            className={styles.filled}
            src='/img/star.svg'
            width={25}
            height={25}
          />
          <HandySvg
            className={styles.filled}
            src='/img/star.svg'
            width={25}
            height={25}
          />
          <HandySvg
            className={styles.filled}
            src='/img/star.svg'
            width={25}
            height={25}
          />
          <HandySvg
            className={styles.filled}
            src='/img/star.svg'
            width={25}
            height={25}
          />
        </div>
      </div>
      <p className={styles.text}>на основании 150 оценок</p>
      <div className={styles.content}>
        <div className={styles.reviewContent}>
          <div className={styles.star}>
            <div className={styles.starItem}>
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
            </div>
            <div className={styles.starItem}>
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg src='/img/star.svg' width={25} height={25} />
            </div>
            <div className={styles.starItem}>
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg src='/img/star.svg' width={25} height={25} />
              <HandySvg src='/img/star.svg' width={25} height={25} />
            </div>
            <div className={styles.starItem}>
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg src='/img/star.svg' width={25} height={25} />
              <HandySvg src='/img/star.svg' width={25} height={25} />
              <HandySvg src='/img/star.svg' width={25} height={25} />
            </div>
            <div className={styles.starItem}>
              <HandySvg
                className={styles.filled}
                src='/img/star.svg'
                width={25}
                height={25}
              />
              <HandySvg src='/img/star.svg' width={25} height={25} />
              <HandySvg src='/img/star.svg' width={25} height={25} />
              <HandySvg src='/img/star.svg' width={25} height={25} />
              <HandySvg src='/img/star.svg' width={25} height={25} />
            </div>
          </div>
          <div className={styles.progress}>
            <div className={styles.bar}>
              <div className={styles.barProgress} style={{ width: '90%' }} />
            </div>
            <div className={styles.bar}>
              <div className={styles.barProgress} style={{ width: '5%' }} />
            </div>
            <div className={styles.bar}>
              <div className={styles.barProgress} style={{ width: '2%' }} />
            </div>
            <div className={styles.bar}>
              <div className={styles.barProgress} style={{ width: '1%' }} />
            </div>
            <div className={styles.bar}>
              <div className={styles.barProgress} style={{ width: '8%' }} />
            </div>
          </div>
          <div className={styles.num}>
            <span>257</span>
            <span>12</span>
            <span>6</span>
            <span>2</span>
            <span>16</span>
          </div>
        </div>
        <div className={styles.rating}>
          <p className={styles.ratingText}>
            Рейтинг — это среднее арифметическое оценок пользователей.{' '}
            <a href='#'>Подробнее</a>
          </p>
          <button type='button' className='btn-reset'>
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
  );
}
