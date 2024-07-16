interface TagItem{
    id: number,
    title: string,
    image: string,
    lists: Array<{
        id: number,
        link: string,
        title: string
    }>
}

export const TAG:TagItem[] = [
    {
        id: 1,
        title: 'Ремонт и стройка',
        image: '/img/slide.png',
        lists: [
            {id:1,link:'example',title:'Стройматериалы'},
            {id:1,link:'example',title:'Инструменты'},
            {id:1,link:'example',title:'Готовые строения и срубы'},
        ]
    },
    {
        id: 2,
        title: 'Ремонт и стройка',
        image: '/img/slide.png',
        lists: [
            {id:1,link:'example',title:'Стройматериалы'},
            {id:1,link:'example',title:'Инструменты'},
            {id:1,link:'example',title:'Готовые строения и срубы'},
        ]
    },
    {
        id: 3,
        title: 'Ремонт и стройка',
        image: '/img/slide.png',
        lists: [
            {id:1,link:'example',title:'Стройматериалы'},
            {id:1,link:'example',title:'Инструменты'},
            {id:1,link:'example',title:'Готовые строения и срубы'},
        ]
    },
]