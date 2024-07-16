'use client';

import { HandySvg } from 'handy-svg'
import styles from './active.module.scss';

import Image from 'next/image';

export function Active() {
  return (
    <div className={styles.active}>
      <p className={styles.text}>
        Все&nbsp;активные&nbsp;объявления&nbsp;<span>1</span>
      </p>
      <ul className={styles.list + ' list-reset'}>
        <li className={styles.item}>
          <article className={styles.object}>
            <div className={styles.objectItem}>
              <div className={styles.picture}>
                <a href='#'>
                  <picture>
                    <source srcSet='img/product.png' type='image/jpeg' />
                    <source srcSet='img/product.webp' type='image/webp' />
                    <Image
                      src='/img/product.png'
                      className='image'
                      width={230}
                      height={172}
                      alt='Картинка Объявления'
                    />
                  </picture>
                </a>
              </div>
              <div className={styles.description}>
                <a href='#' className={styles.link}>
                  Объявления
                </a>
                <span className={styles.price}>10 000 ₽</span>
                <span className={styles.num}>
                  <span>1</span> шт. в наличии
                </span>
                <span className={styles.location}>Москва</span>
              </div>
            </div>
            <div className={styles.objectItem}>
              <div className={styles.dashboard}>
                <ul className={styles.objectList + ' list-reset'}>
                  <li className={styles.objectListItem}>
                    <HandySvg src='/img/interface/time.svg' />
                    <div className={styles.dashboardContent}>
                      <span className={styles.dashboardText}>
                        Осталось 29 дней
                      </span>
                      <div className={styles.progress}>
                        <div
                          className={styles.bar}
                          style={{ width: '50%' }}
                        />
                      </div>
                    </div>
                  </li>
                  <li className={styles.objectListItem}>
                    <HandySvg src='/img/interface/eye.svg' />
                    <a href='#' className={styles.dashboardText}>
                      0
                    </a>
                  </li>
                  <li className={styles.objectListItem}>
                    <HandySvg src='/img/interface/user.svg' />
                    <a href='#' className={styles.dashboardText}>
                      0
                    </a>
                  </li>
                  <li className={styles.objectListItem}>
                    <HandySvg src='/img/interface/like_full.svg' />
                    <a href='#' className={styles.dashboardText}>
                      0
                    </a>
                  </li>
                  <li className={styles.objectListItem}>
                    <HandySvg src='/img/interface/message.svg' /> 
                    <a href='#' className={styles.dashboardText}>
                      0
                    </a>
                  </li>
                </ul>
              </div>
              <nav className={styles.nav} title='Управление объявлением'>
                <ul className={styles.navList + ' list-reset'}>
                  <li className={styles.navItem}>
                    <a href='#' className={styles.navLink}>
                      Поднять просмотры
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <button type='button' className={'btn-reset ' + styles.navBtn}>
                      Рассылка
                    </button>
                    <button
                      type='button'
                      className={'btn-reset ' + styles.navBtn}
                    >
                      <HandySvg src='/img/interface/more.svg' width={16} height={16} /> 
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}
