'use client'

import '../../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { Review } from '@/page_component/user/components/review/review'
import { Dashboard } from '@/page_component/user/components/dashboard/dashboard'

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <Footer />
        <main className='main pad-main'>
          <Dashboard />
          <Review />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}