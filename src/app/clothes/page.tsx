'use client'

import '../../styles/main.scss';
import { FooterBottom } from '@/components/footer_bottom/footer';
import { Header } from '@/components/header/header';
import { Info } from '@/components/info/info'
import { PATH } from './data/path.data';
import { Sort } from '@/components/sort/sort'
import { Market } from '@/components/market/market'
import { Filter } from '@/components/filter/filter'
import { Tab } from '@/components/tab/tab'

export default function Home() {
  return (
    <div className='site-container'>
      <Header fixed={false} />
      <Info data={PATH} title='Женская одежда в Нижнем Новгороде' count={224065} />
      <div className='site-content'>
        <div>
          <Filter />
          <Sort />
        </div>
        <main className='main pad-main'>
          <Tab />
          <Market />
        </main>
      </div>
      <FooterBottom />
    </div>
  );
}