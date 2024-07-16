'use client'

import React, { useState } from 'react';
import '../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Cart } from '@/page_component/profile/cart/cart'

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
        <main className='main pad-main'>
          <Cart />
        </main>
      <FooterBottom />
    </div>
  );
}