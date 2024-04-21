import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Wheel of Fortune',
    description: 'Spin the wheel to win a prize!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='font-poppins' suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
