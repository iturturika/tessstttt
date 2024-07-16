'use client';

import styles from './modal.module.scss';

export function AddressModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.description}>
        <div
          className={styles.title}
          style={{
            marginBottom: '15px',
          }}
        >
          Новый адрес
        </div>
        <input
          className={styles.input + ' input-reset'}
          id='address'
          name='address'
          placeholder='Начните вводить адрес'
          style={{
            marginBottom: '8px',
          }}
          type='text'
        />
        <div
          className={styles.type}
          style={{
            marginBottom: '25px',
          }}
        >
          <button className={'btn-reset ' + styles.typeBtn} type='button'>
            Дом
          </button>
          <button className={'btn-reset ' + styles.typeBtn} type='button'>
            Работа
          </button>
          <button
            className={'btn-reset ' + styles.typeBtn + ' ' + styles.active}
            type='button'
          >
            Другое
          </button>
        </div>
        <div
          className={styles.subtitle}
          style={{
            marginBottom: '10px',
          }}
        >
          Пригодится при доставке курьером
        </div>
        <div
          className={styles.content}
          style={{
            marginBottom: '8px',
          }}
        >
          <input
            className={styles.contenType + ' input-reset'}
            id='apartment'
            name='apartment'
            placeholder='Квартира'
            type='number'
          />
          <input
            className={styles.contenType + ' input-reset'}
            id='entrance'
            name='entrance'
            placeholder='Подъезд'
            type='number'
          />
          <input
            className={styles.contenType + ' input-reset'}
            id='floor'
            name='floor'
            placeholder='Этаж'
            type='number'
          />
        </div>
        <textarea
          className={styles.textarea + ' input-reset'}
          cols={30}
          id='message'
          name='message'
          placeholder='Комментарий для курьера'
          rows={3}
        />
        <span className={styles.alert}>
          Нажимая «Сохранить», я соглашаюсь 
          <a href='#'>с условиями</a>
        </span>
        <button
          className={'btn-reset ' + styles.btn}
          style={{
            marginTop: '60px',
          }}
          type='button'
        >
          Сохранить
        </button>
      </div>
      <div />
    </div>
  );
}
