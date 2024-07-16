'use client';

import React, { useState, ChangeEvent } from 'react';

import { Checkbox } from '@/elements/checkbox/checkbox';
import styles from './new.module.scss';

export function New() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <section className={styles.new}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Новая акция</h1>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.containerItem}>
              <div className={styles.containerTitle}>Название</div>
              <input
                type='text'
                name='name'
                id='name'
                className={'input-reset ' + styles.input}
                value={inputValue}
                onChange={handleInputChange}
              />
              <span className={styles.advice}>
                Останется между нами, покупатели его не узнают
              </span>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.containerTitle}>Промокод</div>
              <p className={styles.text}>
                Задайте условия акции — они будут действовать при покупке с
                Kangaroo Доставкой. Вы сможете поделиться промокодом любым
                удобным способом и показать его прямо в объявлении.
              </p>
              <a href='#' className={styles.link}>
                Подробнее о промокодах
              </a>
              <div className={styles.rebate}>
                <div className={styles.subtitle}>Размер скидки</div>
                <div className={styles.rebateContent}>
                  <input
                    type='number'
                    name='rebate'
                    id='rebate'
                    className={'input-reset ' + styles.input}
                  />
                  <button
                    type='button'
                    className={'btn-reset ' + styles.rebateBtn}
                  >
                    %
                  </button>
                </div>
                <span className={styles.advice}>
                  От 1 до 90% от цены товара
                </span>
              </div>
              <div className={styles.value}>
                <div className={styles.subtitle}>
                  Максимальное количество применений
                </div>
                <input
                  type='number'
                  name='rebate'
                  id='rebate'
                  className={'input-reset ' + styles.input}
                />
                <span className={styles.advice}>
                  Укажите, сколько раз покупатели смогут получить скидку
                </span>
              </div>
              <div className={styles.checkbox}>
                <Checkbox id='promo1' value='' />
                <label htmlFor='promo1'>
                  <p className={styles.text}>Многоразовый</p>
                  <span className={styles.advice}>
                    Один покупатель сможет воспользоватся промокодом несколько
                    раз
                  </span>
                </label>
              </div>
              <div className={styles.checkbox}>
                <Checkbox id='promo2' value='' />
                <label htmlFor='promo2'>
                  <p className={styles.text}>Многоразовый</p>
                  <span className={styles.advice}>
                    Один покупатель сможет воспользоватся промокодом несколько
                    раз
                  </span>
                </label>
              </div>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.containerTitle}>Товары</div>
              <p className={styles.text}>
                Укажите, какие товары будут участвовать в акции.
              </p>
              <button
                type='button'
                className={'btn-reset ' + styles.containerBtn}
              >
                Выбрать
              </button>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.containerTitle}>Срок проведения</div>
              <p className={styles.text}>Выберите даты начала и конца акции.</p>
              <p className={styles.text} style={{ marginBottom: 15 }}>
                Время московское: с 00:00 до 23:59.
              </p>
              <input
                type='date'
                name='date'
                id='date'
                className={'input-reset ' + styles.date}
              />
              <span className={styles.advice}>Акция продлится 14 дней</span>
            </div>
          </div>
          <article className={styles.description}>
            <div className={`${styles.descriptionTitle} ${inputValue?'':'is-hidden'}`}>{inputValue}</div>
            <p
              className={
                styles.descriptionText + ' ' + styles.descriptionSpecialText
              }
            >
              Одноразовый промокод
            </p>
            <p
              className={
                styles.descriptionText + ' ' + styles.descriptionSpecialText
              }
            >
              Не виден в объявлении
            </p>
            <p
              className={
                styles.descriptionText + ' ' + styles.descriptionSpecialText
              }
              style={{ marginBottom: 20 }}
            >
              С 8 мая по 21 мая 2024 года (14&nbsp;дней)
            </p>
            <div className={styles.descriptionTitle}>Статус</div>
            <p className={styles.descriptionText}>Неактивна</p>
          </article>
        </div>
        <div className={styles.menu}>
          <button type='submit' className={'btn-reset ' + styles.btn}>
            Создать
          </button>
          <button type='submit' className={'btn-reset ' + styles.btn}>
            Сохранить черновик и выйти
          </button>
        </div>
        <span className={styles.advice + ' ' + styles.specialAdvice}>
          Нажимая «Создать», вы подтверждаете, что указали верные условия акции.
          Вам нужно будет оповестить о них покупателей при публикации промокода
          вне Kangaroo.
        </span>
      </div>
    </section>
  );
}
