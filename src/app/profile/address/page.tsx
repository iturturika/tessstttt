'use client'

import React, { useState } from 'react';
import '../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Modal } from '@/elements/modal/modal';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { Address } from '@/page_component/profile/address/address';
import { AddressModal } from '@/page_component/profile/address/modal/modal';

export default function Home() {
  return (
    <div className='site-container'>
      <Header />
      <div className='site-content'>
        <Footer />
        <main className='main pad-main'>
          <Address />
          <Modal condition={true}>
            <AddressModal />
          </Modal>
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}