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
    formState: { errors }
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: 'onTouched',
  });

  const handleNext = async () => {
    let fieldsToValidate: (keyof WaitlistFormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ['fullName', 'email', 'phoneNumber', 'ageRange', 'gender', 'currentLevel'];
    } else if (step === 2) {
      fieldsToValidate = ['learningGoals', 'interestedAreas', 'previousProject'];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
      window.scrollTo({ top: document.getElementById('waitlist-form')?.offsetTop! - 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: document.getElementById('waitlist-form')?.offsetTop! - 100, behavior: 'smooth' });
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
    } catch (error) {
      setServerError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return <SuccessState />;
  }

  return (
    <div id="waitlist-form" className="w-full bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-xl)] p-6 md:p-10 shadow-lg">
      <StepIndicator currentStep={step} />

      {serverError && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-md text-red-500 text-sm text-center animate-in fade-in">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="min-h-[300px]">
          {step === 1 && <PersonalInfoStep register={register} errors={errors} />}
          {step === 2 && <LearningGoalsStep register={register} errors={errors} setValue={setValue} watch={watch} />}
          {step === 3 && <CareerVisionStep register={register} errors={errors} />}
        </div>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-[var(--border-default)]">
          <button
            type="button"
            onClick={handleBack}
            className={`px-6 py-2 rounded-md font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${step === 1 ? 'invisible' : 'visible'}`}
          >
            &larr; Back
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-primary)] font-bold rounded-[var(--radius-md)] transition-colors shadow-md flex items-center gap-2"
            >
              Continue &rarr;
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-primary)] font-bold rounded-[var(--radius-md)] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
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
  );
}
