interface ManagementItem{
    title: string,
    path: string
}

export const MANAGEMENT:ManagementItem[] = [
    {
        title: 'Перейти в профиль',
        path: '/img/user-2.png'
    },
    {
        title: 'Заблокировать пользователя',
        path: '/img/dropdown/ban.svg'
    },
    {
        title: 'Оставить отзыв',
        path: '/img/dropdown/review.svg'
    }
]