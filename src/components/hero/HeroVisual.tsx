import React from 'react';
import { Calendar, Users, Briefcase } from 'lucide-react';

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:ml-auto">
      {/* Background Holographic Glow */}
      <div className="absolute inset-0 rounded-[var(--radius-xl)] bg-[var(--bg-surface)] border border-[var(--border-default)] overflow-hidden glow-primary flex items-center justify-center">
        {/* Abstract Cyan Glow */}
        <div className="absolute inset-0 bg-[var(--gradient-glow-cyan)] opacity-70"></div>
        
        {/* Wireframe / Futuristic elements simulation */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-[60%] h-[60%] border-[0.5px] border-[var(--color-accent-cyan)] opacity-20 rounded-full border-dashed animate-spin-slow"></div>
           <div className="absolute w-[40%] h-[40%] border-[1px] border-[var(--color-primary)] opacity-30 rounded-full"></div>
        </div>
      </div>

      {/* Floating Cards */}
      {/* Card 1: Applications Open */}
      <div className="absolute top-8 -left-4 md:-left-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 shadow-lg backdrop-blur-md w-44 animate-float">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
            <Calendar size={16} className="text-[var(--color-success)]" />
          </div>
          <span className="text-[var(--text-xs)] text-[var(--text-secondary)] font-semibold uppercase tracking-wider">Status</span>
        </div>
        <p className="text-[var(--text-sm)] font-bold text-[var(--text-primary)] leading-tight">Applications<br/>Open</p>
      </div>

      {/* Card 2: Hybrid Program */}
      <div className="absolute bottom-16 -left-4 md:-left-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 shadow-lg backdrop-blur-md w-40 animate-float-delayed">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Briefcase size={16} className="text-[var(--color-accent-blue)]" />
          </div>
          <span className="text-[var(--text-xs)] text-[var(--text-secondary)] font-semibold uppercase tracking-wider">Duration</span>
        </div>
        <p className="text-[var(--text-sm)] font-bold text-[var(--text-primary)]">4 Weeks<br/><span className="font-normal text-[var(--text-secondary)]">Hybrid Program</span></p>
      </div>

      {/* Card 3: Mentorship */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[var(--radius-lg)] p-4 shadow-lg backdrop-blur-md w-48 animate-float">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
            <Users size={16} className="text-[var(--color-primary)]" />
          </div>
          <span className="text-[var(--text-xs)] text-[var(--text-secondary)] font-semibold uppercase tracking-wider">Mentorship</span>
        </div>
        <p className="text-[var(--text-sm)] font-bold text-[var(--text-primary)]">Industry Leaders<br/><span className="text-[var(--text-xs)] font-normal text-[var(--text-secondary)]">Limited Seats</span></p>
      </div>
    </div>
  );
}
