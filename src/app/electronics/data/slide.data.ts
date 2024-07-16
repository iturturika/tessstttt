interface SlideItem{
    id: number,
    image: string,
    title: string,
    link: string,
    menu: Array<{
        id: number,
        link: string,
        title: string
    }>
    menu2: Array<{
        id: number,
        link: string,
        title: string
    }>
}

export const SLIDE:SlideItem[] = [
    {
        id: 1,
        image: '/img/slide.png',
        title: 'Техника Apple',
        link: '#',
        menu: [
            {
                id: 1,
                link: '#example1',
                title: 'Диваны'
            },
            {
                id: 2,
                link: '#example2',
                title: 'Кровати'
            },
            {
                id: 3,
                link: '#example3',
                title: 'Кресла'
            },
            {
                id: 4,
                link: '#example4',
                title: 'Матрасы'
            },
        ],
        menu2: [
            {
                id: 1,
                link: '#example5',
                title: 'Диваны'
            },
            {
                id: 2,
                link: '#example6',
                title: 'Кровати'
            },
            {
                id: 3,
                link: '#example7',
                title: 'Кресла'
            },
            {
                id: 4,
                link: '#example8',
                title: 'Матрасы'
            },
        ]
    },
    {
        id: 2,
        image: '/img/slide.png',
        title: 'Бытовая техника',
        link: '',
        menu: [
            {
                id: 5,
                link: '#example9',
                title: 'Диваны'
            },
            {
                id: 6,
                link: '#example10',
                title: 'Кровати'
            },
            {
                id: 7,
                link: '#example11',
                title: 'Кресла'
            },
            {
                id: 8,
                link: '#example12',
                title: 'Матрасы'
            },
        ],
        menu2: [
            {
                id: 1,
                link: '#example13',
                title: 'Диваны'
            },
            {
                id: 2,
                link: '#example14',
                title: 'Кровати'
            },
            {
                id: 3,
                link: '#example15',
                title: 'Кресла'
            },
            {
                id: 4,
                link: '#example16',
                title: 'Матрасы'
            },
        ]
    }
]