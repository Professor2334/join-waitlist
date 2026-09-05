import React from 'react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 pt-24 pb-12 md:pt-8 md:pb-20 max-w-[var(--container-max)] mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          {/* Status Pill */}
          <div className="flex items-center gap-2.5 bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-full px-4 py-2.5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
            <span className="text-sm text-[#06B6D4] font-medium tracking-wide">Application is now open</span>
          </div>

          <h1 
            className="font-semibold mb-[34px] leading-[1.1] md:leading-[3.875rem]" 
            style={{ 
              fontFamily: 'var(--font-primary), Poppins, sans-serif',
              fontSize: 'var(--text-hero)',
              letterSpacing: '-0.0625rem'
            }}
          >
            Where Bold Ideas <br />
            <span className="text-gradient-hero shimmer-text">
              Meet Meaningful
            </span> <br />
            Impact
          </h1>
          
          <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-relaxed mb-[34px]">
            Join a transformative Design Thinking program built for Robotics & <br className="hidden md:block" />
            AI pioneers ready to turn bold ideas into meaningful, lasting <br className="hidden md:block" />
            impact across Africa.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-3 md:gap-[32px] mb-[34px]">
            <span className="px-[18px] py-[12px] bg-[#FCF9FF]/5 border border-[#D2D2D2]/27 rounded-[9px] text-[#CEBAD8]/89 text-[1rem] font-semibold tracking-wide">
              SMART.INC
            </span>
            <span className="text-[#8B7E9F] text-[0.875rem] font-semibold tracking-wide">X</span>
            <span className="px-[18px] py-[12px] bg-[#FCF9FF]/5 border border-[#D2D2D2]/27 rounded-[9px] text-[#CEBAD8]/89 text-[1rem] font-semibold tracking-wide">
              SMART.INC
            </span>
            <span className="text-[#A19CB0] text-[0.875rem]">
              — Powered by Partnership
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-[8px] w-full md:w-auto relative">
            {/* Lower Eclipse Glow */}
            <div 
              className="absolute rounded-full pointer-events-none -z-10 blur-[222px]"
              style={{
                width: '293px',
                height: '293px',
                bottom: '-220px',
                left: '-40px',
                backgroundColor: '#C021FF',
                opacity: 0.16
              }}
            ></div>
            <a 
              href="#application"
              className="cursor-pointer w-full md:w-[189px] h-[51px] bg-[#6900FF] hover:bg-[#5A00DB] shadow-[0px_-1px_27.8px_0px_rgba(105,0,255,0.56)] text-white font-normal rounded-[9px] transition-all flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#D946EF]/50"
              style={{ fontFamily: 'var(--font-abeezee), sans-serif' }}
            >
              Join the Waitlist &rarr;
            </a>
            <button 
              className="cursor-pointer w-full md:w-[151px] h-[51px] px-[32px] py-[16px] bg-[#FCF9FF]/0 border border-[#D2D2D2]/27 text-[#CEBAD8]/89 font-normal rounded-[9px] transition-all duration-300 ease-in-out hover:bg-[#FCF9FF]/10 hover:text-white hover:border-[#D2D2D2]/50 flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#D946EF]/50"
              style={{ fontFamily: 'var(--font-abeezee), sans-serif' }}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="w-full z-10 mt-12 lg:mt-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
