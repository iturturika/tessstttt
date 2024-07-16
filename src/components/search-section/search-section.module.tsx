
import React from 'react';
import styles from './SearchSections.module.scss';

const SearchSectionModule: React.FC = () => {
    return (
        <section className={styles.search}>
            <div className={styles.container}>
                <div className={styles.search__inner}>
                    <div className={styles.search__title}>Вы искали</div>
                    <ul className={`${styles.search__list} ${styles.list__reset}`}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <li className={styles.search__item} key={index}>
                                <a href="#" className={styles.search__link}>
                                    <span className={styles.search__item_title}>Мебель и интерьер</span>
                                    <span className={styles.search__item_text}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusantium atque eos odit incidunt itaque maiores qui voluptatibus hic, eaque vel odio placeat sint? Sunt nam soluta corporis. Iure, quibusdam?
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SearchSectionModule;
