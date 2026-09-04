import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { WaitlistFormData } from '@/lib/schema';

interface Props {
  register: UseFormRegister<WaitlistFormData>;
  errors: FieldErrors<WaitlistFormData>;
}

export default function CareerVisionStep({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Question 1 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="careerVision" className="text-base font-bold text-[#6B7280] text-left">What do you hope to achieve in the next 3–5 years?</label>
        <textarea 
          id="careerVision"
          placeholder="Tell us about the career or impact you hope to create."
          className={`min-h-[120px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.careerVision ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-y`}
          {...register('careerVision')}
        />
        {errors.careerVision && <span className="text-red-500 text-xs text-left">{errors.careerVision.message}</span>}
      </div>

      {/* Question 2 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="programHelp" className="text-base font-bold text-[#6B7280] text-left">How do you see this program helping you get there?</label>
        <textarea 
          id="programHelp"
          placeholder="Tell us how you think this program could support your goals."
          className={`min-h-[120px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.programHelp ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-y`}
          {...register('programHelp')}
        />
        {errors.programHelp && <span className="text-red-500 text-xs text-left">{errors.programHelp.message}</span>}
      </div>

      {/* Question 3 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="desiredImpact" className="text-base font-bold text-[#6B7280] text-left">What kind of impact would you like to create?</label>
        <textarea 
          id="desiredImpact"
          placeholder="What problem would you like to help solve in your community, industry, or beyond?"
          className={`min-h-[120px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.desiredImpact ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-y`}
          {...register('desiredImpact')}
        />
        {errors.desiredImpact && <span className="text-red-500 text-xs text-left">{errors.desiredImpact.message}</span>}
      </div>

    </div>
  );
}
