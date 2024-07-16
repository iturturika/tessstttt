'use client';

import styles from './slide.module.scss';
import Image from 'next/image';

interface SlideProps {
  padding?: string;
  data: Array<{
    id: number;
    image: string;
    title: string,
    link: string,
    menu: Array<{
      id: number;
      link: string;
      title: string;
    }>;
    menu2: Array<{
      id: number;
      link: string;
      title: string;
    }>;
  }>;
}

export function Slide({ padding, data }: SlideProps) {
  return (
    <section className={styles.slide}>
      <div className='container'>
        <div className={styles.inner} style={{ padding: `${padding}` }}>
          <ul className={styles.list + ' list-reset'}>
            {data.map((item) => (
              <li className={styles.item} key={item.id}>
                <a className={styles.title} href={item.link}>
                  {item.title}
                </a>
                <Image
                  alt={item.title}
                  className='image'
                  height='172'
                  loading='lazy'
                  src={item.image}
                  width='484'
                />
                <div className={styles.content}>
                  <ul className={styles.slideList + ' list-reset'}>
                    {item.menu.map((list) => (
                      <li className={styles.slideItem} key={list.id}>
                        <a className={styles.link} href={list.link}>
                          {list.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.slideList + ' list-reset'}>
                    {item.menu2.map((list) => (
                      <li className={styles.slideItem} key={list.id}>
                        <a className={styles.link} href={list.link}>
                          {list.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
