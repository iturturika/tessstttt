'use client';

import { ReactNode } from 'react'
import styles from './address.module.scss';
import Image from 'next/image';

export function Address() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.inner}>
          <div>
            <h1 className={styles.title}>Адреса</h1>
            <p
              className={styles.text}
              style={{
                marginBottom: '10px',
              }}
            >
              Добавьте хотя бы один, чтобы сразу видеть самые быстрые и выгодные
              варианты доставки. 
              <a href='#'>Подробнее</a>
            </p>
            <button
              className={styles.btn + ' btn-reset'}
              style={{
                marginBottom: '50px',
              }}
            >
              Добавить
            </button>
            <ul className={styles.list + ' list-reset'}>
              <li className={styles.item}>
                <Image
                  alt='Иконка кошелька'
                  className='image'
                  height='80'
                  width='80'
                  src='/img/address-1.png'
                  style={{
                    marginBottom: '8px',
                  }}
                />
                <div
                  className={styles.lisTitle}
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  Экономия на доставке
                </div>
                <p className={styles.lisText}>
                  Если добавите несколько адресов, сможем показать, куда дешевле
                  заказать товар
                </p>
              </li>
              <li className={styles.item}>
                <Image
                  alt='Иконка карты'
                  className='image'
                  height='80'
                  width='80'
                  src='/img/address-2.png'
                  style={{
                    marginBottom: '8px',
                  }}
                />
                <div
                  className={styles.lisTitle}
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  Объявления поблизости
                </div>
                <p className={styles.lisText}>
                  Будет проще находить товары, салоны, мастеров и работу рядом с
                  вами
                </p>
              </li>
              <li className={styles.item}>
              <Image
                  alt='Иконка кошелька'
                  className='image'
                  height='80'
                  width='80'
                  src='/img/address-3.png'
                  style={{
                    marginBottom: '8px',
                  }}
                />
                <div
                  className={styles.lisTitle}
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  Данные под защитой
                </div>
                <p className={styles.lisText}>
                  Храним адреса в шифрованном виде и не показываем другим
                  пользователям
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
