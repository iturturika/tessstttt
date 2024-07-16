'use client';

import { HandySvg } from 'handy-svg'
import styles from './view.module.scss';

export function View() {
  return (
    <div className={styles.view}>
      <div className={styles.alert}>
        <div className={styles.alerTitle}>
          У 2 млн пользователей профессиональный профиль
        </div>
        <p className={styles.text}>
          Сделайте себе такой и заполните его. В среднем это приносит на 11%
          больше просмотров от людей, которые изучают профили перед сделкой.
        </p>
        <a href='#' className={'btn-reset ' + styles.alertBtn}>
          Улучшить профиль
        </a>
      </div>
      <div className={styles.profile}>
        <p className={styles.text}>Текущий вид</p>
        <p className={styles.text}>Обычный профиль</p>
        <a href='#' className={styles.profileLink}>
          <HandySvg src='/img/edit.svg' width={16} height={16} color='#000' />
        </a>
      </div>
      <a href='#' className={styles.link}>
        Как выглядит мой профиль
      </a>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.title}>Фотографии</div>
          <p className={styles.text} style={{ marginBottom: 10 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            optio voluptatem quia aspernatur officiis facere quis placeat vitae
            quibusdam pariatur porro sint, tempore nisi dolorum molestias iure
            fugiat voluptas! Incidunt!
          </p>
          <div className={styles.avatar}>
            <HandySvg src='/img/photo.svg' width={40} height={40} />
            <span>Добавить</span>
            <input
              type='file'
              name='avatarUp'
              id='avatarUp'
              className='input-reset'
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>О компании</div>
          <p className={styles.text} style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo
            ut quod et quia nihil incidunt distinctio consequuntur, qui
            accusamus tempora tempore placeat labore quos quasi? Molestiae nulla
            incidunt ea.
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Заполнить
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Краткое описание</div>
          <p className={styles.text} style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo
            ut quod et quia nihil incidunt distinctio consequuntur, qui
            accusamus tempora tempore placeat labore quos quasi? Molestiae nulla
            incidunt ea.
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Заполнить
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Адрес на карте</div>
          <p className={styles.text} style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo
            ut quod et quia nihil incidunt distinctio consequuntur, qui
            accusamus tempora tempore placeat labore quos quasi? Molestiae nulla
            incidunt ea.
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Добавить
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Доставка</div>
          <p className={styles.text} style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo
            ut quod et quia nihil incidunt distinctio consequuntur, qui
            accusamus tempora tempore placeat labore quos quasi? Molestiae nulla
            incidunt ea.
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Заполнить
          </button>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>Оплата</div>
          <p className={styles.text} style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo
            ut quod et quia nihil incidunt distinctio consequuntur, qui
            accusamus tempora tempore placeat labore quos quasi? Molestiae nulla
            incidunt ea.
          </p>
          <button type='button' className={'btn-reset ' + styles.btn}>
            Заполнить
          </button>
        </div>
      </div>
    </div>
  );
}
