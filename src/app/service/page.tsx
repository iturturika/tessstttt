import React from 'react';

import "../../styles/main.scss";

import { Header } from '@/components/header/header'
import { Stories } from '@/components/stories/stories'
import { Footer } from '@/components/footer/footer';
import Catalog from "@/components/catalog/catalog";
import { Category } from '@/components/category/category'
import { CATEGORY } from './data/category.data';
import { Search } from '@/page_component/service/search/search'
import { FooterBottom } from '@/components/footer_bottom/footer'

export default function Home() {
  return (
    <div className="site-container">
      <Header />
      <div className="site-content">
        <main className="main">
          <Category data={CATEGORY} more={false} padding='0 0 50px' />
          <Search margin='0 0 50px' />
          <Stories padding='0 0 70px' />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
        <Footer />
      </div>
      <FooterBottom />
    </div>
  );
}