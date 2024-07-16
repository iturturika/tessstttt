'use client';

import styles from './hero.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HandySvg } from 'handy-svg'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.path}>
          <a href='#'>Главная</a> &gt; <a href='#'>Электроника</a> &gt;
          <a href='#'>Телефоны</a> &gt; <a href='#'>Мобильные телефоны</a> &gt;
          <a href='#'>Apple</a>
        </span>
        <h1 className={styles.title}>iPhone 15 Pro, 256 гб SIM+esim</h1>
        <Swiper
          className={styles.swiper}
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
        >
          <SwiperSlide className={styles.slide}>
            <Image
              src='/img/item.png'
              className={styles.image + ' image'}
              alt='iPhone 15 Pro, 256 гб SIM+esim'
              width={360}
              height={480}
            />
            <Image
              src='/img/item.png'
              className={styles.wrapper + ' image'}
              alt='iPhone 15 Pro, 256 гб SIM+esim 3'
              width={873}
              height={480}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src='/img/item-2.png'
              className={styles.image + ' image'}
              alt='iPhone 15 Pro, 256 гб SIM+esim'
              width={360}
              height={480}
            />/
            <Image
              src='/img/item-2.png'
              className={styles.wrapper + ' image'}
              alt='iPhone 15 Pro, 256 гб SIM+esim 3'
              width={873}
              height={480}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Image
              src='/img/item-3.png'
              className={styles.image + ' image'}
              alt='iPhone 15 Pro, 256 гб SIM+esim'
              width={360}
              height={480}
            />
            <Image
              src='/img/item-3.png'
              className={styles.wrapper + ' image'}
              alt='iPhone 15 Pro, 256 гб SIM+esim 3'
              width={873}
              height={480}
            />
          </SwiperSlide>
        </Swiper>
        <div className={styles.images}>
          <div className={styles.item + ' ' + styles.active}>
            <Image
              src='/img/item.png'
              className={styles.image + ' image'}
              width={75}
              height={55}
              alt='iPhone 15 Pro, 256 гб SIM+esim'
            />
          </div>
          <div className={styles.item}>
            <Image
              loading='lazy'
              src='/img/item-2.png'
              className={styles.image + ' image'}
              width={75}
              height={55}
              alt='iPhone 15 Pro, 256 гб SIM+esim 2'
            />
          </div>
          <div className={styles.item}>
            <Image
              loading='lazy'
              src='/img/item-3.png'
              className={styles.image + ' image'}
              width={75}
              height={55}
              alt='iPhone 15 Pro, 256 гб SIM+esim 3'
            />
          </div>
        </div>
        <button
          type='button'
          className={'btn-reset ' + styles.btn}
        >
          <Image
            src='/img/fire.png'
            className={styles.image + ' image'}
            width={48}
            height={48}
            alt='Зеленый огонь'
          />
          <div className={styles.content}>
            <span className={styles.btnTitle}>Рыночная цена</span>
            <span className={styles.btnText}>Независимая оценка Kangaroo</span>
          </div>
          <HandySvg src='/img/arrow-3.svg' />
        </button>
      </div>
    </section>
  );
}
