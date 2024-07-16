'use client';

import { Checkbox } from '@/elements/checkbox/checkbox'
import styles from './search.module.scss';
import { Switch } from '@/elements/switch/switch'

export function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.menu}>
        <div className={styles.menuContent}>
            <Checkbox id='delete' value='' />
          <button
            type='button'
            className={'btn-reset ' + styles.menuBtn}
          >
            Удалить
          </button>
        </div>
        <span className={styles.menuText}>Получать на почту</span>
      </div>
      <ul className={styles.list + ' list-reset'}>
        <li className={styles.item}>
          <div className={styles.content}>
            <div className={styles.description}>
                <Checkbox id='delete2' value='' />
              <div>
                <a href='#' className={styles.link}>
                  телефон андроид
                </a>
                <span className={styles.text}>
                  Телефоны, Все регионы
                </span>
              </div>
            </div>
            <Switch round={true} />
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.content}>
            <div className={styles.description}>
                <Checkbox id='delete2' value='' />
              <div>
                <a href='#' className={styles.link}>
                  телефон андроид
                </a>
                <span className={styles.text}>
                  Телефоны, Все регионы
                </span>
              </div>
            </div>
            <Switch round={true} />
          </div>
        </li>
      </ul>
    </div>
  );
}
