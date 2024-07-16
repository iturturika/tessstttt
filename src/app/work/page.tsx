'use client'

import '../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header/header';
import { Info } from '@/components/info/info'
import { Filter } from '@/components/filter/filter'
import Catalog from "@/components/catalog/catalog";
import { Stories } from '@/components/stories/stories'
import { Footer } from '@/components/footer/footer'
import { Hero } from '@/page_component/work/hero/hero'
import { Company } from '@/page_component/work/company/company'
import { COMPANY } from './data/company.data';

export default function Home() {
  return (
    <div className='site-container'>
      <Header fixed={false} />
      <Info title='Работа в Нижнем Новгороде' count={47573} path={false} />
      <div className='site-content'>
        <div>
          <Filter />
          <Footer />
        </div>
        <main className='main pad-main'>
          <Hero margin='0 0 40px' />
          <Company data={COMPANY} margin='0 0 40px' />
          <Stories padding='0 0 50px' />
          <Catalog sectionTitle='Рекомендации для вас' />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}