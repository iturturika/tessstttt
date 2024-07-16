'use client';

import React from 'react';
import { Header } from '@/components/header/header';
import '../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Goods } from '@/page_component/goods/goods';
import { Navbar } from '@/page_component/goods/components/navbar/navbar';

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <main className='main' style={{ maxWidth: 'calc(100% - 420px)' }}>
          <Goods />
        </main>
        <Navbar />
      </div>
      <FooterBottom />
    </div>
  );
}
