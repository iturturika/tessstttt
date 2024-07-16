import type { Metadata } from "next";

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
      <body className='page__body'>
        {children}
      </body>
    </html>
  );
}
