'use client';

import { Card } from '@/elements/catalog/product/card';
import styles from './market.module.scss';

export function Market() {
    return (
        <section className={styles.market}>
            <div className='container'>
                <div className={styles.inner}>
                    <ul className={styles.list + ' list-reset'}>
                        <li className={styles.item}>
                            <Card
                                link='#'
                                imgPath='/img/market.png'
                                title='Объявление'
                                price={19999}
                                address='Краснодар'
                                description='
                Норковая шубка в&nbsp;цвете черный бриллиантдлина шубки 90&nbsp;см, удобный глубокий капюшон, у&nbsp;шубки идеальное состояние!
                Норка очень густая шубка теплая, размер 40 xs&nbsp;или&nbsp;42! В&nbsp;груди 92, бедра&nbsp;96! Цена пока не&nbsp;сезон!'
                                delivery={true}
                                addressDate='От 31минут'
                                company='Компания'
                                rating={4.9}
                                feedback={310}
                            />
                        </li>
                        <li className={styles.item}>
                            <Card
                                link='#'
                                imgPath='/img/market.png'
                                title='Объявление'
                                price={19999}
                                address='Краснодар'
                                description='
          Норковая шубка в&nbsp;цвете черный бриллиантдлина шубки 90&nbsp;см, удобный глубокий капюшон, у&nbsp;шубки идеальное состояние!
          Норка очень густая шубка теплая, размер 40 xs&nbsp;или&nbsp;42! В&nbsp;груди 92, бедра&nbsp;96! Цена пока не&nbsp;сезон!
        '
                                delivery={true}
                                addressDate='От 31минут'
                                company='Компания'
                                rating={4.9}
                                feedback={310}
                            />
                        </li>
                        <li className={styles.item}>
                            <Card
                                link='#'
                                imgPath='/img/market.png'
                                title='Объявление'
                                price={19999}
                                address='Краснодар'
                                description='
          Норковая шубка в&nbsp;цвете черный бриллиантдлина шубки 90&nbsp;см, удобный глубокий капюшон, у&nbsp;шубки идеальное состояние!
          Норка очень густая шубка теплая, размер 40 xs&nbsp;или&nbsp;42! В&nbsp;груди 92, бедра&nbsp;96! Цена пока не&nbsp;сезон!
        '
                                delivery={true}
                                addressDate='От 31минут'
                                company='Компания'
                                rating={4.9}
                                feedback={310}
                            />
                        </li>
                        <li className={styles.item}>
                            <Card
                                link='#'
                                imgPath='/img/market.png'
                                title='Объявление'
                                price={19999}
                                address='Краснодар'
                                description='
          Норковая шубка в&nbsp;цвете черный бриллиантдлина шубки 90&nbsp;см, удобный глубокий капюшон, у&nbsp;шубки идеальное состояние!
          Норка очень густая шубка теплая, размер 40 xs&nbsp;или&nbsp;42! В&nbsp;груди 92, бедра&nbsp;96! Цена пока не&nbsp;сезон!
        '
                                delivery={true}
                                addressDate='От 31минут'
                                company='Компания'
                                rating={4.9}
                                feedback={310}
                            />
                        </li>
                        <li className={styles.item}>
                            <Card
                                link='#'
                                imgPath='/img/market.png'
                                title='Объявление'
                                price={19999}
                                address='Краснодар'
                                description='
          Норковая шубка в&nbsp;цвете черный бриллиантдлина шубки 90&nbsp;см, удобный глубокий капюшон, у&nbsp;шубки идеальное состояние!
          Норка очень густая шубка теплая, размер 40 xs&nbsp;или&nbsp;42! В&nbsp;груди 92, бедра&nbsp;96! Цена пока не&nbsp;сезон!
        '
                                delivery={true}
                                addressDate='От 31минут'
                                company='Компания'
                                rating={4.9}
                                feedback={310}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}