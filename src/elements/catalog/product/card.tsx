'use client';

import { HandySvg } from 'handy-svg'
import styles from './card.module.scss';
import Image from 'next/image';

interface CardProps {
    link: string;
    imgPath: string;
    imgPathWebp?: string;
    title: string;
    price: number;
    oldPrice?: number;
    address: string;
    description: string;
    delivery: boolean;
    addressDate: string;
    company: string;
    rating: number;
    feedback: number;
  }

export function Card({ link, imgPath, imgPathWebp, title, price, address, description, delivery, addressDate, company, rating, feedback }: CardProps) {
  return (
    <article className={styles.card} title={title}>
      <a href={link} target='_blank' className={styles.link} />
      <div className={styles.content}>
        <div className={styles.picture}>
          <picture>
            <source srcSet={imgPathWebp} type='image/webp' />
            <source srcSet={imgPath} type='image/png' />
            <Image
              src={imgPath}
              className='image'
              width={236}
              height={177}
              alt={title}
            />
          </picture>
          <div className={styles.pictureContent}>
            <Image
              loading='lazy'
              src={imgPath}
              className='image'
              width={115}
              height={86}
              alt={title}
            />
            <Image
              loading='lazy'
              src={imgPath}
              className='image'
              width={115}
              height={86}
              alt={title}
            />
          </div>
        </div>
        <div className={styles.description}>
          <a href={link} target='_blank' className={styles.title}>
          {title}
          </a>
          <div className={styles.price}>
            <span className={styles.priceNum}>{price}</span>
            <div className={`${styles.delivery} ${delivery ? 'is-hidden' : ''}`}>
              <div className={styles.deliveryText}>
                Возможна доставка
              </div>
              <HandySvg src='/img/delivery.svg' />
            </div>
          </div>
          <div className={styles.descriptionText}>40&nbsp;(XS)</div>
          <p className={styles.text}>
            {description}
          </p>
          <p className={styles.text}>
            <i className={styles.dot} style={{ backgroundColor: 'red' }} />
            {address}{' '}
            <HandySvg src='/img/walk.svg' />{' '}
            {addressDate}
          </p>
          <p className={styles.text}>Доставка от 1 дня</p>
          <p className={styles.text}>5 часов назад</p>
          <button type='button' className={'btn-reset ' + styles.favorite}>
          <HandySvg src='/img/like.svg' />
          </button>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.company}>
          <a href={link} target='_blank' className={styles.company}>
            <Image
              src='/img/company.png'
              className='image'
              width={60}
              height={40}
              alt={company}
            />
            <div className={styles.companyTitle}>Салон платьев</div>
            <div className={styles.companyRating}>
              <span>{rating}</span>
              <div className={styles.star}>
                <HandySvg src='/img/star.svg' />
                <HandySvg src='/img/star.svg' />
                <HandySvg src='/img/star.svg' />
                <HandySvg src='/img/star.svg' />
                <HandySvg src='/img/star.svg' />
              </div>
              <span style={{ color: 'var(--grey-color)' }}>{feedback}</span>
            </div>
          </a>
          <div className={styles.companyText}>Надёжный продавец</div>
        </div>
        <div className={styles.contact}>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Показать телефон
          </button>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Написать
          </button>
        </div>
      </div>
    </article>
  );
}
