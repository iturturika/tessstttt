'use client';

import { HandySvg } from 'handy-svg';
import styles from './navbar.module.scss';
import Image from 'next/image';

export function Navbar() {
  return (
    <section className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.menu}>
          <span className={styles.price}>115&nbsp;490&nbsp;₽</span>
          <div className={styles.content}>
            <button type='button' className='btn-reset'>
              <HandySvg src='/img/more.svg' width={28} height={28} />
            </button>
            <button type='button' className='btn-reset'>
              <svg
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width={28}
                height={28}
              >
                <path
                  d='M13.976 23.614 4.595 14.23a5.689 5.689 0 0 1 0-8.043 5.685 5.685 0 0 1 8.04 0l1.341 1.34 1.34-1.34a5.685 5.685 0 0 1 8.041 0 5.689 5.689 0 0 1 0 8.043l-9.381 9.384Z'
                  stroke='#000'
                  strokeWidth='3.4'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.review}>
          <span className={styles.reviewNum}>4,8</span>
          <span className={styles.reviewText}>
            <span> 224</span> отзыва о модели
          </span>
        </div>
        <div className={styles.nav}>
          <button type='button' className={'btn-reset ' + styles.buy}>
            Купить с доставкой
          </button>
          <button type='button' className={'btn-reset ' + styles.cart}>
            Добавить в корзину
          </button>
        </div>
          <div className={styles.description}>
            <svg viewBox='0 0 16 16' width={16} height={16}>
              <path
                fill='black'
                fillRule='evenodd'
                d='M0 2.66667C0 2.29848 0.298477 2 0.666667 2H9.78378C10.152 2 10.4505 2.29848 10.4505 2.66667V4.37838H12.5586C12.7354 4.37838 12.9049 4.44862 13.03 4.57364L15.8047 7.34842C15.9298 7.47344 16 7.64301 16 7.81982V11.3874C16 11.7556 15.7015 12.0541 15.3333 12.0541H13.9644C13.7524 12.9627 12.9372 13.6396 11.964 13.6396C10.9907 13.6396 10.1755 12.9627 9.96358 12.0541H6.03643C5.82446 12.9627 5.0093 13.6396 4.03604 13.6396C3.06278 13.6396 2.24762 12.9627 2.03565 12.0541H2C0.895431 12.0541 0 11.1586 0 10.0541V2.66667ZM14.6667 10.7207V8.09596L12.2824 5.71171H10.4504V8.21623C10.4504 8.58442 10.152 8.88289 9.78378 8.88289C9.41559 8.88289 9.11712 8.58442 9.11712 8.21623V4.84592C9.11712 4.84623 9.11712 4.84561 9.11712 4.84592V3.33333H1.33333V10.0541C1.33333 10.4222 1.63181 10.7207 2 10.7207H2.17239C2.49885 10.0184 3.21058 9.53153 4.03604 9.53153C4.86149 9.53153 5.57322 10.0184 5.89968 10.7207H10.1003C10.4268 10.0184 11.1385 9.53153 11.964 9.53153C12.7894 9.53153 13.5012 10.0184 13.8276 10.7207H14.6667ZM3.31532 11.5856C3.31532 11.9836 3.638 12.3063 4.03604 12.3063C4.43408 12.3063 4.75676 11.9836 4.75676 11.5856C4.75676 11.1875 4.43408 10.8649 4.03604 10.8649C3.638 10.8649 3.31532 11.1875 3.31532 11.5856ZM11.2432 11.5856C11.2432 11.9836 11.5659 12.3063 11.964 12.3063C12.362 12.3063 12.6847 11.9836 12.6847 11.5856C12.6847 11.1875 12.362 10.8649 11.964 10.8649C11.5659 10.8649 11.2432 11.1875 11.2432 11.5856Z'
              />
            </svg>
            <div className='navbar__description-content'>
              <span className={styles.descriptionTitle}>
                Kangaroo Доставка
              </span>
              <span className={styles.descriptionText}>
                Доставка в пункт выдачи от <span>99 ₽</span>
              </span>
            </div>
          </div>
          <div className={styles.description}>
            <svg viewBox='0 0 17 17' width={16} height={16}>
              <path
                fill='black'
                d='M2.66634 7.09091C2.39896 6.81846 2.39917 6.38203 2.6668 6.10984L4.60283 4.14077C4.80209 3.93812 5.10409 3.87605 5.36712 3.9837C5.63014 4.09135 5.80198 4.34734 5.80198 4.63154V6.01654L11.1343 6.01654C12.9748 6.01654 14.4669 7.50787 14.4669 9.34842C14.4669 11.189 12.9748 12.681 11.1343 12.681L6.46432 12.681C6.09705 12.681 5.79932 12.3833 5.79932 12.016C5.79932 11.6487 6.09705 11.351 6.46432 11.351L11.1418 11.351C11.142 11.351 11.1415 11.351 11.1418 11.351C12.244 11.3466 13.1369 10.4517 13.1369 9.34842C13.1369 8.24241 12.2403 7.34581 11.1343 7.34581L5.80198 7.34654V8.57339C5.80198 8.85771 5.63 9.11379 5.36681 9.22136C5.10363 9.32893 4.80152 9.26662 4.60237 9.06369L2.66634 7.09091Z'
              />
            </svg>
            <div className={styles.descriptionContent}>
              <span className={styles.descriptionTitle}>
                Гарантия возврата денег, если товар не подойдёт{' '}
              </span>
            </div>
          </div>
        <a href='#' className={styles.link}>
          Об Kangaroo Доставке
        </a>
        <button type='button' className={'btn-reset ' + styles.phone}>
          <span>Показать телефон</span>
          <span className={styles.small}>8 958 XXX-XX-XX</span>
        </button>
        <button type='button' className={'btn-reset ' + styles.message}>
          <span>Написать сообщение</span>
          <span className={styles.small}>Отвечает около 30 минут</span>
        </button>
        <div className={styles.feedback}>
          <div className={styles.feedbackContent}>
            <a href='#'>Apple Store</a>
            <div className={styles.feedbackText}>
              <span>4,9</span>
              <div className={styles.star}>
                <HandySvg src='/img/star.svg' width={14} height={14} />
                <HandySvg src='/img/star.svg' width={14} height={14} />
                <HandySvg src='/img/star.svg' width={14} height={14} />
                <HandySvg src='/img/star.svg' width={14} height={14} />
                <HandySvg src='/img/star.svg' width={14} height={14} />
              </div>
              <span>149 отзывов</span>
            </div>
            <span className={styles.type}>Копания</span>
            <span className={styles.hzchtoeto}>Надёжный продавец</span>
          </div>
          <a href='#'>
            <Image
              src='/img/company-2.png'
              className='image'
              width={70}
              height={46}
              alt='Компания APPLE STORE'
            />
          </a>
        </div>
        <button type='button' className={'btn-reset ' + styles.feedbackBtn}>
          Подписаться на продавца
        </button>
      </div>
    </section>
  );
}
