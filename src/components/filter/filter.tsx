'use client';

import { HandySvg } from 'handy-svg'
import styles from './filter.module.scss';

export function Filter() {
  return (
    <section className={styles.filter}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.title}>Фильтры</div>
          <a href='#' className={styles.link}>
            <HandySvg src='/img/arrow-3.svg' width={6} height={16} />
            <span>Транспорт</span>
          </a>
          <span className={styles.subtitle}> Запчасти и аксессуары </span>
          <ul className={styles.list + ' list-reset'}>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
            <li className={styles.item}>
              <a href='#' className={styles.link}>
                Запчасти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
