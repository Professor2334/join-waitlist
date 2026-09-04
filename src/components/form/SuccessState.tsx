import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessState() {
  return (
    <div className="w-full bg-[#121217]/80 border border-white/[0.08] rounded-[32px] p-8 md:p-16 text-center animate-in zoom-in-95 duration-500 flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 size={48} className="text-[var(--color-success)]" />
      </div>
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Application Received</h2>
      <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto leading-relaxed">
        Your application has been successfully submitted. We'll be in touch with the next steps.
      </p>
    </div>
  );
}
