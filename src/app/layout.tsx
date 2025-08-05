'use client';

import { Roboto } from 'next/font/google';
import { TodoListContextProvider } from '@/features/context/TodoContext';
import { Popup } from '@/features/components/ui/Popup/Popup';
import { PopupTutorial } from '@/features/components/ui/PopupTutorial/PopupTutorial';
import '@/style/globals.scss';

const robotoSans = Roboto({
    weight: ['100', '400', '700'],
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoSans.variable}`}>
                <TodoListContextProvider>
                    {children}
                    <Popup />
                    <PopupTutorial />
                </TodoListContextProvider>
            </body>
        </html>
    );
}
