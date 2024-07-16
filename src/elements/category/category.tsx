'use client';

import styles from './category.module.scss';
import React, { useState, useEffect, useRef } from 'react';

export function Category() {
    const [isHidden, setIsHidden] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsHidden(!isHidden);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsHidden(true);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.menu} title='Меню' ref={menuRef}>
            <ul className={styles.list + ' list-reset'}>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>
                        Авто
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>
                        Недвижимость
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>
                        Работа
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#'>
                        Услуги
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.link} href='#' onClick={toggleMenu}>
                        Ещё
                    </a>
                    <div
                        className={`${styles.dropdown} + ' ' + ${
                            isHidden ? 'is-hidden' : ''
                        }`}
                    >
                        <div className={styles.title}>Все категории</div>
                        <ul className={styles.dropdownList + ' list-reset'}>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Транспорт
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Автомобили</a>
                                    </li>
                                    <li>
                                        <a href='#'>Мотоциклы и мототехника</a>
                                    </li>
                                    <li>
                                        <a href='#'>Грузовики и спецтехника</a>
                                    </li>
                                    <li>
                                        <a href='#'>Аренда спецтехники</a>
                                    </li>
                                    <li>
                                        <a href='#'>Водный транспорт</a>
                                    </li>
                                    <li>
                                        <a href='#'>Запчасти и аксессуары</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Недвижимость
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Купить жильё</a>
                                    </li>
                                    <li>
                                        <a href='#'>Путешествия</a>
                                    </li>
                                    <li>
                                        <a href='#'>Снять долгосрочно</a>
                                    </li>
                                    <li>
                                        <a href='#'>Коммерческая</a>
                                    </li>
                                    <li>
                                        <a href='#'>недвижимость</a>
                                    </li>
                                    <li>
                                        <a href='#'>Другие категории</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Работа
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Ищу работу</a>
                                    </li>
                                    <li>
                                        <a href='#'>Ищу сотрудника</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Личные вещи
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Одежда, обувь</a>
                                    </li>
                                    <li>
                                        <a href='#'>аксессуары</a>
                                    </li>
                                    <li>
                                        <a href='#'>Детская одежда и обувь</a>
                                    </li>
                                    <li>
                                        <a href='#'>Товары для детей и игрушки</a>
                                    </li>
                                    <li>
                                        <a href='#'>Красота и здоровье</a>
                                    </li>
                                    <li>
                                        <a href='#'>Часы и украшения</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Для дома и дачи
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Ремонт и строительство</a>
                                    </li>
                                    <li>
                                        <a href='#'>Мебель и интерьер</a>
                                    </li>
                                    <li>
                                        <a href='#'>Бытовая техника</a>
                                    </li>
                                    <li>
                                        <a href='#'>Продукты питания</a>
                                    </li>
                                    <li>
                                        <a href='#'>Растения</a>
                                    </li>
                                    <li>
                                        <a href='#'>Посуда и товары для кухни</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Электроника
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Телефоны</a>
                                    </li>
                                    <li>
                                        <a href='#'>Аудио и видео</a>
                                    </li>
                                    <li>
                                        <a href='#'>Товары для компьютера</a>
                                    </li>
                                    <li>
                                        <a href='#'>Игры, приставки и программы</a>
                                    </li>
                                    <li>
                                        <a href='#'>Ноутбуки</a>
                                    </li>
                                    <li>
                                        <a href='#'>Настольные компьютеры</a>
                                    </li>
                                    <li>
                                        <a href='#'>Фототехника</a>
                                    </li>
                                    <li>
                                        <a href='#'>Планшеты и электронные книги</a>
                                    </li>
                                    <li>
                                        <a href='#'>Оргтехника и расходники</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Хобби и отдых
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Билеты и путешествия</a>
                                    </li>
                                    <li>
                                        <a href='#'>Велосипеды</a>
                                    </li>
                                    <li>
                                        <a href='#'>Книги и журналы</a>
                                    </li>
                                    <li>
                                        <a href='#'>Коллекционирование</a>
                                    </li>
                                    <li>
                                        <a href='#'>Музыкальные</a>
                                    </li>
                                    <li>
                                        <a href='#'>инструменты</a>
                                    </li>
                                    <li>
                                        <a href='#'>Охота и рыбалка</a>
                                    </li>
                                    <li>
                                        <a href='#'>Спорт и отдых</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Животные
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Собаки</a>
                                    </li>
                                    <li>
                                        <a href='#'>Кошки</a>
                                    </li>
                                    <li>
                                        <a href='#'>Птицы</a>
                                    </li>
                                    <li>
                                        <a href='#'>Аквариум</a>
                                    </li>
                                    <li>
                                        <a href='#'>Другие животные</a>
                                    </li>
                                    <li>
                                        <a href='#'>Товары для животных</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.dropdownItem}>
                                <ul className='list-reset'>
                                    <li>
                                        <a className={styles.dropdownTitle} href='#'>
                                            Бизнес и оборудование
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>Оборудование для бизнеса</a>
                                    </li>
                                    <li>
                                        <a href='#'>Франшизы</a>
                                    </li>
                                    <li>
                                        <a href='#'>Готовый бизнес</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}