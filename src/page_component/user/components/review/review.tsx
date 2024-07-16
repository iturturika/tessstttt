'use client';

import { HandySvg } from 'handy-svg';
import styles from './review.module.scss';
import Image from 'next/image';
import { Menu } from '@/elements/menu/menu'

interface ReviewProps{
  padding?: string;
}

export function Review({ padding = '30px 0 0' }:ReviewProps) {
  return (
    <div className={styles.review} id='review'>
      <div className={styles.comment} style={{padding}}>
        <ul className={styles.list + ' list-reset'}>
          <li className={styles.item}>
            <div className={styles.commenTitle}>Прекрасный телефон</div>
            <div className={styles.user}>
              <Image
                src='/img/user-2.png'
                className='image'
                width={20}
                height={20}
                alt='Аватарка Вероника К'
              />
              <div className={styles.userContent}>
                <span className={styles.userName}>Вероника К</span>
                <span className={styles.userExperience}>
                  Опыт меньше месяца: 128ГБ
                </span>
                <div className={styles.userStar}>
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Преимущества</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Недостатки</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div
                className={styles.descriptionItem}
                style={{ marginBottom: 0 }}
              >
                <div className={styles.descriptionTitle}>Дополнительно</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
              </div>
              <span className={styles.date}>сегодня</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.commenTitle}>Прекрасный телефон</div>
            <div className={styles.user}>
              <Image
                src='/img/user-2.png'
                className='image'
                width={20}
                height={20}
                alt='Аватарка Вероника К'
              />
              <div className={styles.userContent}>
                <span className={styles.userName}>Вероника К</span>
                <span className={styles.userExperience}>
                  Опыт меньше месяца: 128ГБ
                </span>
                <div className={styles.userStar}>
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Преимущества</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Недостатки</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div
                className={styles.descriptionItem}
                style={{ marginBottom: 0 }}
              >
                <div className={styles.descriptionTitle}>Дополнительно</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
              </div>
              <span className={styles.date}>сегодня</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.commenTitle}>Прекрасный телефон</div>
            <div className={styles.user}>
              <Image
                src='/img/user-2.png'
                className='image'
                width={20}
                height={20}
                alt='Аватарка Вероника К'
              />
              <div className={styles.userContent}>
                <span className={styles.userName}>Вероника К</span>
                <span className={styles.userExperience}>
                  Опыт меньше месяца: 128ГБ
                </span>
                <div className={styles.userStar}>
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Преимущества</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Недостатки</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div
                className={styles.descriptionItem}
                style={{ marginBottom: 0 }}
              >
                <div className={styles.descriptionTitle}>Дополнительно</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
              </div>
              <span className={styles.date}>сегодня</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.commenTitle}>Прекрасный телефон</div>
            <div className={styles.user}>
              <Image
                src='/img/user-2.png'
                className='image'
                width={20}
                height={20}
                alt='Аватарка Вероника К'
              />
              <div className={styles.userContent}>
                <span className={styles.userName}>Вероника К</span>
                <span className={styles.userExperience}>
                  Опыт меньше месяца: 128ГБ
                </span>
                <div className={styles.userStar}>
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Преимущества</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Недостатки</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div
                className={styles.descriptionItem}
                style={{ marginBottom: 0 }}
              >
                <div className={styles.descriptionTitle}>Дополнительно</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
              </div>
              <span className={styles.date}>сегодня</span>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.commenTitle}>Прекрасный телефон</div>
            <div className={styles.user}>
              <Image
                src='/img/user-2.png'
                className='image'
                width={20}
                height={20}
                alt='Аватарка Вероника К'
              />
              <div className={styles.userContent}>
                <span className={styles.userName}>Вероника К</span>
                <span className={styles.userExperience}>
                  Опыт меньше месяца: 128ГБ
                </span>
                <div className={styles.userStar}>
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                  <HandySvg src='/img/star.svg' width={14} height={14} />
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Преимущества</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div className={styles.descriptionItem}>
                <div className={styles.descriptionTitle}>Недостатки</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
                <button type='button' className={styles.learnMore + ' btn-reset'}>
                  Читать целиком
                </button>
              </div>
              <div
                className={styles.descriptionItem}
                style={{ marginBottom: 0 }}
              >
                <div className={styles.descriptionTitle}>Дополнительно</div>
                <p className={styles.commenText}>
                  Доставка очень быстрая! Все хорошо упаковано! Камера и рамка в
                  комплекте,как и обещали. Стоимость очень порадовала)рекомендую
                </p>
              </div>
              <span className={styles.date}>сегодня</span>
            </div>
          </li>
        </ul>
        <Menu />
      </div>
    </div>
  );
}
