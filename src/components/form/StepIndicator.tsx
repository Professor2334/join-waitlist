import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { num: 1, label: "Personal Info" },
    { num: 2, label: "Learning Goals" },
    { num: 3, label: "Career Vision" },
  ];

  return (
    <div className="w-full grid grid-cols-3 border-b border-white/[0.08]">
      {steps.map((step) => {
        const isActive = step.num === currentStep;

        return (
          <div 
            key={step.num} 
            className={`flex flex-col items-center justify-center py-6 gap-3 border-b-[3px] relative -mb-[2px] transition-colors ${
              isActive 
                ? "border-[#8B5CF6] bg-[#8B5CF6]/5" 
                : "border-transparent bg-transparent"
            }`}
          >
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                isActive 
                  ? "bg-[#8B5CF6] text-white shadow-[0px_0px_15px_rgba(139,92,246,0.6)]" 
                  : "bg-transparent text-[var(--text-muted)] border border-[var(--border-default)]"
              }`}
            >
              {step.num}
            </div>
            <span 
              className={`text-xs md:text-sm font-medium ${
                isActive 
                  ? "text-[#8B5CF6]" 
                  : "text-[var(--text-muted)]"
              }`}
              style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
