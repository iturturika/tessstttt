'use client';

import styles from './profile.module.scss';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

import { Card } from '@/elements/catalog/card/card';

export function Profile() {
  return (
    <div className={styles.profile}>
      <ul className={styles.list + ' list-reset'}>
        <li className={styles.item}>
          <div className={styles.user}>
            <Image
              src='/img/user-2.png'
              className='image'
              width={60}
              height={60}
              alt='Пользователь'
            />
            <div className={styles.description}>
              <p className={styles.name}>AppSail</p>
              <span className={styles.num}>
                <span>4</span> объявления
              </span>
            </div>
          </div>
          <Swiper
            className={styles.swiper}
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            speed={0}
            modules={[FreeMode]}
          >
            <SwiperSlide>
              <Card
                link='#'
                imgPath='/img/product.png'
                title='оБъявление'
                price={19999}
                oldPrice={22000}
                address='Краснодар'
                date='Неделю назад'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                link='#'
                imgPath='/img/product.png'
                title='оБъявление'
                price={19999}
                oldPrice={22000}
                address='Краснодар'
                date='Неделю назад'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                link='#'
                imgPath='/img/product.png'
                title='оБъявление'
                price={19999}
                oldPrice={22000}
                address='Краснодар'
                date='Неделю назад'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                link='#'
                imgPath='/img/product.png'
                title='оБъявление'
                price={19999}
                oldPrice={22000}
                address='Краснодар'
                date='Неделю назад'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                link='#'
                imgPath='/img/product.png'
                title='оБъявление'
                price={19999}
                oldPrice={22000}
                address='Краснодар'
                date='Неделю назад'
              />
            </SwiperSlide>
          </Swiper>
        </li>
      </ul>
    </div>
  );
}
