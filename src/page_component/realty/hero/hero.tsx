'use client';

import { ReactNode } from 'react'

import styles from './hero.module.scss';

import { HandySvg } from 'handy-svg'
import Image from 'next/image';

interface HeroProps{
    title?: string;
    map?: boolean;
    children?: ReactNode;
    padding?: string;
    count?: string;
    background?: string;
    image?: string;
}

export function Hero({ title = '', map = false, children, count = 'Ничего не найдено!', padding = '0', background = 'linear-gradient(90deg, #e3f7ff 10%, #f4eefe 90%)', image = '/img/static/apartment.png' }:HeroProps) {
  return (
    <section className={styles.hero} style={{padding}}>
      <div className='container'>
        <div className={styles.inner} style={{background}}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            {children}
          </div>
          <div className={styles.menu}>
            <button type='button' className={'btn-reset ' + styles.btn}>
              {count}
            </button>
            <button type='button' className={`${'btn-reset ' + styles.btn} ${map ? '' : 'is-hidden'}`}>
              <HandySvg src='/img/interface/map.svg' width={20} height={20} />
              <span>На карте</span>
            </button>
          </div>
            <Image src={image} width={324} height={242} alt={title} className={styles.wrapper} />
        </div>
      </div>
    </section>
  );
}
