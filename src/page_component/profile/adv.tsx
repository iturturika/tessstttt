'use client';

import { HandySvg } from 'handy-svg'
import styles from './adv.module.scss';

import Image from 'next/image';

interface AdvProps{
  margin?: string;
}

export function Adv({ margin = '0' }:AdvProps) {
  const handleRemove = () => document.querySelector('.js-adv-close')?.remove();
  return (
    <section className={`${styles.adv} ${'js-adv-close'}`} style={{margin}}>
      <div className={styles.inner}>
        <div className={styles.description}>
          <h2 className={styles.title}>Увеличьте шансы на продажу в 2,5 раза</h2>
          <p className={styles.text}>
            Предложите бесплатную доставку — с ней покупатели найдутся быстрее.
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Включить бесплатную доставку
          </button>
        </div>
        <Image
          src='/img/static/adv.png'
          className='image'
          width={457}
          height={257}
          alt='Картинка Kangaroo Доставки'
        />
        <button
          type='button'
          className={'btn-reset ' + styles.close}
          onClick={handleRemove}
        >
          <HandySvg src='/img/interface/close.svg' width={14} height={14} />
        </button>
      </div>
    </section>
  );
}
