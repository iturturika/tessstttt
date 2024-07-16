interface CardData {
    id: number;
    title: string;
    link: string;
    imgPath: string;
    condition: boolean;
  }
  
  interface StoriesData {
    id: number;
    cards: CardData[];
  }
  
  export const STORIES: StoriesData[] = [
    {
      id: 1,
      cards: [
        { id: 1, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 2, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 3, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 4, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 5, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 6, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 7, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 8, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false }
      ]
    },
    {
      id: 2,
      cards: [
        { id: 9, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 10, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 11, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 12, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 13, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 14, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 15, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false }
      ]
    },
    {
      id: 3,
      cards: [
        { id: 16, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 17, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 18, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 19, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 20, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 21, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 22, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false }
      ]
    },
    {
      id: 4,
      cards: [
        { id: 23, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 24, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 25, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 26, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 27, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 28, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 29, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false },
        { id: 30, title: 'Оригиналы в премиуме', link: '#stories1', imgPath: '/img/stories.png', condition: false }
      ]
    }
  ];
  