import React from 'react';
import { Header } from '@/components/header/header'
import { Stories } from '@/components/stories/stories'
import { Footer } from '@/components/footer/footer';
import { Category } from '@/components/category/category'
import { CATEGORY } from './data/category.data';
import "../../styles/main.scss";
import { Slide } from '@/components/slide/slide'
import { SLIDE } from './data/slide.data';
import { Sale } from '@/components/sale/sale'
import { SALE } from './data/sale.data';
import Catalog from "@/components/catalog/catalog";

export default function Home() {
  return (
    <div className="site-container">
      <Header />
      <div className="site-content">
        <main className="main">
          <Category data={CATEGORY} more={true} />
          <Slide padding='0 0 50px' data={SLIDE} />
          <Slide padding='0 0 50px' data={SLIDE} />
          <Stories />
          <Sale title='Новый iPhone от продавцов с высоким рейтингом' data={SALE} padding='50px 0 40px' linkMore='#' />
          <Sale title='Игровые приставки от продавцов с высоким рейтингом' data={SALE} padding='0 0 40px' linkMore='#' />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
        <Footer />
      </div>
    </div>
  );
}