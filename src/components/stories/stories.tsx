'use client';

import React, { useRef, useState } from 'react';
import { Card } from '@/elements/stories/card/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './stories.module.scss';
import { STORIES } from './stories.data';
import 'swiper/css';
import 'swiper/css/navigation';

interface StoriesProps{
  padding?: string,
}

export function Stories({ padding }:StoriesProps) {
  return (
    <section className={styles.stories}>
      <div className='container'>
        <div className={styles.inner} style={{padding: `${padding}`}}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={3}
            allowTouchMove={false}
            speed={0}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'is-hidden',
            }}
          >
            {STORIES.map((group) => (
              <SwiperSlide key={group.id} className={styles.slide}>
                {group.cards.map((card) => (
                  <Card
                    key={card.id}
                    link={card.link}
                    imgPath={card.imgPath}
                    title={card.title}
                    condition={card.condition}
                  />
                ))}
              </SwiperSlide>
            ))}
            <div className={'swiper-button-next ' + styles.next}></div>
            <div className={'swiper-button-prev is-hidden ' + styles.prev}></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
