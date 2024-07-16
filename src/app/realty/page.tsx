import React from 'react';
import '../../styles/main.scss';

import { Header } from '@/components/header/header';
import { Hero } from '@/page_component/realty/hero/hero';
import { Category } from '@/page_component/realty/category/category'
import { Sale } from '@/components/sale/sale';
import { SALE } from './data/sale.data';
import { Stories } from '@/components/stories/stories'
import Catalog from "@/components/catalog/catalog";
import { Footer } from '@/components/footer/footer';

import Image from 'next/image';

import { CATEGORY } from './data/category.data';

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <Hero title='Недвижимость в Нижнем Новгороде' padding='0 0 30px' map={true}>
          <input
            type='text'
            name='type'
            id='type'
            readOnly
            defaultValue='Квартира'
            size={7}
          />
          <input
            type='text'
            name='payment'
            id='payment'
            readOnly
            defaultValue='Купить'
            size={5}
          />
          <input
            type='text'
            name='condition'
            id='condition'
            readOnly
            defaultValue='Вторичка, новостройки'
          />
          <input
            placeholder='Комнаты'
            type='text'
            name='room'
            id='room'
            readOnly
            size={12}
          />
          <input
            placeholder='Цена'
            type='text'
            name='price'
            id='price'
            readOnly
            size={13}
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
          <Category data={CATEGORY} padding='0 0 70px' />
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
