'use client';

import React from 'react';
import styles from './category.module.scss';
import { HandySvg } from 'handy-svg';

interface CategoryProps {
  data: Array<{
    image: string;
    link: string;
    title: string;
    row: number;
    column: string;
    size: string,
    textSize: string,
  }>;
  padding?: string,
  more?: boolean,
}

export function Category({ data, more, padding }: CategoryProps) {
    if (more){
        var moreClass = '';
    } else{
        var moreClass = ' is-hidden';
    }
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.inner} style={{padding: `${padding}`}}>
          <ul className={styles.list + ' list-reset'}>
            {data.map((item, index) => (
              <li
                key={index}
                className={styles.item}
                style={{
                  backgroundImage: `url(${item.image})`,
                  gridColumn: `${item.column}`,
                  gridRow: `${item.row}`,
                  backgroundSize: `${item.size}`
                }}
              >
                <a className={styles.link} href={item.link}>
                  <span style={{width: `${item.textSize}`}}>{item.title}</span>
                </a>
              </li>
            ))}
            <li className={styles.item + moreClass} style={{gridColumn: 'span 2'}}>
              <a className={styles.link} href='#'>
                <span className={styles.more}>
                  Все категории
                  <HandySvg
                    src='/img/arrow.svg'
                    className={styles.icon}
                    width='14'
                    height='14'
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}