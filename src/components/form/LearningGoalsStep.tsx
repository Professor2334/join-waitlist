import React from 'react';
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { WaitlistFormData } from '@/lib/schema';
import { Check } from 'lucide-react';

interface Props {
  register: UseFormRegister<WaitlistFormData>;
  errors: FieldErrors<WaitlistFormData>;
  setValue: UseFormSetValue<WaitlistFormData>;
  watch: UseFormWatch<WaitlistFormData>;
}

const INTEREST_OPTIONS = [
  "Design Thinking",
  "Robotics",
  "Artificial Intelligence",
  "Product Design",
  "Entrepreneurship",
  "Innovation",
  "Other"
];

export default function LearningGoalsStep({ register, errors, setValue, watch }: Props) {
  const selectedAreas = watch('interestedAreas') || [];

  const toggleArea = (area: string) => {
    if (selectedAreas.includes(area)) {
      setValue('interestedAreas', selectedAreas.filter(a => a !== area), { shouldValidate: true });
    } else {
      setValue('interestedAreas', [...selectedAreas, area], { shouldValidate: true });
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Question 1 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="learningGoals" className="text-base font-bold text-[var(--text-primary)] text-left">What do you hope to learn from this program?</label>
        <textarea 
          id="learningGoals"
          placeholder="Tell us what skills, knowledge, or experience you'd like to gain."
          className={`min-h-[120px] p-[var(--input-px)] bg-[var(--bg-input)] border ${errors.learningGoals ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-y`}
          {...register('learningGoals')}
        />
        {errors.learningGoals && <span className="text-red-500 text-xs text-left">{errors.learningGoals.message}</span>}
      </div>

      {/* Question 2: Multi-select */}
      <div className="flex flex-col gap-3">
        <label className="text-base font-bold text-[var(--text-primary)] text-left">Which areas are you most interested in?</label>
        <div className="flex flex-wrap gap-3">
          {INTEREST_OPTIONS.map((area) => {
            const isSelected = selectedAreas.includes(area);
            return (
              <button
                type="button"
                key={area}
                onClick={() => toggleArea(area)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                  isSelected 
                    ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-[var(--text-primary)]' 
                    : 'bg-transparent border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]'
                }`}
              >
                {isSelected && <Check size={14} />}
                {area}
              </button>
            );
          })}
        </div>
        {/* Hidden input to register the array field for validation if needed, though setValue handles it */}
        {errors.interestedAreas && <span className="text-red-500 text-xs text-left">{errors.interestedAreas.message}</span>}
      </div>

      {/* Question 3 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="previousProject" className="text-base font-bold text-[var(--text-primary)] text-left">Have you worked on a project you're proud of? <span className="text-[var(--text-muted)] font-normal text-sm">(Optional)</span></label>
        <textarea 
          id="previousProject"
          placeholder="Tell us briefly about a project, idea, or problem you've worked on."
          className={`min-h-[120px] p-[var(--input-px)] bg-[var(--bg-input)] border ${errors.previousProject ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-y`}
          {...register('previousProject')}
        />
        {errors.previousProject && <span className="text-red-500 text-xs text-left">{errors.previousProject.message}</span>}
      </div>

    </div>
  );
}
