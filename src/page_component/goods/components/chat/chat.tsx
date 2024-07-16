'use client';

import styles from './chat.module.scss';
import { Card } from '@/elements/catalog/card/card';

export function Chat() {
  return (
    <section className={styles.chat}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.text}>
            <span>№ 3501734677</span>·<span>23 апреля в 12:23</span>·
            <span>1502 просмотра (+0 сегодня)</span>
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Пожаловатся
          </button>
        </div>
        <div className={styles.title}>Другие объявления компании</div>
        <ul className={'list-reset ' + styles.list}>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
        <button type='button' className={'btn-reset ' + styles.more}>
          Показать ещё объявления
        </button>
      </div>
    </section>
  );
}
