'use client';

import { HandySvg } from 'handy-svg'
import styles from './chat.module.scss'
import Image from 'next/image';

export function Chat() {
  return (
    <section className={styles.chatroom}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <button type='button' className={'btn-reset ' + styles.return}>
              <HandySvg src='/img/arrow.svg' width='24' height='24' />
            </button>
            <a href='#'>
              <Image
                src='/img/user-2.png'
                className='image'
                width={40}
                height={40}
                alt='Пользователь'
              />
            </a>
            <div className={styles.headerDescription}>
              <div className={styles.headerUser}>
                <a href='#'>Леонид</a>
                <time dateTime='2024-05-08T23:09:12'>В сети вчера в 23:09</time>
              </div>
              <a href='#' className={styles.headerItem}>
                iPhone 11 Pro Max, 256 ГБ 21 300 ₽
              </a>
            </div>
          </div>
          <div className={styles.headerMenu}>
            <a className={'is-hidden ' + styles.headerPhone} href='tel:+71234567890'>
              +712345678900
            </a>
            <button
              type='button'
              className={'btn-reset ' + styles.headerBtn}
            >
              Показать телефон
            </button>
            <button
              id='chatroomMenuBtn'
              type='button'
              className={'btn-reset ' + styles.headerBtn}
              style={{ padding: '0 6px' }}
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
        <div className={styles.container}>
          <time dateTime='2024-05-07' className={styles.date}>
            Вторник, 7 мая
          </time>
          <div className={styles.item}>
            <div className={styles.sender}>
              <div className={styles.message}>
                <div className={styles.messageInfo}>
                  <HandySvg src='/img/view.svg' width={12} height={12} />
                  <time dateTime='2024-05-07T23:23:50'>23:50</time>
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quasi impedit perspiciatis pariatur exercitationem,
                  et aspernatur alias officiis! Minima corrupti inventore
                  aperiam in ratione quis fuga minus consequatur officiis
                  reiciendis?
                </span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.recipient}>
              <div className={styles.message}>
                <div className={styles.messageInfo}>
                  <time dateTime='2024-05-07T23:23:50'>23:50</time>
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  earum architecto error voluptates enim obcaecati atque ab,
                  illo ipsa beatae, voluptatum voluptate aperiam mollitia
                  quibusdam? Qui deleniti molestiae architecto recusandae.
                </span>
              </div>
            </div>
            <div className={styles.recipient}>
              <div className={styles.message}>
                <div className={styles.messageInfo}>
                  <time dateTime='2024-05-07T23:23:52'>23:50</time>
                </div>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iure, accusamus minima consequatur sunt iusto eaque rem atque,
                  ratione odit nemo optio tenetur, corporis perferendis cum
                  voluptatem dolor officiis sed! Vitae!
                </span>
              </div>
            </div>
          </div>
          <time dateTime='2024-05-08' className={styles.date}>
            Среда, 8 мая
          </time>
          <div className={styles.item}>
            <div className={styles.recipient}>
              <div className={styles.message}>
                <div className={styles.messageInfo}>
                  <time dateTime='2024-05-08T23:23:50'>23:50</time>
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  autem molestiae praesentium laborum vel! Facilis consequuntur
                  iusto voluptates, accusantium quia voluptate quam quibusdam
                  dolorum, maxime quisquam nobis quasi tempora praesentium.
                </span>
              </div>
            </div>
            <div className={styles.recipient}>
              <div className={styles.message}>
                <div className={styles.messageInfo}>
                  <time dateTime='2024-05-08T23:23:50'>23:50</time>
                </div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime porro facere esse illo quos non natus modi eveniet
                  voluptatibus odio debitis, obcaecati suscipit recusandae
                  labore autem perspiciatis minus aspernatur ipsam.
                </span>
              </div>
            </div>
          </div>
        </div>
        <nav className={styles.nav} title='Навигационная панель чата'>
          <ul className={styles.list + ' list-reset'}>
            <li className={styles.navItem}>
              <button
                type='button'
                className={'btn-reset ' + styles.navBtn}
              >
                <svg
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 24, height: 24, color: 'currentcolor' }}
                >
                  <path
                    fill='currentColor'
                    d='M11 11V3.993A.994.994 0 0 1 12 3c.552 0 1 .445 1 .993V11h7.007c.548 0 .993.444.993 1 0 .552-.445 1-.993 1H13v7.007A.994.994 0 0 1 12 21c-.552 0-1-.445-1-.993V13H3.993A.994.994 0 0 1 3 12c0-.552.445-1 .993-1H11Z'
                  ></path>
                </svg>
              </button>
            </li>
            <li className={styles.navItem}>
              <button type='button' className={'btn-reset ' + styles.navBtn}>
                <svg
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 24, height: 24, color: 'currentcolor' }}
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.318 6h3.4c.446 0 .608.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v12.436c0 .446-.046.608-.134.77a.908.908 0 01-.378.378c-.162.088-.324.134-.77.134H3.282c-.446 0-.607-.046-.77-.134a.908.908 0 01-.378-.378c-.088-.162-.134-.324-.134-.77V7.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h3.4l.882-2.351A1 1 0 018.5 3h7a1 1 0 01.936.649L17.318 6zM12 18a5 5 0 110-10 5 5 0 010 10zm3-5a3 3 0 11-6 0 3 3 0 016 0z'
                    fill='currentColor'
                  />
                </svg>
                <input
                  type='file'
                  name='photo'
                  id='photo'
                  className='input-reset'
                />
              </button>
            </li>
            <li className={styles.navItem}>
              <button type='button' className={'btn-reset ' + styles.navBtn}>
                <Image
                  src='img/fast.svg'
                  className='image'
                  width={24}
                  height={24}
                  alt='Иконка молнии'
                />
              </button>
            </li>
            <li className={styles.navItem} style={{ width: '100%' }}>
              <textarea
                name='message'
                id='message'
                placeholder='Написать сообщение'
                className={'input-reset ' + styles.input}
                maxLength={1000}
                rows={1}
                defaultValue={''}
              />
            </li>
            <li className={styles.navItem}>
              <button type='button' className={'btn-reset ' + styles.navBtn}>
                <svg
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ width: 24, height: 24, color: 'currentcolor' }}
                >
                  <path
                    d='M22 12a1 1 0 0 1-.574.905l-17 8a1 1 0 0 1-1.39-1.168l1.5-5.5a1 1 0 0 1 .605-.67L9.214 12l-4.073-1.567a1 1 0 0 1-.606-.67l-1.5-5.5a1 1 0 0 1 1.39-1.168l17 8A1 1 0 0 1 22 12Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
