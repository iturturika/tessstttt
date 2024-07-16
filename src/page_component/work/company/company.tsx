'use client';

import styles from './company.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';

interface CompanyProps {
  data?: Array<{
    title: string;
    link: string;
    image: string;
  }>;
  margin?: string;
}

export function Company({ data, margin = '0' }: CompanyProps) {
  return (
    <section className={styles.company} style={{margin}}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.title}>
            Ищут сотрудников
          </div>
          <Swiper
            className={styles.swiper}
            slidesPerView={10}
            spaceBetween={0}
            freeMode={true}
            speed={0}
            modules={[FreeMode]}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.title}>
                <a href={item.link} className={styles.link}>
                  <Image src={item.image} alt={item.title} width={54} height={54} />
                  <span>{item.title}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
