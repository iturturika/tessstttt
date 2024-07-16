'use client';

import { Market } from '@/components/market/market'
import styles from './ads.module.scss';

export function Ads() {
  return (
    <div className={styles.ads} style={{ position: 'relative' }}>
      <ul className={styles.category + ' list-reset'}>
        <li className={styles.categoryItem}>
          <button type='button' className={'btn-reset ' + styles.categoryBtn}>
            Все&nbsp;<span>2</span>
          </button>
        </li>
        <li className={styles.categoryItem}>
          <button type='button' className={'btn-reset ' + styles.categoryBtn}>
            Бытовая техника&nbsp;<span>2</span>
          </button>
        </li>
        <li className={styles.categoryItem}>
          <button type='button' className={'btn-reset ' + styles.categoryBtn}>
            Телефоны&nbsp;<span>2</span>
          </button>
        </li>
      </ul>
      <button
        type='button'
        className={'btn-reset ' + styles.sort}
      >
        <svg viewBox='0 0 24 24'>
          <path
            d='M8 19V4M16 20V5M5 7l3-3 3 3M19 17l-3 3-3-3'
            stroke='currentColor'
            strokeWidth='1.9'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span>Сначала недавнее</span>
      </button>
      <Market />
    </div>
  );
}
