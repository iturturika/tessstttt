'use client';

import { useEffect } from 'react';
import useListingStore from '@/store/globalListingStore';
import useCategoryStore from '@/store/categoriesStore';
import { Card } from '@/elements/catalog/card/card';
import styles from './catalog.module.scss';

function Catalog({ sectionTitle, padding = '0' }) {
    const { fetchCategories, logCategoryNames } = useCategoryStore();
    const { listings, fetchListings } = useListingStore();

    useEffect(() => {
        fetchListings();
    }, [fetchListings]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchCategories();
            logCategoryNames();
        };

        fetchData();
    }, [fetchCategories, logCategoryNames]);

    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.inner} style={{ padding }}>
                    <div className={styles.title}>
                        {sectionTitle}
                    </div>
                    <ul className={'list-reset ' + styles.list}>
                        {listings.length > 0 ? (
                            listings.map((listing) => (
                                <li key={listing.id} className={styles.item}>
                                    <Card
                                        link={`/item/${listing.id}`}
                                        imgPath='/img/no-image.jpg'
                                        title={listing.title}
                                        price={parseInt(listing.price, 10)}
                                        oldPrice={null}
                                        address='Location'
                                        date='Date'
                                    />
                                </li>
                            ))
                        ) : (
                            <li className={styles.item}>
                                <p>No listings available</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Catalog;
