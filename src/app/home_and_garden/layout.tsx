// app/home_and_garden/layout.tsx

import React from "react";

export const metadata = {
    title: "Kangaroo",
    description: "Kangaroo",
};

export default function HomeAndGardenLayout({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className='page'>
        <head>
            <meta name="viewport" content="width=1315, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body className='page__body'>
        {children}
        </body>
        </html>
    );
}
