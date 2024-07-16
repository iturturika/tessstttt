'use client';

import { HandySvg } from 'handy-svg'
import styles from './info.module.scss';
import Image from 'next/image';

export function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.user}>
        <div className={styles.description}>
          <p className={styles.text} style={{ marginBottom: 16 }}>
            Пользователь
            <button type='button' className='btn-reset'>
                <HandySvg src='/img/edit.svg' width={15} height={20} />
            </button>
          </p>
          <p className={styles.text} style={{ marginBottom: 16 }}>
            Частное лицо
          </p>
          <p className={styles.text} style={{ marginBottom: 16 }}>
            Номер профиля <span>123 456 789</span>
          </p>
          <p className={styles.text}>На Kangaroo с 1 декабря 2024</p>
        </div>
        <div className={styles.picture}>
          <picture>
            <source srcSet='/img/user-2.webp' type='image/webp' />
            <Image
              src='/img/user-2.png'
              className='image'
              width={172}
              height={172}
              alt='Аватарка Пользователя'
            />
          </picture>
          <div className={styles.set}>
            <input
              type='file'
              name='avatar'
              id='avatar'
              className='input-reset'
            />
            <HandySvg src='/img/photo.svg' width={20} height={20} />
          </div>
        </div>
      </div>
      <div className={styles.pin}>
        <div className={styles.title}>Значки</div>
        <p className={styles.text} style={{ marginBottom: 15 }}>
          Видны всем в вашем профиле.
        </p>
        <button
          type='button'
          className={styles.alert + ' btn-reset'}
        >
          <Image
            src='/img/success.png'
            className='image'
            width={16}
            height={16}
            alt='иконка птички'
          />
          <span>Телефон подтверждён</span>
        </button>
      </div>
      <div className={styles.confirm}>
        <div className={styles.title}>Подтверждение данных</div>
        <ul className={styles.list + ' list-reset'}>
          <li className={styles.item}>
            <div className={styles.item}>
              <p className={styles.text}>
                Для частных лиц
                <HandySvg src='/img/info.svg' width={16} height={16} />
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.text}>Проверка ещё не пройдена</p>
            </div>
            <div className={styles.item}>
              <button type='button' className='btn-reset'>
                Пройти проверку
              </button>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item}>
              <p className={styles.text}>
                Для самозанятых
                <HandySvg src='/img/info.svg' width={16} height={16} />
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.text}>Проверка ещё не пройдена</p>
            </div>
            <div className={styles.item}>
              <button type='button' className='btn-reset'>
                Пройти проверку
              </button>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.item}>
              <p className={styles.text}>
                Для юрлиц и ИП
                <HandySvg src='/img/info.svg' width={16} height={16} />
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.text}>Проверка ещё не пройдена</p>
            </div>
            <div className={styles.item}>
              <button type='button' className='btn-reset'>
                Пройти проверку
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.confirm}>
        <div className={styles.title}>Привязка сообщества</div>
        <ul className={styles.list + ' list-reset'}>
          <li className={styles.item}>
            <div className={styles.item}>
              <p className={styles.text}>
                Бизнес-сообщества
                <br />
                ВКонтакте
              </p>
            </div>
            <div className={styles.item}>
              <p className={styles.text}>Вы должны быть администратором</p>
            </div>
            <div className={styles.item}>
              <button type='button' className='btn-reset'>
                Привязать
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
