'use client'

import '../../styles/main.scss';

import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header/header';
import { Info } from '@/components/info/info'
import { PATH } from './data/path.data';
import { Review } from '@/page_component/user/components/review/review'
import { Static } from '@/page_component/user/components/static/static'
import { Hero } from '@/page_component/review/hero/hero'

export default function Home() {
  return (
    <div className='site-container'>
      <Header fixed={false} />
      <Info data={PATH} title='' count={224065} />
      <Hero margin='10px 0 0' />
      <div className='site-content'>
        <Static />
        <main className='main pad-main'>
          <Review padding='0' />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}