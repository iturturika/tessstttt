'use client';

import styles from './popular.module.scss';
import { Card } from '@/elements/catalog/card/card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

export function Popular() {
  return (
    <section className={styles.popular}>
      <div className='container'>
        <div className={styles.inner}>
            <h2 className={styles.title}>Популярное</h2>
          <Swiper
            className={styles.swiper}
            slidesPerView={3.5}
            spaceBetween={0}
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
        </div>
      </div>
    </section>
  );
}
