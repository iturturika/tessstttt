'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '../link/link';
import styles from './menu.module.scss';
import AuthModal from "@/components/auth/authModal";
import ListingModal from "@/components/listing/listingModal";
import { HandySvg } from "handy-svg";
import { FaUserCircle } from 'react-icons/fa';


export function Menu() {
    const [condition, setCondition] = useState(false);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [openListingModal, setOpenListingModal] = useState(false);
    const [user, setUser] = useState(null);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            let accessToken = localStorage.getItem('access_token');
            if (typeof window !== "undefined") {
                accessToken = localStorage.getItem('access_token');
              }
            console.log('Fetching user data with token:', accessToken);

            if (accessToken) {
                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/client/v1/user/get`,
                        {
                            phone_numbers: true,
                            emails: true,
                            addresses: true
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                'Content-Type': 'application/json'
                            },
                        }
                    );
                    console.log('User data fetched:', response.data);
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                    if (error.response && error.response.status === 401) {
                        await refreshAccessToken();
                    } else if (error.response && error.response.status === 404) {
                        alert('User data endpoint not found. Please check the URL.');
                    } else if (error.response) {
                        alert(`Error: ${error.response.data.message}`);
                    } else {
                        alert(`Error: ${error.message}`);
                    }
                }
            } else {
                console.warn('No access token found.');
            }
        };

        const initializeUser = async () => {
            const accessToken = localStorage.getItem('access_token');
            if (typeof window !== "undefined") {
                accessToken = localStorage.getItem('access_token');
              }
            console.log('Initializing user with access token:', accessToken);

            if (!accessToken) {

            } else {
                await fetchUserData();
            }
        };

        initializeUser();
    }, [isRefreshing]);

    const handleClick = () => {
        setCondition(!condition);
    };

    const handleAuthModalOpen = () => {
        setOpenAuthModal(true);
    };

    const handleAuthModalClose = () => {
        setOpenAuthModal(false);
    };

    const handleListingModalOpen = () => {
        setOpenListingModal(true);
    };

    const handleListingModalClose = () => {
        setOpenListingModal(false);
    };

    return (
        <nav className={styles.menu}>
            <ul className={styles.list + ' list-reset'}>
            </ul>
            <ul className={styles.list + ' list-reset'}>
                {user ? (
                    <>
                        <li className={styles.item}>
                            <FaUserCircle size={24} />
                            <span className={styles.userHi}>Здравствуйте, username</span>
                        </li>
                        <li className={styles.item}>
                            <a href="#" className={styles.link}>
                                <HandySvg src='/img/favorite.svg' width='24' height='24' />
                            </a>
                            <a href="#" className={styles.link}>
                                <HandySvg src='/img/notification.svg' width='24' height='24' />
                            </a>
                            <a href="#" className={styles.link}>
                                <HandySvg src='/img/messenger.svg' width='24' height='24' />
                            </a>
                            <a href="#" className={styles.link}>
                                <HandySvg src='/img/cart.svg' width='24' height='24' />
                            </a>
                        </li>
                        <li className={styles.item}>
                            <button className={styles.exit} onClick={() => {
                                localStorage.removeItem('access_token');
                                localStorage.removeItem('refresh_token');
                                setUser(null);
                            }}>Выйти</button>
                        </li>
                        <li className={styles.item} onClick={handleListingModalOpen}>
                            <a href='#' className={styles.link + ' ' + styles.specialLink}>
                                Разместить объявление
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li className={styles.item} onClick={handleAuthModalOpen}>
                            <Link linkText='Вход и регистрация' linkUrl='#' />
                        </li>
                        <li className={styles.item}>
                            <button onClick={handleAuthModalOpen} className={styles.link + ' ' + styles.specialLink}>
                                Разместить объявление
                            </button>
                        </li>
                    </>
                )}
            </ul>
            <AuthModal open={openAuthModal} handleClose={handleAuthModalClose} setUser={setUser} />
            <ListingModal open={openListingModal} handleClose={handleListingModalClose} />
        </nav>
    );
}