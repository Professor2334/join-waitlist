import React from 'react';

export default function WaitlistSection({ children }: { children: React.ReactNode }) {
  return (
    <section 
      id="application"
      className="w-full px-6 md:px-12 py-16 md:py-24 bg-[#070812] border-t border-white/[0.08]"
      style={{ scrollMarginTop: 'var(--header-height)' }}
    >
      <div className="max-w-[var(--form-max)] mx-auto text-center mb-12">
        <p className="text-[#D378FD]/90 font-normal uppercase tracking-wider mb-4" style={{ fontSize: '0.875rem', fontFamily: 'var(--font-primary), Poppins, sans-serif' }}>
          — Powered by Partnership —
        </p>
        <h2 className="font-bold text-white mb-6" style={{ fontSize: 'var(--text-display-md)', lineHeight: '1.1', fontFamily: 'var(--font-primary), Poppins, sans-serif' }}>
          Build Skills. Shape Your Future.
        </h2>
        <p className="font-normal text-[#A19CB0] leading-relaxed max-w-xl mx-auto" style={{ fontSize: '0.875rem', fontFamily: 'var(--font-abeezee), sans-serif' }}>
          Complete the form below to reserve your spot in the next cohort and start your learning journey.
        </p>
      </div>
      
      <div className="max-w-[var(--form-max)] mx-auto">
        {children}
      </div>
    </section>
  );
}
