'use client';

import styles from './menu.module.scss';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <button
        type='button'
        className={'btn-reset ' + styles.review + ' ' + styles.disabled}
      >
        <svg
          viewBox='0 0 24 24'
          fill='var(--dark-color)'
          style={{ rotate: '-90deg' }}
        >
          <path d='M4.8 16.2a1 1 0 0 0 1.4 0l6.3-6.29 6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z' />
        </svg>
      </button>
      <ul className={'list-reset ' + styles.menuList}>
        <li className={styles.menuItem}>
          <button
            type='button'
            className={
              'btn-reset ' + styles.menuBtnSpecial + ' ' + styles.active
            }
          >
            1
          </button>
        </li>
        <li className={styles.menuItem}>
          <button type='button' className={'btn-reset ' + styles.menuBtn}>
            2
          </button>
        </li>
        <li className={styles.menuItem}>
          <button type='button' className={'btn-reset ' + styles.menuBtn}>
            3
          </button>
        </li>
        <li className={styles.menuItem}>
          <button type='button' className={'btn-reset ' + styles.menuBtn}>
            4
          </button>
        </li>
        <li className={styles.menuItem}>
          <button type='button' className={'btn-reset ' + styles.menuBtn}>
            5
          </button>
        </li>
        <li className={styles.menuItem}>
          <button type='button' className={'btn-reset ' + styles.menuBtn}>
            ...
          </button>
        </li>
        <li className={styles.menuItem}>
          <button type='button' className={'btn-reset ' + styles.menuBtn}>
            30
          </button>
        </li>
      </ul>
      <button type='button' className={'btn-reset ' + styles.menuBtnSpecial}>
        <svg
          viewBox='0 0 24 24'
          fill='var(--dark-color)'
          style={{ rotate: '90deg' }}
        >
          <path d='M4.8 16.2a1 1 0 0 0 1.4 0l6.3-6.29 6.3 6.3a1 1 0 0 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.42Z' />
        </svg>
      </button>
    </nav>
  );
}
