'use client';

import { HandySvg } from 'handy-svg'
import styles from './settings.module.scss';
import Image from 'next/image';
import { Checkbox } from '@/elements/checkbox/checkbox'
import { Switch } from '@/elements/switch/switch'

export function Settings() {
  return (
    <section className={styles.settings}>
      <div className={styles.inner}>
        <h1 className={styles.title} style={{ marginBottom: '10px' }}>
          Настройки
        </h1>
        <div className={styles.mail}>
          <button
            type='button'
            className={'btn-reset ' + styles.mailBtn}
            data-graph-path='email'
          >
            <span>example@gmail.com</span>
            <HandySvg src='/img/edit.svg' width='15' height='14' />
          </button>
          <span className={styles.mailAlert}>
            <Image
              src='img/success.svg'
              className='image'
              width={16}
              height={14}
              alt='Иконка птички'
            />
            <span>Подтверждён</span>
          </span>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.phone}>
              <div
                className={styles.phoneTitle}
                style={{ marginBottom: 20 }}
              >
                Телефоны
              </div>
              <p className={styles.phoneText} style={{ marginBottom: 20 }}>
                <HandySvg src='/img/defender.svg' width='16' height='16' />
                <span>
                  Чтобы ваш настоящий номер не попал в базы мошенников, мы
                  показываем вместо него подменный, а звонки переводим вам. Эту
                  защиту нельзя отключить. <a href='#'>Подробнее</a>
                </span>
              </p>
              <div
                className={styles.phoneContent}
                style={{ marginBottom: 20 }}
              >
                <span className={styles.phoneNum}>8 995 601-88-75</span>
                <span>1 объявление</span>
              </div>
              <button
                type='button'
                className={'btn-reset ' + styles.phoneBtn}
              >
                Обновить
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.bell}>
              <div className={styles.bellTitle} style={{ marginBottom: 5 }}>
                Звонки
              </div>
              <p className={styles.text} style={{ marginBottom: 15 }}>
                Включаются в каждом объявлении отдельно
              </p>
              <div className={styles.bellSubtitle}>Когда принимать</div>
              <div
                className={styles.bellContent}
                style={{ marginBottom: 5 }}
              >
                <button
                  type='button'
                  className={'btn-reset ' + styles.bellBtn}
                >
                  С 00:00
                </button>
                <button
                  type='button'
                  className={'btn-reset ' + styles.bellBtn}
                >
                  До 00:00
                </button>
                <Checkbox id='allTime' value='В любое время' />
              </div>
              <p
                className={styles.text}
                style={{ color: 'var(--grey-color)', marginBottom: 20 }}
              >
                Мы сообщим, если с вами захотят связаться
                <br />в другое время.
              </p>
              <div className={styles.bellSubtitle}>
                <HandySvg src='/img/check.svg' width='16' height='16' />
                <span>Входящие звонки через Kangaroo включены</span>
              </div>
              <p className={styles.text}>
                Отключить звонки через Kangaroo нельзя.
              </p>
              <p className={styles.text} style={{ marginBottom: 15 }}>
                С вами смогут связаться по интернету. Вы увидите имя собеседника
                и объявление, о котором пойдёт речь. При плохом интернете вам
                смогут позвонить по временному номеру.
              </p>
              <div className={styles.bellSubtitle}>
                <span>Устройства для приёма звонков через Kangaroo</span>
              </div>
              <p className={styles.text} style={{ marginBottom: 10 }}>
                Добавляются в список, когда вы входите на них в профиль. Для
                каждого объявления вы можете выбрать своё устройство при
                размещении и редактировании.
              </p>
              <p className={styles.text}>
                samsung SM-A520F • <span>ID: 2727264401</span>
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.social}>
              <div
                className={styles.socialTitle}
                style={{ marginBottom: 20 }}
              >
                Соцсети и сервисы
              </div>
              <div className={styles.socialContent}>
                <div className={styles.socialItem}>
                  <span className={styles.socialName}>
                    <Image
                      src='/img/social/vk.svg'
                      className='image'
                      width={20}
                      height={20}
                      alt='Логотип ВК'
                    />
                    <span>VK ID</span>
                  </span>
                  <Switch />
                </div>
                <div className={styles.socialItem}>
                  <span className={styles.socialName}>
                    <Image
                      src='/img/social/ok.svg'
                      className='image'
                      width={20}
                      height={20}
                      alt='Логотип OK'
                    />
                    <span>Одноклассники</span>
                  </span>
                  <Switch />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.sale}>
              <div className={styles.saleContent}>
                <span>Счётчик продаж</span>
                <Switch />
              </div>
              <p className={styles.text}>
                Показывать, какую сумму вам принесли сделки на Kangaroo.{' '}
                <a href='#'>Подробнее</a>
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.custom}>
              <div
                className={styles.customTitle}
                style={{ marginBottom: 15 }}
              >
                Настройка email уведомлений
              </div>
              <p className={styles.text} style={{ marginBottom: 25 }}>
                Kangaroo вправе присылать системные уведомления пользователю без
                возможности отписки от них.
              </p>
              <ul className={styles.list + ' list-reset'}>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.custom}>
              <div
                className={styles.customTitle}
                style={{ marginBottom: 15 }}
              >
                Уведомления в мессенджере
              </div>
              <ul className={styles.list + ' list-reset'}>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
                <li className={styles.listItem}>
                  <div className={styles.listContent}>
                    <span className={styles.listTitle}>
                      Сохраненные поиски
                    </span>
                    <span className={styles.listText}>
                      Подборки объявлений по вашим сохраненным поискам
                    </span>
                  </div>
                  <Switch />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.delete}>
              <div className={styles.deleteContent}>
                <div className={styles.deleteTitle}>Удаление профиля</div>
                <p className={styles.text}>
                  Восстановить профиль не получится. Все ваши активные
                  объявления, статусы и рейтинг в этом профиле будут потеряны.
                </p>
              </div>
              <button type='button' className={'btn-reset ' + styles.deleteBtn}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
