import React from 'react';
import { Header } from '@/components/header/header'
import { Stories } from '@/components/stories/stories'
import { Footer } from '@/components/footer/footer';
import Catalog from "@/components/catalog/catalog";
import { Category } from '@/components/category/category';
import { CATEGORY } from './data/category.data';
import "../../styles/main.scss";
import { Slide } from '@/components/slide/slide'
import { SLIDE } from './data/slide.data';
import { Sale } from '@/components/sale/sale'
import { SALE } from './data/sale.data';
import SearchSectionModule from "@/components/search-section/search-section.module";

export default function Home() {
    return (
        <div className="site-container">
            <Header />
            <div className="site-content">
                <main className="main">
                    <Category data={CATEGORY} more={true} />
                    <Sale title='Герои распродажи' data={SALE} padding='50px 0 40px' linkMore='#' />
                    <Slide padding='0 0 50px' data={SLIDE} />
                    <Slide padding='0 0 50px' data={SLIDE} />
                    <SearchSectionModule />
                    <div className={'margin-top-40'}>
                        <Stories />
                    </div>
                    <Catalog sectionTitle='Рекомендации для вас' />
                </main>
                <Footer />
            </div>
        </div>
    );
}