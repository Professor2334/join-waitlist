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
    <div className="flex items-center justify-between w-full mb-10 px-4 md:px-12 relative">
      {/* Background track line */}
      <div className="absolute top-4 left-12 right-12 h-[2px] bg-[var(--border-default)] -z-10"></div>
      
      {/* Active track line */}
      <div 
        className="absolute top-4 left-12 h-[2px] bg-[var(--color-primary)] -z-10 transition-all duration-300"
        style={{ width: `calc(${((currentStep - 1) / 2) * 100}% - 3rem)` }}
      ></div>

      {steps.map((step) => {
        const isActive = step.num === currentStep;
        const isCompleted = step.num < currentStep;

        return (
          <div key={step.num} className="flex flex-col items-center gap-2 bg-[var(--bg-surface)] px-2">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                isActive || isCompleted 
                  ? "bg-[var(--color-primary)] text-[var(--text-primary)] shadow-[var(--glow-tab-active)]" 
                  : "bg-[var(--bg-input)] text-[var(--text-muted)] border border-[var(--border-default)]"
              }`}
            >
              {isCompleted ? "✓" : step.num}
            </div>
            <span className={`text-xs md:text-sm font-medium ${isActive ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
