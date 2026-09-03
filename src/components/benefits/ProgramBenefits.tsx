import React from 'react';
import { Lightbulb, Wrench, Users, Banknote } from 'lucide-react';

export default function ProgramBenefits() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 max-w-[var(--container-max)] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-[var(--radius-lg)] p-[var(--card-padding)] transition-transform hover:-translate-y-1">
          <div className="w-[var(--card-icon-size)] h-[var(--card-icon-size)] rounded-full bg-red-500/10 flex items-center justify-center mb-6">
            <Lightbulb size={24} className="text-[var(--color-icon-red)]" />
          </div>
          <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-primary)] mb-3">Learn Design Thinking</h3>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)] leading-relaxed">
            Master the 5-stage DT framework — Empathize, Define, Ideate, Prototype, Test — applied to real robotics and AI challenges.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-[var(--radius-lg)] p-[var(--card-padding)] transition-transform hover:-translate-y-1">
          <div className="w-[var(--card-icon-size)] h-[var(--card-icon-size)] rounded-full bg-green-500/10 flex items-center justify-center mb-6">
            <Wrench size={24} className="text-[var(--color-icon-green)]" />
          </div>
          <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-primary)] mb-3">Build Real-World Solutions</h3>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)] leading-relaxed">
            Move beyond theory. Collaborate in teams to prototype and test solutions to actual problems facing communities across Africa.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-[var(--radius-lg)] p-[var(--card-padding)] transition-transform hover:-translate-y-1">
          <div className="w-[var(--card-icon-size)] h-[var(--card-icon-size)] rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
            <Users size={24} className="text-[var(--color-icon-blue)]" />
          </div>
          <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-primary)] mb-3">Access Industry Mentorship</h3>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)] leading-relaxed">
            Get paired with robotics engineers, AI researchers, and product designers from leading tech companies and research labs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-default)] rounded-[var(--radius-lg)] p-[var(--card-padding)] transition-transform hover:-translate-y-1">
          <div className="w-[var(--card-icon-size)] h-[var(--card-icon-size)] rounded-full bg-orange-500/10 flex items-center justify-center mb-6">
            <Banknote size={24} className="text-[var(--color-icon-orange)]" />
          </div>
          <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-primary)] mb-3">Opportunity for Seed Funding</h3>
          <p className="text-[var(--text-sm)] text-[var(--text-secondary)] leading-relaxed">
            Top teams gain access to DTC's innovation fund and investor network to bring their prototypes to market.
          </p>
        </div>

      </div>
    </section>
  );
}
