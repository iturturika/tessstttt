import React from 'react';
import { Header } from '@/components/header/header'
import { Stories } from '@/components/stories/stories'
import { Footer } from '@/components/footer/footer';
import Catalog from "@/components/catalog/catalog";
import { Category } from '@/components/category/category'
import { CATEGORY } from './data/category.data';
import "../../styles/main.scss";
import { Slide } from '@/components/slide/slide'
import { SLIDE } from './data/slide.data';
import { List } from '@/components/list/list'
import { CARS } from './data/cars.data';
import { Strip } from '@/components/strip/strip'
import { STRIP } from './data/strip.data';
import { Service } from '@/components/service/service'
import { SERVICE } from './data/service.data'

export default function Home() {
  return (
    <div className="site-container">
      <Header />
      <div className="site-content">
        <main className="main">
          <h1 className="page__title">Транспорт и запчасти в Нижнем Новгороде&nbsp;<span>1 996 887</span></h1>
          <Category data={CATEGORY} more={true} />
          <List title='Популярные легковые автомобили' data={CARS} padding='0 0 50px' />
          <Strip data={STRIP} padding='0 0 50px' />
          <Service title='Сервисы' data={SERVICE} padding='0 0 50px' />
          <Stories />
          <Slide padding='50px 0 0' data={SLIDE} />
          <Slide padding='50px 0 0' data={SLIDE} />
          <Slide padding='50px 0 50px 0' data={SLIDE} />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
        <Footer />
      </div>
    </div>
  );
}