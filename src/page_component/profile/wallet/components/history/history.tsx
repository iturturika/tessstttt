'use client';

import styles from './history.module.scss';

export function History() {
  return (
    <div className={styles.history}>
      <ul className={'list-reset ' + styles.list}>
        <li className={styles.item}>
          <span className={styles.month}>Март</span>
        </li>
        <li className={styles.item}>
          <div className={styles.title}>45 бонусов</div>
          <p className={styles.text}>
            Пополнение Kangaroo Кошелька Бонус Kangaroo
          </p>
          <span className={styles.date}>10 марта 2022 г.,22:54</span>
        </li>
        <li className={styles.item}>
          <div className={styles.title}>45 бонусов</div>
          <p className={styles.text}>
            Пополнение Kangaroo Кошелька Бонус Kangaroo
          </p>
          <span className={styles.date}>10 марта 2022 г.,22:54</span>
        </li>
        <li className={styles.item}>
          <span className={styles.month}>Февраль</span>
        </li>
        <li className={styles.item}>
          <div className={styles.title}>45 бонусов</div>
          <p className={styles.text}>
            Пополнение Kangaroo Кошелька Бонус Kangaroo
          </p>
          <span className={styles.date}>10 февраля 2022 г.,22:54</span>
        </li>
        <li className={styles.item}>
          <div className={styles.title}>45 бонусов</div>
          <p className={styles.text}>
            Пополнение Kangaroo Кошелька Бонус Kangaroo
          </p>
          <span className={styles.date}>10 февраля 2022 г.,22:54</span>
        </li>
      </ul>
    </div>
  );
}
