'use client';

import styles from './pay.module.scss';
import Image from 'next/image';

export function Pay() {
  return (
    <div className={styles.wallet}>
      <div className={styles.pay}>
        <input
          type='number'
          name='pay'
          id='pay'
          className={'input-reset ' + styles.input}
          defaultValue={1500}
        />
        <span>₽</span>
      </div>
      <div className={styles.way}>
        <div className={styles.title}>Выберите способ пополнение</div>
        <ul className={'list-reset ' + styles.list}>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <Image
                src='img/way/way-1.svg'
                className='image'
                width={32}
                height={32}
                alt='Логотип карты'
              />
              <span>Банковская карта</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <Image
                src='img/way/way-2.svg'
                className='image'
                width={32}
                height={32}
                alt='Логотип СберБанка'
              />
              <span>СберБанк Онлайн</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <Image
                src='img/way/way-3.svg'
                className='image'
                width={32}
                height={32}
                alt='Логотип ЮMoney'
              />
              <span>ЮMoney</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <Image
                src='img/way/way-4.svg'
                className='image'
                width={32}
                height={32}
                alt='Логотип Банка'
              />
              <span>Банковский перевод</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
