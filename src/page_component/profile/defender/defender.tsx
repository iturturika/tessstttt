'use client';

import styles from './defender.module.scss';
import { Switch } from '@/elements/switch/switch';

export function Defender() {
  return (
    <section className={styles.defender}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Защита профиля</h1>
        <p className={styles.text} style={{ marginBottom: 56 }}>
          Здесь можно управлять настройками безопастности.
          <a href='#'>Больше о защите</a>
        </p>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.containerTitle}>Вход</div>
            <div className={styles.content}>
              <div className={styles.description}>
                <p
                  className={styles.text}
                  style={{ color: 'var(--dark-color)' }}
                >
                  Безопасный вход
                </p>
                <p className={styles.text}>
                  Присылать смс или пуш-уведомление с кодом доступа. Проверка
                  понадобится только при входе с нового устройства. После
                  подключения вы выйдете из профиля на всех устройствах, кроме
                  этого.
                </p>
              </div>
              <Switch />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.containerTitle}>Устройства</div>
            <p
              className={styles.text}
              style={{ color: 'var(--dark-color)', marginBottom: 20 }}
            >
              Посмотрите, где вы сейчас авторизованы. Если одно из устройств
              выглядит подозрительно, нажмите ••• → «Это не я, сменить пароль».
            </p>
            <ul className='list-reset'>
              <li>
                <p
                  className={styles.text}
                  style={{ color: 'var(--dark-color)', marginBottom: 5 }}
                >
                  Неизвестная локация, вчера в 21:13
                </p>
                <p className={styles.text}>
                  Windows, браузер Chrome, вход по номеру телефона
                </p>
                <span>Это устройства</span>
              </li>
              <li>
                <p
                  className={styles.text}
                  style={{ color: 'var(--dark-color)', marginBottom: 5 }}
                >
                  Неизвестная локация, вчера в 21:13
                </p>
                <p className={styles.text}>
                  Windows, браузер Chrome, вход по номеру телефона
                </p>
                <button
                  type='button'
                  className={styles.btn + ' btn-reset'}
                  id='defenderDropdownBtn'
                >
                  <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M17 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-3 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-9-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' />
                  </svg>
                </button>
                <div
                  className='chatroom__dropdown is-hidden'
                  id='defenderDropdown'
                >
                  <ul
                    className='chatroom__dropdown-list list-reset'
                    style={{ right: 10, width: 250, bottom: '40px !important' }}
                  >
                    <li>
                      <a href='#setpassword' className='button' type='button'>
                        Это не я, сменить пароль
                      </a>
                    </li>
                    <li>
                      <button
                        className='btn-reset button'
                        type='button'
                        data-graph-path='quit'
                      >
                        Выйти на этом устройстве
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.item} id='setpassword'>
            <div className={styles.containerTitle}>Сменя пароля</div>
            <p
              className={styles.text}
              style={{ color: 'var(--dark-color)', marginBottom: 15 }}
            >
              После смены нужно заново войти в профиль на всех устройствах.
            </p>
            <input
              placeholder='Текущий'
              type='password'
              name='currentpassword'
              id='currentpassword'
              className={'input-reset ' + styles.input}
              style={{ marginBottom: 10 }}
            />
            <input
              placeholder='Новый'
              type='password'
              name='newpassword'
              id='newpassword'
              className={'input-reset ' + styles.input}
              style={{ marginBottom: 10 }}
            />
            <button type='button' className={'btn-reset ' + styles.submit}>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
