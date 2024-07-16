'use client';

import { Checkbox } from '@/elements/checkbox/checkbox'
import styles from './messenger.module.scss';
import Image from 'next/image';

export function Messenger() {
  return (
    <section className={styles.messenger}>
      <div className={styles.inner}>
        <div className={styles.menu}>
          <h1 className={styles.title}>Сообщение</h1>
          <div className={styles.menuContent}>
            <a href='#' className={styles.btn}>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                style={{ width: 16, height: 16, color: 'currentcolor' }}
              >
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M4.702 4.722C6.462 3.257 8.956 2.5 11.971 2.5c3.014 0 5.51.757 7.268 2.222 1.781 1.484 2.702 3.608 2.702 6.092 0 2.484-.92 4.608-2.702 6.091-1.759 1.466-4.254 2.223-7.268 2.223-.608 0-1.193-.03-1.754-.091L7.81 21.124a1 1 0 0 1-1.643-.599l-.463-2.908C3.297 16.167 2 13.762 2 10.814c0-2.484.92-4.608 2.701-6.092ZM10.42 13.3l-.477 1.336a1 1 0 1 1-1.883-.672l2.5-7A1 1 0 0 1 11.5 6.3h1a1 1 0 0 1 .942.664l2.5 7a1 1 0 1 1-1.883.672L13.58 13.3H10.42Zm2.448-2L12 8.3l-.866 3h1.733Z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Автоответы</span>
            </a>
            <button
              type='button'
              className={'btn-reset ' + styles.btn}
            >
              <svg
                viewBox='0 0 18 18'
                xmlns='http://www.w3.org/2000/svg'
                style={{ width: 20, height: 20, color: 'currentcolor' }}
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.4 9a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zM2.067 9a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zm10.667 0a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </div>
        </div>
        <nav className={styles.nav} title='Навигационная панель мессенджера'>
          <ul className={styles.navList + ' list-reset'}>
            <li className={styles.navItem}>
                <Checkbox id='select' value='' />
            </li>
            <li className={styles.navItem}>
              <button
                type='button'
                className={'btn-reset ' + styles.select}
              >
                <span>Все сообщения</span>
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 16, height: 16, color: 'currentcolor' }}
                >
                  <path
                    d='M13.138 5.529c.26.26.26.682 0 .943L8.47 11.138a.667.667 0 01-.943 0L2.862 6.472a.667.667 0 11.942-.943L8 9.724l4.195-4.195c.26-.26.682-.26.943 0z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </li>
            <li className={styles.navItem}>
              <button
                type='button'
                className={'btn-reset ' + styles.select}
              >
                <span>Все объявления</span>
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 16, height: 16, color: 'currentcolor' }}
                >
                  <path
                    d='M13.138 5.529c.26.26.26.682 0 .943L8.47 11.138a.667.667 0 01-.943 0L2.862 6.472a.667.667 0 11.942-.943L8 9.724l4.195-4.195c.26-.26.682-.26.943 0z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </li>
            <li className={styles.navItem}>
              <input
                placeholder='Поиск по сообщениям'
                type='text'
                name='search'
                id='search'
                className={'input-reset ' + styles.input}
              />
            </li>
          </ul>
        </nav>
        <div className={styles.support}>
          <a href='#' className={styles.supportLink}>
            <Image
              src='/img/support.png'
              className='image'
              width={48}
              height={48}
              alt='Изображения тех. поддержки'
            />
            <div className={styles.supportDescription}>
              <div className={styles.supportTitle}>Поддержка Kangaroo</div>
              <div className={styles.supportText}>Будем рады помочь</div>
            </div>
          </a>
        </div>
        <ul className={styles.list + ' list-reset'}>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.chat}>
                <Checkbox id='chat1' value='' />
                <Image
                  src='/img/user-2.png'
                  className='image'
                  width={48}
                  height={48}
                  alt='Пользователь'
                />
                <div className={styles.description}>
                  <div className={styles.descriptionTitle}>
                    Пользователь
                  </div>
                  <p className={styles.text}>
                    💰 Ваши деньги под защитой. Продавец получит их, когда вы
                    заберёте посылку.⬇️ Чтобы оформить заказ, нажмите кнопку
                    «Купить с доставкой».
                  </p>
                </div>
                <span className={styles.date}>23:50</span>
                <button
                  type='button'
                  className={'btn-reset ' + styles.more}
                  id='messengerMenuBtn'
                >
                  <svg
                    viewBox='0 0 18 18'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ width: 20, height: 20, color: 'currentcolor' }}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.4 9a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zM2.067 9a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zm10.667 0a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.chat}>
                <Checkbox id='chat2' value='' />
                <Image
                  src='/img/user-2.png'
                  className='image'
                  width={48}
                  height={48}
                  alt='Пользователь'
                />
                <div className={styles.description}>
                  <div className={styles.descriptionTitle}>
                    Пользователь
                  </div>
                  <p className={styles.text}>
                    💰 Ваши деньги под защитой. Продавец получит их, когда вы
                    заберёте посылку.⬇️ Чтобы оформить заказ, нажмите кнопку
                    «Купить с доставкой».
                  </p>
                </div>
                <span className={styles.date}>23:50</span>
                <button
                  type='button'
                  className={'btn-reset ' + styles.more}
                  id='messengerMenuBtn'
                >
                  <svg
                    viewBox='0 0 18 18'
                    xmlns='http://www.w3.org/2000/svg'
                    style={{ width: 20, height: 20, color: 'currentcolor' }}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M7.4 9a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zM2.067 9a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zm10.667 0a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
