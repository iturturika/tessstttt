'use client';

import styles from './notification.module.scss';

export function Notification() {
  return (
    <section className={styles.notification}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Уведомления</h1>
        <ul className={styles.list + ' list-reset'}>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.name}>
                В ваш профиль вошли с нового устройства
              </div>
              <div className={styles.text}>
                Если это не вы, смените пароль
              </div>
              <span className={styles.date}>Вчера в 21:10</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.name}>
                В ваш профиль вошли с нового устройства
              </div>
              <div className={styles.text}>
                Если это не вы, смените пароль
              </div>
              <span className={styles.date}>Вчера в 21:10</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.name}>
                В ваш профиль вошли с нового устройства
              </div>
              <div className={styles.text}>
                Если это не вы, смените пароль
              </div>
              <span className={styles.date}>Вчера в 21:10</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.name}>
                В ваш профиль вошли с нового устройства
              </div>
              <div className={styles.text}>
                Если это не вы, смените пароль
              </div>
              <span className={styles.date}>Вчера в 21:10</span>
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              <div className={styles.name}>
                В ваш профиль вошли с нового устройства
              </div>
              <div className={styles.text}>
                Если это не вы, смените пароль
              </div>
              <span className={styles.date}>Вчера в 21:10</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
