import React from 'react';
import '../../styles/main.scss';

import { Header } from '@/components/header/header';
import { Hero } from '@/page_component/realty/hero/hero';
import { Sale } from '@/components/sale/sale';
import { SALE } from './data/sale.data';
import { Stories } from '@/components/stories/stories'
import Catalog from "@/components/catalog/catalog";
import { Footer } from '@/components/footer/footer';

import Image from 'next/image';

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <Hero title='Путешествия' padding='0 0 30px' map={false} background='linear-gradient(270deg, rgb(207, 221, 255) 0%, rgb(243, 237, 254) 100%)' image='/img/static/rent.png'>
          <input
            type='text'
            name='region'
            id='region'
            readOnly
            defaultValue='Нижний Новгород'
            size={20}
          />
          <input
            type='text'
            name='date'
            id='date'
            readOnly
            placeholder='Даты'
            size={10}
          />
          <input
            type='text'
            name='guest'
            id='guest'
            readOnly
            defaultValue='Гости'
            size={10}
          />
          <input
            type='text'
            name='apartment'
            id='apartment'
            readOnly
            defaultValue={'Квартира'}
            size={10}
          />
        <button
          type='button'
        >
          <Image
            src='/img/interface/filter.svg'
            className='image'
            width={20}
            height={20}
            alt='Иконка фильтра'
          />
        </button>
      </Hero>
      <div className='site-content'>
        <main className='main'>
          <Sale title='Жильё для путешествий' subtitle='Выбирайте проверенные квартиры с онлайн-бронированием.' data={SALE} padding='0 0 75px' linkMore='#' />
          <Stories padding='0 0 75px' />
          <Sale title='Жильё для путешествий' subtitle='Выбирайте проверенные квартиры с онлайн-бронированием.' data={SALE} padding='0 0 75px' linkMore='#' />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
        <Footer />
      </div>
    </div>
  );
}
