'use client';

import styles from './disabled.module.scss';
import { Card } from '@/elements/catalog/card/card';

export function Disabled() {
  return (
    <div className={styles.disabled}>
      <ul className={styles.list + ' list-reset'}>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
        <li className={styles.item}>
          <Card
            link='#'
            imgPath='/img/product.png'
            title='оБъявление'
            price={19999}
            oldPrice={22000}
            address='Краснодар'
            date='Неделю назад'
          />
        </li>
      </ul>
    </div>
  );
}
