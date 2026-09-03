import React from 'react';

export default function WaitlistSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 bg-[var(--bg-surface)] border-y border-[var(--border-default)]">
      <div className="max-w-[var(--form-max)] mx-auto text-center mb-12">
        <p className="text-[var(--text-brand)] font-semibold text-sm uppercase tracking-wider mb-4">
          — Powered by Partnership —
        </p>
        <h2 className="text-[var(--text-3xl)] md:text-[var(--text-4xl)] font-bold text-[var(--text-primary)] mb-6">
          Build Skills. Shape Your Future.
        </h2>
        <p className="text-[var(--text-base)] text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
          Complete the form below to reserve your spot in the next cohort and start your learning journey.
        </p>
      </div>
      
      <div className="max-w-[var(--form-max)] mx-auto">
        {children}
      </div>
    </section>
  );
}
