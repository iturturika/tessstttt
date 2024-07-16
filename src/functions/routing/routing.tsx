"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface RoutingProps{
    url: string
}

export function Routing({ url }:RoutingProps) {
    const router = useRouter();


    // КОД ДЛЯ МОБ ВЕРСИИ, В APP/LAYOUT ПОМЕНЯТЬ ССЫЛКУ
    // useEffect(() => {
    //   const isTouchDevice = (): boolean => {
    //     return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    //   };
    //
    //   if (isTouchDevice()) {
    //     window.location.href = url;
    //   }
    // }, []);

    return null;
};