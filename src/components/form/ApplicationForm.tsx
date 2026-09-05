"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistSchema, WaitlistFormData } from '@/lib/schema';
import PersonalInfoStep from './PersonalInfoStep';
import LearningGoalsStep from './LearningGoalsStep';
import CareerVisionStep from './CareerVisionStep';
import StepIndicator from './StepIndicator';
import SuccessState from './SuccessState';
import { submitApplication } from '@/app/actions';

// Fields that belong to each step
const STEP_FIELDS: Record<number, (keyof WaitlistFormData)[]> = {
  1: ['fullName', 'email', 'phoneNumber', 'ageRange', 'gender', 'currentLevel'],
  2: ['learningGoals', 'interestedAreas', 'previousProject'],
  3: ['careerVision', 'programHelp', 'desiredImpact'],
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors, touchedFields }
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: 'onBlur',
    defaultValues: {
      ageRange: undefined as unknown as WaitlistFormData['ageRange'],
      gender: undefined as unknown as WaitlistFormData['gender'],
      currentLevel: undefined as unknown as WaitlistFormData['currentLevel'],
    }
  });

  // Only show errors for fields the user has actually touched on the current step.
  // This prevents Zod (which validates the full schema) from leaking errors into
  // future steps the user hasn't interacted with yet.
  const stepErrors = Object.fromEntries(
    STEP_FIELDS[step]
      .filter((field) => !!(touchedFields as Record<string, boolean>)[field])
      .map((field) => [field, errors[field]])
      .filter(([, err]) => err !== undefined)
  ) as typeof errors;

  const handleNext = async () => {
    const fieldsToValidate = STEP_FIELDS[step];
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
      const formEl = document.getElementById('waitlist-form');
      if (formEl) window.scrollTo({ top: formEl.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    const formEl = document.getElementById('waitlist-form');
    if (formEl) window.scrollTo({ top: formEl.offsetTop - 100, behavior: 'smooth' });
  };

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const result = await submitApplication(data);
      if (result.success) {
        setIsSuccess(true);
      } else {
        setServerError(result.error || "An unexpected error occurred.");
      }
    } catch {
      setServerError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return <SuccessState />;
  }

  return (
    <div id="waitlist-form" className="w-full bg-[#121217]/80 border border-white/[0.08] rounded-[32px] shadow-lg overflow-hidden">
      <StepIndicator currentStep={step} />

      <div className="p-6 md:p-10 pt-8">
        {serverError && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-md text-red-500 text-sm text-center animate-in fade-in">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="w-full" autoComplete="off">
          <div className="min-h-[300px]">
            {step === 1 && <PersonalInfoStep register={register} errors={stepErrors} />}
            {step === 2 && <LearningGoalsStep register={register} errors={stepErrors} setValue={setValue} watch={watch} />}
            {step === 3 && <CareerVisionStep register={register} errors={stepErrors} />}
          </div>

          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/[0.18]">
            <div className="flex items-center gap-6">
              <div className="flex gap-2 items-center pl-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`rounded-full transition-all ${
                      step === s ? 'bg-[#8B5CF6] w-[5px] h-[6px]' : 'bg-[#374151] w-[5px] h-[6px]'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleBack}
                className={`cursor-pointer px-4 py-2 rounded-md font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${step === 1 ? 'hidden' : 'block'}`}
              >
                &larr; Back
              </button>
            </div>

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="cursor-pointer px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-primary)] font-bold rounded-[var(--radius-md)] transition-all flex items-center gap-2"
                style={{ boxShadow: '0px 4px 20px 0px rgba(139, 92, 246, 0.44)' }}
              >
                Continue &rarr;
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-primary)] font-bold rounded-[var(--radius-md)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                style={{ boxShadow: '0px 4px 20px 0px rgba(139, 92, 246, 0.44)' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Submitting...
                  </>
                ) : (
                  <>Submit Application &rarr;</>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
