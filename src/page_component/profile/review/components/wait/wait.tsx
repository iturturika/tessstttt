'use client';

import { HandySvg } from 'handy-svg'
import styles from './wait.module.scss';

import Image from 'next/image';

export function Wait() {
  return (
    <div className={styles.wait}>
      <p className={styles.text}>
        Оцените продавцов, с которыми недавно общались.
      </p>
      <ul className={styles.list + ' list-reset'}>
        <li className={styles.item}>
          <div className={styles.description}>
            <div className={styles.picture}>
              <a href='#'>
                <Image
                  src='/img/product.png'
                  className='image'
                  width={72}
                  height={54}
                  alt='Картинка продукта'
                />
              </a>
              <a href='#sdfsdfsdf'>
                <Image
                  src='/img/user-2.png'
                  className='image'
                  width={24}
                  height={24}
                  alt='Пользователь'
                />
              </a>
            </div>
            <div>
              <a href='#' className={styles.user}>
                Леонид
              </a>
              <p className={styles.text}>iPhone 11 Pro Max, 256 ГБ</p>
              <p className={styles.text}>21 300 ₽</p>
            </div>
          </div>
          <div className={styles.star}>
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
          </div>
          <button type='button' className={'btn-reset ' + styles.btn}>
            <svg
              width={12}
              height={12}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M.24 11.76c.32.32.837.32 1.157 0L6 7.157l4.603 4.603a.818.818 0 001.157-1.157L7.157 6l4.603-4.603A.818.818 0 0010.603.24L6 4.843 1.397.24A.818.818 0 10.24 1.397L4.843 6 .24 10.603a.818.818 0 000 1.157z'
                fill='#A3A3A3'
              />
            </svg>
          </button>
        </li>
        <li className={styles.item}>
          <div className={styles.description}>
            <div className={styles.picture}>
              <a href='#'>
                <Image
                  src='/img/product.png'
                  className='image'
                  width={72}
                  height={54}
                  alt='Картинка продукта'
                />
              </a>
              <a href='#'>
                <Image
                  src='/img/user-2.png'
                  className='image'
                  width={24}
                  height={24}
                  alt='Пользователь'
                />
              </a>
            </div>
            <div>
              <a href='#' className={styles.user}>
                Леонид
              </a>
              <p className={styles.text}>iPhone 11 Pro Max, 256 ГБ</p>
              <p className={styles.text}>21 300 ₽</p>
            </div>
          </div>
          <div className={styles.star}>
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
          </div>
          <button type='button' className={'btn-reset ' + styles.btn}>
            <svg
              width={12}
              height={12}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M.24 11.76c.32.32.837.32 1.157 0L6 7.157l4.603 4.603a.818.818 0 001.157-1.157L7.157 6l4.603-4.603A.818.818 0 0010.603.24L6 4.843 1.397.24A.818.818 0 10.24 1.397L4.843 6 .24 10.603a.818.818 0 000 1.157z'
                fill='#A3A3A3'
              />
            </svg>
          </button>
        </li>
        <li className={styles.item}>
          <div className={styles.description}>
            <div className={styles.picture}>
              <a href='#'>
                <Image
                  src='/img/product.png'
                  className='image'
                  width={72}
                  height={54}
                  alt='Картинка продукта'
                />
              </a>
              <a href='#'>
                <Image
                  src='/img/user-2.png'
                  className='image'
                  width={24}
                  height={24}
                  alt='Пользователь'
                />
              </a>
            </div>
            <div>
              <a href='#' className={styles.user}>
                Леонид
              </a>
              <p className={styles.text}>iPhone 11 Pro Max, 256 ГБ</p>
              <p className={styles.text}>21 300 ₽</p>
            </div>
          </div>
          <div className={styles.star}>
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
            <HandySvg src='/img/star.svg' width={36} height={36} />
          </div>
          <button type='button' className={'btn-reset ' + styles.btn}>
            <svg
              width={12}
              height={12}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M.24 11.76c.32.32.837.32 1.157 0L6 7.157l4.603 4.603a.818.818 0 001.157-1.157L7.157 6l4.603-4.603A.818.818 0 0010.603.24L6 4.843 1.397.24A.818.818 0 10.24 1.397L4.843 6 .24 10.603a.818.818 0 000 1.157z'
                fill='#A3A3A3'
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
