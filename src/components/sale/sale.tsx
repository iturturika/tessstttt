'use client';

import styles from './sale.module.scss';
import { Card } from '@/elements/catalog/card/card'

interface SaleProps {
    title: string,
    subtitle?: string,
    padding?: string,
    linkMore: string,
    data: Array<{
        id: number,
        link: string,
        img: string,
        imgWebp?: string,
        title: string,
        price: number,
        oldPrice: number,
        address: string,
        date: string,
    }>
}

export function Sale({ title, subtitle, data, padding, linkMore }:SaleProps) {
    return (
        <section className={styles.sale}>
            <div className='container'>
                <div className={styles.inner} style={{padding: `${padding}`}}>
                    <div className={styles.title}>
                        <span>{title}</span>
                    </div>
                    <p className={styles.subtitle}>
                        {subtitle}
                    </p>
                    <ul className={styles.list + ' list-reset'}>
                        {data.map((item) => (
                            <li className={styles.item} key={item.id}>
                                <Card link={item.link} imgPath={item.img} imgPathWebp={item.imgWebp} title={item.title} price={item.price} oldPrice={item.oldPrice} address={item.address} date={item.date} />
                            </li>
                        ))}
                    </ul>
                    <a href={linkMore} className={styles.link}>
                        Показать все
                    </a>
                </div>
            </div>
        </section>
    );
}