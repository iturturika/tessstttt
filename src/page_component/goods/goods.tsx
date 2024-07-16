'use client';

import { Address } from './components/address/address';
import { Chat } from './components/chat/chat'
import { Description } from './components/description/description'
import { Hero } from './components/hero/hero'
import { Property } from './components/property/property'

export function Goods() {
    return(
        <div>
            <Hero />
            <Address />
            <Property />
            <Description />
            <Chat />
        </div>
    )
}