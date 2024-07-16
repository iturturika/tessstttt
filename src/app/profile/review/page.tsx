'use client'

import '../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { ReviewUser } from '@/page_component/profile/review/review';

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <Footer />
        <main className='main pad-main'>
          <ReviewUser />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}