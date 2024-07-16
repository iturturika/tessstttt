'use client';

import { HandySvg } from 'handy-svg'
import styles from './hero.module.scss';

interface HeroProps{
    margin?: string;
}

export function Hero({ margin = '0' }:HeroProps) {
  return (
    <section className={styles.hero} style={{margin}}>
      <div className='container'>
        <div className={styles.inner}>
          <nav className={styles.nav}>
            <div className={styles.title}>Какую работу вы ищете?</div>
            <div className={styles.navContent}>
                <input
                  placeholder='Должность'
                  type='text'
                  name='search'
                  id='search'
                  className={'input-reset ' + styles.input}
                />
              <div className={styles.navFlex}>
                  <input
                    placeholder='График'
                    type='text'
                    name='search'
                    id='search'
                    className={'input-reset ' + styles.input + ' ' + styles.readonly}
                    readOnly
                  />
                  <input
                    placeholder='Зарплата'
                    type='text'
                    name='search'
                    id='search'
                    className={'input-reset ' + styles.input + ' ' + styles.readonly}
                    readOnly
                  />
              </div>
            </div>
            <div className={styles.menu}>
              <button type='button' className={'btn-reset ' + styles.btn}>
                Показать 3 тыс. объявлений
              </button>
              <button type='button' className={'btn-reset ' + styles.btn}>
                <HandySvg src='/img/interface/map.svg' width='20' height='20' />
                <span>На карте</span>
              </button>
            </div>
          </nav>
          <div className={styles.description}>
            <a href='#' className={styles.descriptionTitle}>
              Подбор вакансий
            </a>
            <ul className={styles.list + ' list-reset'}>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  Для студентов
                </a>
              </li>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  Полный день
                </a>
              </li>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  Старше 45 лет
                </a>
              </li>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  От 14 лет
                </a>
              </li>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  Сменный график
                </a>
              </li>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  Работа из дома
                </a>
              </li>
              <li className={styles.item}>
                <a href='#' className={styles.link}>
                  Подработка
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
