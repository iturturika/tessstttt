'use client';

import styles from './search.module.scss';

interface SearchProps{
  margin?: string;
}

export function Search({ margin = '0' }:SearchProps) {
  return (
    <section className={styles.search} style={{margin}}>
      <div className='container'>
        <div className={styles.inner}>
          <h2 className={styles.title}>Поиск исполнителя</h2>
          <div className={styles.content}>
            <button
              type='button'
              className={'btn-reset ' + styles.contentBtn}
            >
              Радиус, метро, район
            </button>
          </div>
          <div className={styles.menu}>
            <button type='button' className={'btn-reset ' + styles.btn}>
              Показать&nbsp;261&nbsp;объявление
            </button>
            <button type='button' className={'btn-reset ' + styles.btn}>
              <svg
                aria-hidden='true'
                data-icon='pin-outline'
                viewBox='0 0 20 20'
                width={20}
                height={20}
              >
                <path d='M10 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7 8.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z' />
                <path d='M10 2.5a6 6 0 0 0-4.67 9.77L10 17.6l4.68-5.34A6 6 0 0 0 10 2.5Zm-7.5 6a7.5 7.5 0 1 1 13.31 4.74l-5.25 6a.75.75 0 0 1-1.12 0l-5.25-6-.02-.02A7.47 7.47 0 0 1 2.5 8.5Z' />
              </svg>
              <span>На&nbsp;карте</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
