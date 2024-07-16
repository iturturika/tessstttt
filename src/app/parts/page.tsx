'use client'

import '../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header/header';
import { Info } from '@/components/info/info'
import { Filter } from '@/components/filter/filter'
import { Footer } from '@/components/footer/footer'
import Catalog from "@/components/catalog/catalog";
import { Stories } from '@/components/stories/stories'
import { Tag } from '@/components/tag/tag'
import { TAG } from './data/tag.data';
import { Hero } from '@/page_component/parts/hero/hero'

export default function Home() {
  return (
    <div className='site-container'>
      <Header fixed={false} />
      <Info title='Запчасти и аксессуары для машин и мотоциклов в Нижнем Новгороде' count={1682460} path={false} />
      <div className='site-content'>
        <div>
          <Filter />
          <Footer />
        </div>
        <main className='main pad-main'>
          <Hero margin='0 0 50px' />
          <Stories padding='0 0 50px' />
          <Tag data={TAG} padding='0 0 50px' />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}