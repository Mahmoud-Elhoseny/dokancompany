'use client';

import { animate } from 'motion';
import { useEffect, useRef } from 'react';
import LoginForm from '@/components/LoginForm';
import leftSquares from '@/public/assets/left-squares.png';
import rightSquares from '@/public/assets/right-squares.png';
import Image from 'next/image';

export default function Home() {
  const mainDivRef = useRef(null);

  useEffect(() => {
    animate(mainDivRef.current, { opacity: [0, 1] }, { duration: 0.5 });
  }, []);

  return (
    <div className="flex items-center justify-center px-4 py-4 bg-[#FFFFFF]">
      <div
        ref={mainDivRef}
        className="w-full max-w-md space-y-8"
        style={{ opacity: 0 }}
      >
        {/* Left squares decoration */}
        <Image
          src={leftSquares}
          alt="Decoration"
          width={300}
          height={600}
          className="absolute left-0 top-20 z-0"
        />

        {/* Right squares decoration */}
        <Image
          src={rightSquares}
          alt="Decoration"
          width={300}
          height={600}
          className="absolute right-0 top-20 z-0"
        />

        <LoginForm />
      </div>
    </div>
  );
}
