// components/chat/chat.js

import { useEffect } from 'react';
import styles from './chat.module.scss';
import { Card } from '@/elements/catalog/card/card';
import useListingStore from '@/store/globalListingStore';

export function Chat() {
  const { listings, fetchListings } = useListingStore();

  useEffect(() => {
    fetchListings();
  }, []);

  return (
      <section className={styles.chat}>
        <div className={styles.inner}>
          <div className={styles.title}>Спросите у продавца</div>
          <div className={styles.content}>
          <textarea
              className={'input-reset ' + styles.textarea}
              name='chat'
              id='chat'
              cols={78}
              rows={3}
              defaultValue={'Здравствуйте! '}
          />
            <button type='button' className={'btn-reset ' + styles.send}>
              <svg viewBox='0 0 24 24'>
                <path d='M22 12a1 1 0 0 1-.57.9l-17 8a1 1 0 0 1-1.4-1.16l1.5-5.5a1 1 0 0 1 .61-.67L9.21 12l-4.07-1.57a1 1 0 0 1-.6-.67l-1.5-5.5A1 1 0 0 1 4.43 3.1l17 8a1 1 0 0 1 .57.9Z' />
              </svg>
            </button>
          </div>
          <ul className={styles.list + ' list-reset'}>
            <li>
              <button type='button' className={'btn-reset ' + styles.chatBtn}>
                Ещё продаёте?
              </button>
            </li>
            <li>
              <button type='button' className={'btn-reset ' + styles.chatBtn}>
                Торг уместен?
              </button>
            </li>
            <li>
              <button type='button' className={'btn-reset ' + styles.chatBtn}>
                Отправите Kangaroo Доставкой?
              </button>
            </li>
            <li>
              <button type='button' className={'btn-reset ' + styles.chatBtn}>
                Когда можно посмотреть?
              </button>
            </li>
          </ul>
          <div className={styles.info}>
            <p className={styles.text}>
              <span>№ 3501734677</span>·<span>23 апреля в 12:23</span>·
              <span>1502 просмотра (+0 сегодня)</span>
            </p>
            <button type='button' className={'btn-reset ' + styles.btn}>
              Пожаловатся
            </button>
          </div>
          <details>
            <summary>
              Похожие объявления{' '}
              <svg viewBox='0 0 24 24' width={20} height={20} style={{ transform: 'rotate(-90deg)' }}>
                <path
                    d='M15.5 6 10 12l5.5 6'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.6'
                />
              </svg>
            </summary>
            <ul className={styles.chatList + ' list-reset'}>
              {listings.map((listing) => (
                  <li key={listing.id}>
                    <Card
                        link='#'
                        imgPath='/img/no-image.jpg'
                        title={listing.title}
                        price={listing.price}
                        oldPrice={listing.oldPrice}
                        address='Краснодар'
                        date='Неделю назад'
                    />
                  </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
  );
}
