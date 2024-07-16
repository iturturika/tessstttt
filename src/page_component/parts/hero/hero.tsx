'use client';

import styles from './hero.module.scss';

interface HeroProps{
    margin?: string;
}

export function Hero({ margin = '0' }:HeroProps) {
  return (
    <section className={styles.hero} style={{margin}}>
      <div className='container'>
        <div className={styles.inner}>
          <h2 className={styles.title}>Поиск запчастей для авто</h2>
          <div className={styles.content}>
          </div>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Показать&nbsp;261&nbsp;объявление
          </button>
        </div>
      </div>
    </section>
  );
}
