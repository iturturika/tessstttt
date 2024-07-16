'use client';

import styles from './arrow.module.scss';

interface ArrowProps {
  margin?: string;
  value?: string;
}

export function Arrow({ margin = '0', value = '' }: ArrowProps) {
  return (
    <div className={styles.arrow} style={{ margin }}>
      <div style={{ color: '#39B200' }}>
        <svg
          style={{ transform: 'rotate(180deg)' }}
          width={13}
          height={28}
          viewBox='0 0 10 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='currentColor'
            d='M0 21V0h7.53A2.45 2.45 0 0 1 9.7 1.3a2.52 2.52 0 0 1-.1 2.55L6.95 8.07a4.54 4.54 0 0 0 0 4.86l2.67 4.22a2.52 2.52 0 0 1-.82 3.5c-.38.23-.81.35-1.26.35H0Z'
          ></path>
        </svg>
      </div>
      <div
        className={styles.text}
        style={{
          color: 'rgb(255, 255, 255)',
          backgroundColor: '#39B200',
          height: 28,
        }}
      >
        {value}
      </div>
      <div style={{ color: '#39B200' }}>
        <svg
          width={12}
          height={28}
          viewBox='0 0 9 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='currentColor'
            d='m3.86 1.36 4.67 7.5a3.1 3.1 0 0 1 0 3.28l-4.67 7.5c-.26.42-.62.76-1.04 1-.42.24-.88.36-1.36.36H0V0h1.46c.47 0 .94.13 1.36.36.41.24.77.58 1.03 1Z'
          ></path>
        </svg>
      </div>
    </div>
  );
}
