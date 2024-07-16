'use client';

import styles from './strip.module.scss';
import Image from 'next/image';

interface StriProps {
  data: Array<{
    title: string,
    link: string,
    path: string,
  }>;
  padding?: string;
}

export function Strip({ data, padding = '0' }: StriProps) {
  return (
    <section className={styles.strip}>
      <div className='container'>
        <div className={styles.inner} style={{ padding }}>
          <ul className={styles.list + ' list-reset'}>
            {data.map(({title, link, path}) => (
              <li className={styles.item} key={link} title={title}>
                <a href={link} className={styles.link} aria-label={title}>
                  <Image src={path} alt={title} width={68} height={68} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
