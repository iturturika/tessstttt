'use client'

import '../../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header_mini/header';
import { Footer } from '@/components/footer/footer';
import { Settings } from '@/components/settings/settings'

export default function Home() {
    return (
        <div className='site-container'>
            <Header />
            <div className='site-content'>
                <Footer />
                <main className='main pad-main'>
                    <Settings />
                </main>
            </div>
            <FooterBottom />
        </div>
    );
}