'use client';

import styles from './property.module.scss';

export function Property() {
  return (
    <section className={styles.property}>
      <div className={styles.inner}>
        <div className={styles.title}>Характеристики</div>
        <ul className={styles.list + ' list-reset'}>
          <li className={styles.item}>
            <p className={styles.text}>
              <span className={styles.itemTitle}>Состояние:</span>&nbsp;
              <span>Новое</span>
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>
              <span className={styles.itemTitle}>Встроенная память:</span>&nbsp;
              <span>256 ГБ</span>
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>
              <span className={styles.itemTitle}>Производитель:</span>&nbsp;
              <span>Apple</span>
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>
              <span className={styles.itemTitle}>Цвет:</span>&nbsp;
              <span>Синий</span>
            </p>
          </li>
          <li className={styles.item}>
            <p className={styles.text}>
              <span className={styles.itemTitle}>Модель:</span>&nbsp;
              <a href='#'>iPhone 15 Pro</a>
            </p>
          </li>
        </ul>
        <a href='#' className={styles.link}>
          Все характеристики
        </a>
      </div>
    </section>
  );
}
