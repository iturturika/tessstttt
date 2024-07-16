'use client';

import { Menu } from '@/elements/header/menu/menu';
import styles from './header.module.scss';
import { Logo } from '@/elements/header/logo/logo'
import { Category } from '@/elements/category/category'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.topInner + ' container'}>
              <Menu />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomInner + ' container'}>
              <Logo />
              <Category />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
