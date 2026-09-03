import React from 'react';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-20 max-w-[var(--container-max)] mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start text-left z-10">
          <h1 className="text-[var(--text-4xl)] md:text-[var(--text-6xl)] lg:text-[var(--text-7xl)] font-bold leading-tight tracking-tight mb-6">
            Where Bold Ideas <br />
            Meet Meaningful <br />
            <span className="text-gradient-hero">Impact</span>
          </h1>
          
          <p className="text-[var(--text-lg)] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
            Join a transformative Design Thinking program built for Robotics & AI pioneers ready to turn bold ideas into meaningful, lasting impact across Africa.
          </p>
          
          <div className="flex items-center gap-2 mb-10 px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-full">
            <span className="text-[var(--text-brand)] font-semibold text-sm">SMART.INC × SMART.INC</span>
            <span className="text-[var(--text-muted)] text-sm">— Powered by Partnership</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-[var(--btn-height-lg)] px-[var(--btn-px-lg)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-primary)] font-semibold rounded-[var(--radius-md)] transition-colors flex items-center justify-center gap-2">
              Join the Waitlist <span>&rarr;</span>
            </button>
            <button className="h-[var(--btn-height-lg)] px-[var(--btn-px-lg)] bg-transparent border border-[var(--border-default)] hover:border-[var(--text-secondary)] text-[var(--text-primary)] font-semibold rounded-[var(--radius-md)] transition-colors flex items-center justify-center">
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
