import { Routing } from '@/functions/routing/routing'
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Kangaroo",
  description: "Kangaroo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='page'>
      <Head>
        <meta name="viewport" content="width=1315, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='page__body'>
        {children}
        <Routing url='https://google.com' />
      </body>
    </html>
  );
}