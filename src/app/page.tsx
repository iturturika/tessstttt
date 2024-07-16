'use client';

import React from 'react';
import { Header } from '@/components/header/header'
import { Stories } from '@/components/stories/stories'
import { Footer } from '@/components/footer/footer';
import Catalog from "@/components/catalog/catalog";
import { Category } from '@/components/category/category'
import { CATEGORY } from './data/category.data';
import "../styles/main.scss";
import { FooterBottom } from '@/components/footer_bottom/footer'

export default function Home() {
  return (
    <div className="site-container">
      <Header />
      <div className="site-content">
        <main className="main">
          <Category data={CATEGORY} more={false} padding='0 0 50px' />
          <Stories />
          <Catalog sectionTitle='Рекомендации для вас' padding='50px 0 0' />
        </main>
        <Footer />
      </div>
          <FooterBottom />
    </div>
  );
}