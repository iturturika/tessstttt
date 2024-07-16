'use client';

import styles from './list.module.scss';

interface ListProps {
    title: string,
    data: Array<{
        count: number,
        link: string,
        title: string,
    }>,
    padding?: string,
}

export function List({ title, data, padding = '0' }: ListProps) {
  return (
    <section className={styles.listSection}>
      <div className='container'>
        <div className={styles.inner} style={{ padding }}>
          <div className={styles.head}>
            <span className={styles.title}>
              {title}
            </span>
            <button className={`${styles.button} btn-reset`}>Все</button>
          </div>
          <ul className={`${styles.list} list-reset`}>
            {data.map(({ count, link, title }) => (
              <li className={styles.item} key={count}>
                <a
                  className={styles.link}
                  href={link}
                  title={title}
                >
                  {title}
                </a>
                <span className={styles.count}>{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
