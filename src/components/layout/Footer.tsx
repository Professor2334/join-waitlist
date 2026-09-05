import React from 'react';


const XIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"/>
  </svg>
);

const LogoGridIcon = ({ size = 62, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="smartLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#858388" />
        <stop offset="100%" stopColor="#D22690" />
      </linearGradient>
    </defs>
    <g transform="translate(27, 6) skewX(-15)" fill="url(#smartLogoGrad)">
      <rect x="0" y="0" width="45" height="45" rx="8" />
      <rect x="53" y="15" width="30" height="30" rx="6" />
      <rect x="0" y="53" width="30" height="30" rx="6" />
      <rect x="38" y="53" width="45" height="45" rx="8" />
    </g>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black font-sans mt-24">
      {/* Logo Section */}
      <div className="py-16 flex justify-center items-center gap-4">
        <LogoGridIcon size={62} />
        <span 
          className="font-medium text-black" 
          style={{ 
            fontFamily: "'Poppins', sans-serif",
            fontSize: '3.875rem', 
            letterSpacing: '-0.05em', 
            lineHeight: '1' 
          }}
        >
          SMART.inc
        </span>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-gray-200" />

      {/* Links & Socials Section */}
      <div className="max-w-[var(--container-max)] mx-auto py-12 px-6">
        <div className="flex justify-center">
          
          {/* LINKS Column (Right Aligned) */}
          <div className="flex-1 flex flex-col items-end pr-16 md:pr-24 lg:pr-32 border-r border-gray-200 gap-4">
            <h4 
              className="mb-2" 
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '-0.03em' }}
            >
              LINKS
            </h4>
            <a href="#" className="text-gray-600 hover:text-black transition-colors" style={{ fontSize: '1rem', fontWeight: 'normal', letterSpacing: '-0.03em' }}>How-it-works</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors" style={{ fontSize: '1rem', fontWeight: 'normal', letterSpacing: '-0.03em' }}>Programs</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors" style={{ fontSize: '1rem', fontWeight: 'normal', letterSpacing: '-0.03em' }}>The Team</a>
          </div>

          {/* SOCIALS Column (Left Aligned) */}
          <div className="flex-1 flex flex-col items-start pl-16 md:pl-24 lg:pl-32 gap-4">
            <h4 
              className="mb-2"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '-0.03em' }}
            >
              SOCIALS
            </h4>
            
            <a href="#" className="text-gray-600 hover:text-black transition-colors flex items-center gap-3" style={{ fontSize: '1rem', fontWeight: 'normal', letterSpacing: '-0.03em' }}>
              <XIcon size={16} />
              <span>Twitter</span>
            </a>
            
            <a href="#" className="text-gray-600 hover:text-black transition-colors flex items-center gap-3" style={{ fontSize: '1rem', fontWeight: 'normal', letterSpacing: '-0.03em' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>
            
            <a href="#" className="text-gray-600 hover:text-black transition-colors flex items-center gap-3" style={{ fontSize: '1rem', fontWeight: 'normal', letterSpacing: '-0.03em' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>Instagram</span>
            </a>
          </div>
          
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-gray-200" />

      {/* Copyright */}
      <div className="py-8 flex justify-center">
        <p style={{ color: '#222222', fontSize: '1rem', fontFamily: "'Inter', sans-serif", fontWeight: '500', letterSpacing: '-0.03em' }}>
          © 2025 SMART.INC All rights reserved.
        </p>
      </div>
    </footer>
  );
}
