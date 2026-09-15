import React from 'react';
import Image from 'next/image';

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] max-w-[650px] mx-auto lg:ml-auto lg:mr-0">
      <Image
        src="/hero-image.png"
        alt="SMART.INC Hero Visual"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
