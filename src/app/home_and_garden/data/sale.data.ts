interface SaleItem {
  id: number;
  link: string;
  img: string;
  imgWebp?: string;
  title: string;
  price: number;
  oldPrice: number;
  address: string;
  date: string;
}

export const SALE: SaleItem[] = [
  {
    id: 1,
    link: '/goods',
    img: '/img/product.png',
    title: 'Белоснежный телевизор Philips 50 дюйм 127 см SMART',
    price: 19999,
    oldPrice: 22000,
    address: 'Краснодар',
    date: '1 неделю назад',
  },
  {
    id: 2,
    link: '/goods',
    img: '/img/product.png',
    title: 'Белоснежный телевизор Philips 50 дюйм 127 см SMART',
    price: 19999,
    oldPrice: 22000,
    address: 'Краснодар',
    date: '1 неделю назад',
  },
  {
    id: 3,
    link: '/goods',
    img: '/img/product.png',
    title: 'Белоснежный телевизор Philips 50 дюйм 127 см SMART',
    price: 19999,
    oldPrice: 22000,
    address: 'Краснодар',
    date: '1 неделю назад',
  },
  {
    id: 4,
    link: '/goods',
    img: '/img/product.png',
    title: 'Белоснежный телевизор Philips 50 дюйм 127 см SMART',
    price: 19999,
    oldPrice: 22000,
    address: 'Краснодар',
    date: '1 неделю назад',
  },
];
