'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@/elements/switch/switch';
import styles from './tab.module.scss';
import Image from 'next/image';
import { HandySvg } from 'handy-svg';

export function Tab() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLevel =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsFixed(scrollLevel >= 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={`${styles.tab} ${isFixed ? styles.fixed : ''}`}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.menu}>
            <div className={styles.type}>
              <button
                type='button'
                className={'btn-reset ' + styles.typeBtn}
                aria-label='Поменять тип карточек'
              />
              <button
                type='button'
                className={'btn-reset ' + styles.typeBtn}
                aria-label='Поменять тип карточек'
              />
              <button
                type='button'
                className={'btn-reset ' + styles.typeBtn}
                aria-label='Поменять тип карточек'
              />
            </div>
            <button type='button' className={'btn-reset ' + styles.btn}>
              <Image
                src='/img/sort.svg'
                className='image'
                width={16}
                height={16}
                alt='Иконка'
              />
              <span> Сортировка </span>
            </button>
            <div className={styles.switch}>
              <span className={styles.text}>Сначала из Нижнего Новгорода</span>
              <Switch round={true} />
            </div>
          </div>
          <button type='button' className={'btn-reset ' + styles.favorite}>
            <HandySvg src='/img/like.svg' />
            <span> Сохранить поиск </span>
          </button>
        </div>
      </div>
    </section>
  );
}
