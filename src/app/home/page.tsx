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
import { Tag } from '@/components/tag/tag'
import { TAG } from './data/tag.data';

export default function Home() {
  return (
    <div className="site-container">
      <Header />
      <div className="site-content">
        <main className="main">
          <Category data={CATEGORY} more={true} />
          <Tag data={TAG} padding='0 0 50px' />
          <Slide padding='0 0 50px' data={SLIDE} />
          <Stories padding='0 0 30px' />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
        <Footer />
      </div>
    </div>
  );
}