'use client'

import React, { useState } from 'react';
import '../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { Favorite } from '@/page_component/profile/favorite/favorite'

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <Footer />
        <main className='main pad-main'>
          <Favorite />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}