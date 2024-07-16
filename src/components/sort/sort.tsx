'use client';

import { Checkbox } from '@/elements/checkbox/checkbox'
import styles from './sort.module.scss';

export function Sort() {
  return (
    <section className={styles.sort}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.containerItem}>
              <div className={styles.title}>Производитель</div>
              <input
                placeholder='Производитель'
                type='text'
                name='maker'
                id='maker'
                className={'input-reset ' + styles.input}
              />
            </div>
            <div className={styles.containerItem}>
              <div className={styles.title}>Память</div>
              <ul className={styles.list + ' list-reset'}>
                <li className={styles.item}>
                    <Checkbox id='memory1' value='До 4 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory6' value='64 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory2' value='4 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory7' value='128 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory3' value='8 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory8' value='256 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory4' value='16 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory9' value='512 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory5' value='32 ГБ' />
                </li>
                <li className={styles.item}>
                    <Checkbox id='memory10' value='1 ТБ' />
                </li>
              </ul>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.title}>Цвет</div>
              <ul className={styles.listFlex + ' list-reset'}>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#f1ddba' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #ccc',
                    }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color + ' ' + styles.activeColor}
                    style={{ backgroundColor: '#1cbfff' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#ffe433' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#1c8c38' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#805c3a' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#f54043' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#ffb021' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#ffa1ea' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#9c9c9c' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#3264fa' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#6a36e3' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{ backgroundColor: '#292929' }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{
                      background:
                        'linear-gradient(-45deg,#d2b055, #f5f5f5, #d2b055)',
                    }}
                  />
                </li>
                <li className={styles.itemFlex}>
                  <div
                    className={styles.color}
                    style={{
                      background:
                        'linear-gradient(-45deg,#9c9c9c, #f5f5f5, #9c9c9c)',
                    }}
                  />
                </li>
              </ul>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.title}>Состояние</div>
              <Checkbox id='condition1' value='Новое' margin='0 0 5px' />
              <Checkbox id='condition2' value='Отличное' margin='0 0 5px' />
              <Checkbox id='condition3' value='Хорошее' margin='0 0 5px' />
              <Checkbox id='condition4' value='Удовлетворительное' margin='0 0 5px' />
              <Checkbox id='condition5' value='Требуется ремонт' margin='0 0 5px' />
              <button type='button' className={'btn-reset ' + styles.btn}>
                Какое состояние выбрать
              </button>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.title}>Цена</div>
              <div className={styles.content}>
                <input
                  placeholder='Цена от'
                  type='text'
                  name='priceFrom'
                  id='priceFrom'
                  className={'input-reset ' + styles.input}
                />
                <input
                  placeholder='до, руб.'
                  type='text'
                  name='priceTo'
                  id='priceTo'
                  className={'input-reset ' + styles.input}
                />
              </div>
              <div className={styles.tab}>
                <button
                  type='button'
                  className={'btn-reset ' + styles.tabBtn + ' ' + styles.activeTabBtn}
                >
                  Все
                </button>
                <button type='button' className={'btn-reset ' + styles.tabBtn + ' '}>
                  Частные
                </button>
                <button type='button' className={'btn-reset ' + styles.tabBtn + ' '}>
                  Компании
                </button>
              </div>
              <div className={styles.more}>
                <Checkbox id='delivery' value='С Kangaroo Доставкой' margin='0 0 20px' />
                <Checkbox id='more1' value='Бесплатная доставка' margin='0 0 10px' />
                <Checkbox id='more2' value='От 14 дней на возврат' margin='0 0 10px' />
                <Checkbox id='more3' value='Смартфон проверен' />
              </div>
            </div>
            <div className={styles.containerItem}>
              <div className={styles.title}>Рейтинг продавца</div>
              <Checkbox id='more4' value='4 звезды и выше' />
            </div>
            <div className={styles.containerItem}>
              <div className={styles.title}>Слова в описании</div>
              <input
                placeholder='Что-то важное для вас'
                type='text'
                name='keyWord'
                id='keyWord'
                className={'input-reset ' + styles.input}
              />
            </div>
            <Checkbox id='keyWordCheckbox' value='Искать только в названиях' />
          </div>
          <button type='button' className={'btn-reset ' + styles.result}>
            Показать 19 тыс. объявлений
          </button>
        </div>
      </div>
    </section>
  );
}
