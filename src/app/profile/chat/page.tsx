'use client'

import React, { useState } from 'react';
import '../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { Chat } from '@/page_component/profile/chat/chat'

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <Footer />
        <main className='main pad-main'>
          <Chat />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}