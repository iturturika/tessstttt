'use client';

import React, { useState } from 'react';
import styles from './header.module.scss';
import { Logo } from '@/elements/header/logo/logo';
import { Category } from '@/elements/header/category/category';
import { Dropdown } from '@/elements/header/dropdown/dropdown';
import { Menu } from '@/elements/header/menu/menu';
import { HandySvg } from 'handy-svg';

interface HeaderProps {
  fixed?: boolean;
}

export function Header({ fixed = true }: HeaderProps) {
  const [dropdownCondition, setDropdownCondition] = useState(false);

  const handleClick = () => {
    setDropdownCondition(!dropdownCondition);
  };
  const props = {
    xlinkHref: '#someId',
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} ${fixed ? '' : styles.unfix}`}>
        <div className={styles.top}>
          <div className={styles.topInner + ' container'}>
            <Menu />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomInner + ' container'}>
            <Logo />
            <div className={styles.search}>
              <Category />
              <div className={styles.searchContent}>
                <input
                  className={styles.input + ' input-reset'}
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Поиск по объявлениям'
                  onClick={handleClick}
                />
                <button className={styles.btn + ' btn-reset'} type='button'>
                  Найти
                </button>
                <Dropdown condition={dropdownCondition ? true : false} />
              </div>
            </div>
            <button className={styles.region + ' btn-reset'} type='button'>
              <HandySvg src='/img/mark.svg' width='16' height='16' />
              <span>Во всех регионах</span>
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleClick}
        className={`${styles.dropdownWrapper} ${
          dropdownCondition ? '' : 'is-hidden'
        }`}
      />
    </header>
  );
}
