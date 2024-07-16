'use client';

import styles from './description.module.scss';

export function Description({description}) {
    return (
        <section className={styles.description}>
            <div className={styles.inner}>
                <div className={styles.title}>Описание</div>
                <div className={styles.content}>
                    {description}
                </div>
            </div>
        </section>
    );
}