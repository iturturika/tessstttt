'use client';

import Image from 'next/image';
import styles from './tag.module.scss';
import { HandySvg } from 'handy-svg';

interface TagProps{
    padding?: string,
    data: Array<{
        id: number,
        title: string,
        image: string,
        lists: Array<{
            id: number,
            link: string,
            title: string,
        }>
    }>
}

export function Tag({ padding, data }:TagProps) {
  return (
    <section className={styles.tag}>
      <div className='container'>
        <div className={styles.inner} style={{padding: `${padding}`}}>
          <ul className={styles.list + ' list-reset'}>
            {data.map((item) => (
            <li className={styles.item} key={item.id}>
              <a className={styles.title} href='#'>{item.title}</a>
              <Image
                alt={item.title}
                className='image'
                height='172'
                loading='lazy'
                src={item.image}
                width='318'
              />
              <ul className={styles.menu + ' list-reset'}>
                {item.lists.map((list) =>(
                <li className={styles.menuItem} key={list.id}>
                  <a className={styles.link} href={list.link}>
                    {list.title}
                  </a>
                </li>
                ))}
                <li className={styles.menuItem}>
                  <a className={styles.link} href="#">
                    Еще
                    <HandySvg src='/img/arrow-3.svg' width='6' height='16' />
                  </a>
                </li>
              </ul>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
