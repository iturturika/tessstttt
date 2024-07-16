'use client';

import { Arrow } from '@/elements/arrow/arrow'
import styles from './hero.module.scss';

interface HeroProps{
    margin?: string;
}

export function Hero({ margin = '0' }:HeroProps) {
  return (
    <section className={styles.hero} style={{margin}}>
      <div className='container'>
        <div className={styles.inner}>
            <h1 className={styles.title}>
              Все&nbsp;о&nbsp;модели:&nbsp;Apple&nbsp;iPhone&nbsp;15&nbsp;Pro&nbsp;Max&nbsp;синий&nbsp;8&nbsp;ГБ&nbsp;256&nbsp;ГБ
              <svg viewBox='0 0 24 24' width={26} height={26}>
                <path d='m11 7.41-5.3 5.3a1 1 0 0 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.42L13 7.4V19a1 1 0 1 1-2 0V7.41Z' />
              </svg>
            </h1>
            <Arrow value='4,7 · 292 отзыва' />
            <a href='#' className={styles.link} />
        </div>
      </div>
    </section>
  );
}
