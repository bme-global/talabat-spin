'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import wheel from '@/public/images/talabat/wheel.png';
import ring from '@/public/images/talabat/ring.png';

export default function TalabatSpin() {
    const [rotation, setRotation] = useState(0);
    const [winningObject, setWinningObject] = useState<string | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const wheelRef = useRef<HTMLImageElement | null>(null);

    const objects = [
        'Talabat EGP 70 Voucher',
        'Everyday Roastery Cookies',
        'Pin',
        'Mug',
        'Drawstring Bag',
        'Keychain',
        'Everyday Roastery Cookies',
        'Talabat EGP 70 Voucher',
        'Mug',
        'Pin',
        'Keychain',
        'Drawstring Bag',
    ];

    const reversedObjects = objects.reverse();

    const spinWheel = () => {
        if (isSpinning) {
            setRotation(0);
            setWinningObject(null);
            setIsSpinning(false);
        } else {
            const newRotation = rotation + 720 + Math.floor(Math.random() * 360);
            setRotation(newRotation);

            const winningSection = Math.floor((newRotation % 360) / 30);
            setTimeout(() => {
                setWinningObject(reversedObjects[winningSection]);
                setIsSpinning(true);
            }, 1000);
        }
    };

    return (
        <main className='flex min-h-screen flex-col justify-center items-center p-8'>
            <h2 className='text-xl font-bold uppercase'>{isSpinning ? 'Tap to reset' : 'Tap to spin'}</h2>
            <div className='relative aspect-square max-w-xl w-full overflow-hidden' onClick={spinWheel}>
                <Image
                    src={wheel}
                    alt='Wheel'
                    className='absolute transition-all ease-out duration-1000'
                    style={{ transform: `scale(0.95) rotate(${rotation}deg)` }}
                    ref={wheelRef}
                />
                <Image src={ring} alt='Ring' className='absolute inset-0 rotate-[1deg]' />
            </div>
            <p className='text-lg uppercase'>{winningObject ? '----You won----' : '\u00A0'}</p>
            <p className='text-2xl font-bold text-orange-600'>{winningObject ? winningObject : '\u00A0'}</p>
        </main>
    );
}
