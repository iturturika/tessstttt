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
                width={28} height={28}
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
        <div className={styles.title}>Спросите у продавца</div>
        <div className={styles.chatContent}>
          <textarea
            className={'input-reset ' + styles.textarea}
            name='chat'
            id='chat'
            cols={78}
            rows={3}
            defaultValue={'Здравствуйте! '}
          />
          <button type='button' className={'btn-reset ' + styles.send}>
            <svg viewBox='0 0 24 24'>
              <path d='M22 12a1 1 0 0 1-.57.9l-17 8a1 1 0 0 1-1.4-1.16l1.5-5.5a1 1 0 0 1 .61-.67L9.21 12l-4.07-1.57a1 1 0 0 1-.6-.67l-1.5-5.5A1 1 0 0 1 4.43 3.1l17 8a1 1 0 0 1 .57.9Z' />
            </svg>
          </button>
        </div>
        <ul className={styles.list + ' list-reset'}>
          <li>
            <button type='button' className={'btn-reset ' + styles.chatBtn}>
              Ещё продаёте?
            </button>
          </li>
          <li>
            <button type='button' className={'btn-reset ' + styles.chatBtn}>
              Торг уместен?
            </button>
          </li>
          <li>
            <button type='button' className={'btn-reset ' + styles.chatBtn}>
              Отправите Kangaroo Доставкой?
            </button>
          </li>
          <li>
            <button type='button' className={'btn-reset ' + styles.chatBtn}>
              Когда можно посмотреть?
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
