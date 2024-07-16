'use client';

import styles from './service.module.scss';
import Image from 'next/image';

interface ServiceProps{
    title: string,
    data: Array<{
        link: string,
        title: string,
        imgPath: string
    }>,
    padding?: string,
}

export function Service({ title, data, padding = '0' }:ServiceProps) {
    return(
        <section className={styles.service}>
            <div className="container">
                <div className={styles.inner} style={{padding}}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <ul className={styles.list + ' list-reset'}>
                        {data.map(({ link, title, imgPath }) => (
                        <li className={styles.item} key={title} title={title}>
                            <a href={link} className={styles.link}>
                                <Image src={imgPath} alt={title} width={54} height={54} />
                                <span>{title}</span>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}