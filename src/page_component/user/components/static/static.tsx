'use client';

import { HandySvg } from 'handy-svg';
import styles from './static.module.scss';

export function Static() {
  return (
    <section className={styles.static}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.star}>
            <div className={styles.starItem}>
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
            </div>
            <div className={styles.starItem}>
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' />
            </div>
            <div className={styles.starItem}>
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' />
              <HandySvg src='/img/star.svg' />
            </div>
            <div className={styles.starItem}>
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' />
              <HandySvg src='/img/star.svg' />
              <HandySvg src='/img/star.svg' />
            </div>
            <div className={styles.starItem}>
              <HandySvg src='/img/star.svg' className={styles.filled} />
              <HandySvg src='/img/star.svg' />
              <HandySvg src='/img/star.svg' />
              <HandySvg src='/img/star.svg' />
              <HandySvg src='/img/star.svg' />
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
        <a href='#' className={styles.link}>
          Оставить отзыв
        </a>
        <p className={styles.text}>
          Поделитесь впечатлениями об этой модели. Ваше мнение поможет
          другим людям сделать выбор.
        </p>
      </div>
    </section>
  );
}
