'use client';

import styles from './category.module.scss';
import Image from 'next/image';

interface CategoryProps {
  data: Array<{
    link: string;
    img: string;
    title: string;
  }>;
  padding?: string;
}

export function Category({ data, padding = '0' }: CategoryProps) {
  return (
    <section className={styles.category}>
      <div className='container'>
        <div className={styles.inner} style={{ padding }}>
          <ul className={styles.list + ' list-reset'}>
            {data.map((item) => (
              <li className={styles.item} key={item.link}>
                <a href={item.link} className={styles.link}>
                  <Image className='image' src={item.img} alt={item.title} width={54} height={54} />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
