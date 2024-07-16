'use client';

import { HandySvg } from 'handy-svg'
import styles from './active.module.scss';
import { Card } from '@/elements/catalog/card/card';

export function Active() {
  return (
    <div className={styles.active}>
      <nav className={styles.menu}>
        <div className={styles.search}>
          <input
            placeholder='Поиск по объявлениям'
            type='text'
            name='searchActive'
            id='searchActive'
            className={'input-reset ' + styles.input}
          />
          <button type='button' className={'btn-reset ' + styles.filter}>
            <HandySvg src='/img/filter.svg' />
          </button>
        </div>
        <button type='button' className={'btn-reset ' + styles.btn}>
          Найти
        </button>
      </nav>
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
      <button type='button' className={styles.more + ' btn-reset'}>
        Показать все
      </button>
    </div>
  );
}
