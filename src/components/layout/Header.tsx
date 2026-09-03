import React from 'react';

export default function Header() {
  return (
    <header className="w-full h-[var(--header-height)] flex items-center justify-center relative z-50 bg-[var(--bg-page)]">
      {/* Soft, premium gradient bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>
      
      <div className="w-full max-w-[1400px] px-4 md:px-8 mx-auto flex items-center justify-between relative">
        
        {/* Left: Branding */}
        <div className="flex items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#D946EF] to-[#3B82F6] mr-3"></span>
          <span className="font-bold text-[var(--text-primary)] text-2xl tracking-wide">SMART.INC</span>
        </div>

        {/* Center: Status Pill (Absolutely centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-full px-4 py-2.5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
          <span className="text-sm text-[#06B6D4] font-medium tracking-wide">Application is now open</span>
        </div>

        {/* Right: INC 2026 Mark */}
        <div className="flex items-center gap-4">
          {/* Circular logo/icon */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Arrow */}
              <path d="M5 15 L9.5 10.5 M9.5 10.5 L6.5 10.5 M9.5 10.5 L9.5 13.5" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Left curve ) */}
              <path d="M11 7 Q 14 12 11 17" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Right curve ( */}
              <path d="M19 7 Q 16 12 19 17" stroke="#B91C1C" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          {/* Text block */}
          <div className="flex flex-col items-start justify-center">
            <span className="font-semibold text-[var(--text-primary)] text-2xl leading-none mb-1 tracking-tight">INC</span>
            <div className="flex items-baseline text-[#388E3C]">
              <span className="text-[0.45rem] font-bold mr-[1px] relative -top-[2px]">TM</span>
              <span className="text-[0.8rem] font-medium leading-none">2026</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
