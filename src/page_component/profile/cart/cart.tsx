'use client';
import { Checkbox } from '@/elements/checkbox/checkbox';
import styles from './cart.module.scss';
import Image from 'next/image';
import { HandySvg } from 'handy-svg';

export function Cart() {
  return (
    <section className={styles.cart}>
      <div className='container'>
        <div className={styles.inner}>
          <h1 className={styles.title} style={{ marginBottom: 20 }}>
            Корзина&nbsp;<span>3</span>
          </h1>
          <div className={styles.container}>
            <div className={styles.content}>
              <nav className={styles.menu}>
                <Checkbox id='all' value='Выбрать все' />
                <button type='button' className={'btn-reset ' + styles.menuBtn}>
                  Удалить&nbsp;<span>3</span>
                </button>
              </nav>
              <ul className={styles.list + ' list-reset'}>
                <li className={styles.item}>
                  <div className={styles.store}>
                    <div className={styles.head}>
                      <Checkbox id='store2' value='' />
                      <a href='#'>App Store</a>
                      <HandySvg src='/img/star.svg' width='16' height='16' />
                      <span className={styles.review}>4,0</span>
                      <span className={styles.num}>4</span>
                    </div>
                    <a href='#' className={styles.link}>
                      Скидка продавца применилась
                    </a>
                  </div>
                  <div className={styles.product}>
                    <div className={styles.productItem}>
                      <Checkbox id='product1' value='' />
                      <a href='#'>
                        <Image
                          src='/img/product.png'
                          className='image'
                          width={112}
                          height={112}
                          alt='iPhone 11 Pro Max, 256 ГБ'
                        />
                      </a>
                      <div className={styles.description}>
                        <a className={styles.producTitle} href='#'>
                          iPhone 11 Pro Max, 256 ГБ
                        </a>
                        <span className={styles.property}>Чёрный</span>
                        <a href='#' className={styles.productLink}>
                          Купить с доставкой
                        </a>
                      </div>
                    </div>
                    <div className={styles.productItem}>
                      <div className={styles.value}>
                        <span className={styles.price}>17 990 ₽</span>
                        <div className={styles.valueMenu}>
                          <button
                            type='button'
                            className={'btn-reset ' + styles.valueBtn}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M15.7 11.7v-1.4H4.3v1.4h11.4Z'
                                fill='currentColor'
                              />
                            </svg>
                          </button>
                          <span>1</span>
                          <button
                            type='button'
                            className={'btn-reset ' + styles.valueBtn}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M9.3 11.7v5h1.4v-5h5v-1.4h-5v-5H9.3v5h-5v1.4h5Z'
                                fill='currentColor'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productItem}>
                      <nav
                        className={styles.nav}
                        title='Навигационная панель для продукта'
                      >
                        <ul className={styles.navList + ' list-reset'}>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M2.5 8v6a4 4 0 0 0 4 4h.19l-.42 2.54a.95.95 0 0 0 1.52.91L11.87 18h5.63a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-11a4 4 0 0 0-4 4Z' />
                              </svg>
                            </button>
                          </li>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M7.71 3c1.78 0 3.34.87 4.29 2.21A5.22 5.22 0 0 1 16.29 3a5.73 5.73 0 0 1 4.1 9.73l-7.72 7.61a.95.95 0 0 1-1.34 0l-7.72-7.62A5.73 5.73 0 0 1 7.71 3Z' />
                              </svg>
                            </button>
                          </li>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M17 3h3c.6 0 1 .4 1 1v2H3V4c0-.6.4-1 1-1h3l.7-1.4c.2-.4.5-.6.9-.6h6.8c.4 0 .7.3.9.6L17 3ZM5 8l.9 13.1c.1.5.5.9 1.1.9h10.1c.5 0 1-.4 1-.9L19 8H5Z' />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </li>
                <li className={styles.item}>
                  <div className={styles.store}>
                    <div className={styles.head}>
                      <Checkbox id='store2' value='' />
                      <a href='#'>App Store</a>
                      <HandySvg src='/img/star.svg' width='16' height='16' />
                      <span className={styles.review}>4,0</span>
                      <span className={styles.num}>4</span>
                    </div>
                    <a href='#' className={styles.link}>
                      Скидка продавца применилась
                    </a>
                  </div>
                  <div className={styles.product}>
                    <div className={styles.productItem}>
                      <Checkbox id='product1' value='' />
                      <a href='#'>
                        <Image
                          src='/img/product.png'
                          className='image'
                          width={112}
                          height={112}
                          alt='iPhone 11 Pro Max, 256 ГБ'
                        />
                      </a>
                      <div className={styles.description}>
                        <a className={styles.producTitle} href='#'>
                          iPhone 11 Pro Max, 256 ГБ
                        </a>
                        <span className={styles.property}>Чёрный</span>
                        <a href='#' className={styles.productLink}>
                          Купить с доставкой
                        </a>
                      </div>
                    </div>
                    <div className={styles.productItem}>
                      <div className={styles.value}>
                        <span className={styles.price}>17 990 ₽</span>
                        <div className={styles.valueMenu}>
                          <button
                            type='button'
                            className={'btn-reset ' + styles.valueBtn}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M15.7 11.7v-1.4H4.3v1.4h11.4Z'
                                fill='currentColor'
                              />
                            </svg>
                          </button>
                          <span>1</span>
                          <button
                            type='button'
                            className={'btn-reset ' + styles.valueBtn}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M9.3 11.7v5h1.4v-5h5v-1.4h-5v-5H9.3v5h-5v1.4h5Z'
                                fill='currentColor'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productItem}>
                      <nav
                        className={styles.nav}
                        title='Навигационная панель для продукта'
                      >
                        <ul className={styles.navList + ' list-reset'}>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M2.5 8v6a4 4 0 0 0 4 4h.19l-.42 2.54a.95.95 0 0 0 1.52.91L11.87 18h5.63a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-11a4 4 0 0 0-4 4Z' />
                              </svg>
                            </button>
                          </li>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M7.71 3c1.78 0 3.34.87 4.29 2.21A5.22 5.22 0 0 1 16.29 3a5.73 5.73 0 0 1 4.1 9.73l-7.72 7.61a.95.95 0 0 1-1.34 0l-7.72-7.62A5.73 5.73 0 0 1 7.71 3Z' />
                              </svg>
                            </button>
                          </li>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M17 3h3c.6 0 1 .4 1 1v2H3V4c0-.6.4-1 1-1h3l.7-1.4c.2-.4.5-.6.9-.6h6.8c.4 0 .7.3.9.6L17 3ZM5 8l.9 13.1c.1.5.5.9 1.1.9h10.1c.5 0 1-.4 1-.9L19 8H5Z' />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <div className={styles.productItem}>
                      <Checkbox id='select3' value='' />
                      <a href='#'>
                        <Image
                          src='/img/product.png'
                          className='image'
                          width={112}
                          height={112}
                          alt='iPhone 11 Pro Max, 256 ГБ'
                        />
                      </a>
                      <div className={styles.description}>
                        <a className={styles.producTitle} href='#'>
                          iPhone 11 Pro Max, 256 ГБ
                        </a>
                        <span className={styles.property}>Чёрный</span>
                        <a href='#' className={styles.productLink}>
                          Купить с доставкой
                        </a>
                      </div>
                    </div>
                    <div className={styles.productItem}>
                      <div className={styles.value}>
                        <span className={styles.price}>17 990 ₽</span>
                        <div className={styles.valueMenu}>
                          <button
                            type='button'
                            className={'btn-reset ' + styles.valueBtn}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M15.7 11.7v-1.4H4.3v1.4h11.4Z'
                                fill='currentColor'
                              />
                            </svg>
                          </button>
                          <span>1</span>
                          <button
                            type='button'
                            className={'btn-reset ' + styles.valueBtn}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={20}
                              height={20}
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M9.3 11.7v5h1.4v-5h5v-1.4h-5v-5H9.3v5h-5v1.4h5Z'
                                fill='currentColor'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productItem}>
                      <nav
                        className={styles.nav}
                        title='Навигационная панель для продукта'
                      >
                        <ul className={styles.navList + ' list-reset'}>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M2.5 8v6a4 4 0 0 0 4 4h.19l-.42 2.54a.95.95 0 0 0 1.52.91L11.87 18h5.63a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-11a4 4 0 0 0-4 4Z' />
                              </svg>
                            </button>
                          </li>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M7.71 3c1.78 0 3.34.87 4.29 2.21A5.22 5.22 0 0 1 16.29 3a5.73 5.73 0 0 1 4.1 9.73l-7.72 7.61a.95.95 0 0 1-1.34 0l-7.72-7.62A5.73 5.73 0 0 1 7.71 3Z' />
                              </svg>
                            </button>
                          </li>
                          <li className={styles.navItem}>
                            <button
                              type='button'
                              className={'btn-reset ' + styles.navBtn}
                            >
                              <svg viewBox='0 0 24 24'>
                                <path d='M17 3h3c.6 0 1 .4 1 1v2H3V4c0-.6.4-1 1-1h3l.7-1.4c.2-.4.5-.6.9-.6h6.8c.4 0 .7.3.9.6L17 3ZM5 8l.9 13.1c.1.5.5.9 1.1.9h10.1c.5 0 1-.4 1-.9L19 8H5Z' />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <article className={styles.cartDescription}>
              <div className={styles.cartDescriptionItem}>
                <span>3 товара</span>
                <span className={styles.border} />
                <span>61 690₽</span>
              </div>
              <div className={styles.cartDescriptionItem}>
                <span>Скидка на товары</span>
                <span className={styles.border} />
                <span style={{ color: 'var(--hover-color)' }}>8 740₽</span>
              </div>
              <div className={styles.cartDescriptionItem}>
                <span style={{ fontWeight: 800 }}>Цена без доставки</span>
                <span className={styles.border} />
                <span style={{ fontWeight: 800 }}>52 950 ₽</span>
              </div>
              <button
                type='button'
                className={'btn-reset ' + styles.cartDescriptionBtn}
              >
                Оформить доставку
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
