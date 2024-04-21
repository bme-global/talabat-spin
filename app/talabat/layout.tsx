import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Talabat Wheel of Fortune',
    description: 'Spin the wheel to win a prize!',
};

export default function TalabatSpinLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
