'use client';

import styles from './dropdown.module.scss';
import Image from 'next/image';

interface DropdownProps {
  condition: boolean;
  data: Array<{
    title: string,
    path: string
  }>;
}

export function Dropdown({ condition, data }: DropdownProps) {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.list + ' list-reset'}>
        {data.map((item) => (
          <li className={styles.item} key={item.title}>
            <button type='button' className={'btn-reset ' + styles.btn} title={item.title}>
                <Image src={item.path} alt={'Иконка раздела: ' + item.title} width={16} height={16} />
                <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
