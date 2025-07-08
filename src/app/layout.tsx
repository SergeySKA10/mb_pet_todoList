import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/style/globals.scss';

const robotoSans = Roboto({
    weight: ['100', '400', '700'],
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Todos List',
    description: 'to do list app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoSans.variable}`}>{children}</body>
        </html>
    );
}
