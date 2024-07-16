import { Address } from './components/address/address';
import { Chat } from './components/chat/chat';
import { Description } from './components/description/description';
import { Hero } from './components/hero/hero';
import { Property } from './components/property/property';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useListingStore from '@/store/globalListingStore';

export function Item() {
    const [item, setItem] = useState(null);
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const { listings, fetchListings } = useListingStore();

    useEffect(() => {
        fetchListings();
    }, [fetchListings]);

    useEffect(() => {
        console.log('ID from pathname:', id);
        console.log('Listings:', listings);
        if (id && listings.length > 0) {
            const foundItem = listings.find((listing) => listing.id === id);
            setItem(foundItem);
            console.log("Found item:", foundItem);
        }
    }, [id, listings]);

    return (
        <div>
            {item && (
                <Hero sellerUserId={item.seller_user_id} title={item.title} imgPath='/img/no-image.jpg' />
            )}
            <Address />
            <Property />
            {item && (
                <Description description={item.description} />
            )}
            <Chat />
        </div>
    );
}