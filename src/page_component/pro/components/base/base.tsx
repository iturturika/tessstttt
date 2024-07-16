'use client';

import styles from './base.module.scss';

import Image from 'next/image';

interface BaseProps{
    data: Array<{
        title: string;
        img: string;
        text: string;
        link: string;
    }>;
}

export function Base({ data }:BaseProps) {
  return (
    <div className={styles.base}>
      <div className={styles.title}>
        Открывает доступ к основным инструментам
      </div>
      <ul className={styles.list + ' list-reset'}>
        {data.map((item) => (
          <li className={styles.item} key={item.title}>
            <Image
              src={item.img}
              className='image'
              width={64}
              height={64}
              alt={`Иконка ${item.title}`}
            />
            <div className={styles.itemTitle}>{item.title}</div>
            <p className={styles.text}>
                {item.text}
            </p>
            <div className={styles.menu}>
              <a href={item.link} className={styles.link}>
                Подробнее
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
