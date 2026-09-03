import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { WaitlistFormData } from '@/lib/schema';

interface Props {
  register: UseFormRegister<WaitlistFormData>;
  errors: FieldErrors<WaitlistFormData>;
}

export default function PersonalInfoStep({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-left mb-2">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Tell us about yourself</h3>
        <p className="text-[var(--text-secondary)] text-sm">We'll use this to personalise your learning journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm font-medium text-[var(--text-primary)] text-left">Full Name</label>
          <input 
            id="fullName"
            type="text"
            placeholder="e.g. Amara Okafor"
            className={`h-[var(--input-height)] px-[var(--input-px)] bg-[var(--bg-input)] border ${errors.fullName ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
            {...register('fullName')}
          />
          {errors.fullName && <span className="text-red-500 text-xs text-left">{errors.fullName.message}</span>}
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)] text-left">Email Address</label>
          <input 
            id="email"
            type="email"
            placeholder="you@example.com"
            className={`h-[var(--input-height)] px-[var(--input-px)] bg-[var(--bg-input)] border ${errors.email ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
            {...register('email')}
          />
          {errors.email && <span className="text-red-500 text-xs text-left">{errors.email.message}</span>}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-sm font-medium text-[var(--text-primary)] text-left">Phone Number</label>
          <input 
            id="phoneNumber"
            type="tel"
            placeholder="+234 800 000 0000"
            className={`h-[var(--input-height)] px-[var(--input-px)] bg-[var(--bg-input)] border ${errors.phoneNumber ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && <span className="text-red-500 text-xs text-left">{errors.phoneNumber.message}</span>}
        </div>

        {/* Age Range */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ageRange" className="text-sm font-medium text-[var(--text-primary)] text-left">Age Range</label>
          <select 
            id="ageRange"
            className={`h-[var(--input-height)] px-[var(--input-px)] bg-[var(--bg-input)] border ${errors.ageRange ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
            {...register('ageRange')}
          >
            <option value="" disabled>Select range</option>
            <option value="Under 18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
          </select>
          {errors.ageRange && <span className="text-red-500 text-xs text-left">{errors.ageRange.message}</span>}
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label htmlFor="gender" className="text-sm font-medium text-[var(--text-primary)] text-left">Gender</label>
          <select 
            id="gender"
            className={`h-[var(--input-height)] px-[var(--input-px)] bg-[var(--bg-input)] border ${errors.gender ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
            {...register('gender')}
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
          {errors.gender && <span className="text-red-500 text-xs text-left">{errors.gender.message}</span>}
        </div>

        {/* Current Level */}
        <div className="flex flex-col gap-2">
          <label htmlFor="currentLevel" className="text-sm font-medium text-[var(--text-primary)] text-left">Current Level / Class</label>
          <select 
            id="currentLevel"
            className={`h-[var(--input-height)] px-[var(--input-px)] bg-[var(--bg-input)] border ${errors.currentLevel ? 'border-red-500' : 'border-[var(--border-input)]'} rounded-[var(--radius-md)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
            {...register('currentLevel')}
          >
            <option value="" disabled>Select level</option>
            <option value="High School">High School</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Professional">Professional</option>
            <option value="Other">Other</option>
          </select>
          {errors.currentLevel && <span className="text-red-500 text-xs text-left">{errors.currentLevel.message}</span>}
        </div>
      </div>
    </div>
  );
}
