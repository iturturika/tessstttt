'use client';

import styles from './info.module.scss';

interface InfoProps {
  data?: Array<{
    link: string;
    title: string;
  }>;
  title?: string;
  count?: number;
  path?: boolean;
}

export function Info({ data, title, count, path = true }: InfoProps) {
  return (
    <section className={styles.info}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={`${styles.path} ${path?'':'is-hidden'}`}>
            <a href='/' className={styles.link}>
              Главная
            </a>
            {data?.map((item) => (
              <div key={item.link}>
                {' > '}
                <a href={item.link} className={styles.link}>
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          <h1 className={`${styles.title} ${title?'':'is-hidden'}`}>
            {title} <span>{count}</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
