'use client'

import '../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { Adv } from '@/page_component/profile/adv'
import { Ads } from '@/page_component/profile/ads'

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <Footer />
        <main className='main pad-main'>
          <Adv margin='0 0 50px' />
          <Ads />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}