import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { WaitlistFormData } from '@/lib/schema';
import { ChevronDown } from 'lucide-react';

interface Props {
  register: UseFormRegister<WaitlistFormData>;
  errors: FieldErrors<WaitlistFormData>;
}

export default function PersonalInfoStep({ register, errors }: Props) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-left mb-2">
        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Tell us about yourself</h3>
        <p className="text-[var(--text-secondary)] text-sm">We&apos;ll use this to personalise your learning journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm font-medium text-[#6B7280] text-left">Full Name</label>
          <input 
            id="fullName"
            type="text"
            placeholder="e.g. Amara Okafor"
            autoComplete="off"
            className={`h-[54px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.fullName ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-white text-[1rem] placeholder:text-[#4B5563] placeholder:font-normal focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
            style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
            {...register('fullName')}
          />
          {errors.fullName && <span className="text-red-500 text-xs text-left">{errors.fullName.message}</span>}
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[#6B7280] text-left">Email Address</label>
          <input 
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="off"
            className={`h-[54px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.email ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-white text-[1rem] placeholder:text-[#4B5563] placeholder:font-normal focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
            style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
            {...register('email')}
          />
          {errors.email && <span className="text-red-500 text-xs text-left">{errors.email.message}</span>}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-sm font-medium text-[#6B7280] text-left">Phone Number</label>
          <input 
            id="phoneNumber"
            type="tel"
            placeholder="+234 800 000 0000"
            autoComplete="off"
            className={`h-[54px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.phoneNumber ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-white text-[1rem] placeholder:text-[#4B5563] placeholder:font-normal focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
            style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && <span className="text-red-500 text-xs text-left">{errors.phoneNumber.message}</span>}
        </div>

        {/* Age Range */}
        <div className="flex flex-col gap-2">
          <label htmlFor="ageRange" className="text-sm font-medium text-[#6B7280] text-left">Age Range</label>
          <div className="relative w-full">
            <select 
              id="ageRange"
              defaultValue=""
              className={`w-full h-[54px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.ageRange ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-white text-[1rem] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
              style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
              {...register('ageRange')}
            >
              <option value="" disabled className="text-white text-[1rem]">Select age</option>
              <option value="Under 18" className="text-white bg-[#1A1A22] text-[1rem]">Under 18</option>
              <option value="18-24" className="text-white bg-[#1A1A22] text-[1rem]">18-24</option>
              <option value="25-34" className="text-white bg-[#1A1A22] text-[1rem]">25-34</option>
              <option value="35-44" className="text-white bg-[#1A1A22] text-[1rem]">35-44</option>
              <option value="45+" className="text-white bg-[#1A1A22] text-[1rem]">45+</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#374151] pointer-events-none" size={20} />
          </div>
          {errors.ageRange && <span className="text-red-500 text-xs text-left">{errors.ageRange.message}</span>}
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label htmlFor="gender" className="text-sm font-medium text-[#6B7280] text-left">Gender</label>
          <div className="relative w-full">
            <select 
              id="gender"
              defaultValue=""
              className={`w-full h-[54px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.gender ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-white text-[1rem] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
              style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
              {...register('gender')}
            >
              <option value="" disabled className="text-white text-[1rem]">Select gender</option>
              <option value="Male" className="text-white bg-[#1A1A22] text-[1rem]">Male</option>
              <option value="Female" className="text-white bg-[#1A1A22] text-[1rem]">Female</option>
              <option value="Prefer not to say" className="text-white bg-[#1A1A22] text-[1rem]">Prefer not to say</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#374151] pointer-events-none" size={20} />
          </div>
          {errors.gender && <span className="text-red-500 text-xs text-left">{errors.gender.message}</span>}
        </div>

        {/* Current Level */}
        <div className="flex flex-col gap-2">
          <label htmlFor="currentLevel" className="text-sm font-medium text-[#6B7280] text-left">Current Level / Class</label>
          <div className="relative w-full">
            <select 
              id="currentLevel"
              defaultValue=""
              className={`w-full h-[54px] px-[16px] pt-[17px] pb-[16px] bg-[#1A1A22] border ${errors.currentLevel ? 'border-red-500' : 'border-white/[0.1]'} rounded-[var(--radius-md)] text-white text-[1rem] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none`}
              style={{ fontFamily: 'Nimbus Sans, sans-serif' }}
              {...register('currentLevel')}
            >
              <option value="" disabled className="text-white text-[1rem]">Select level</option>
              <option value="High School" className="text-white bg-[#1A1A22] text-[1rem]">High School</option>
              <option value="Undergraduate" className="text-white bg-[#1A1A22] text-[1rem]">Undergraduate</option>
              <option value="Graduate" className="text-white bg-[#1A1A22] text-[1rem]">Graduate</option>
              <option value="Professional" className="text-white bg-[#1A1A22] text-[1rem]">Professional</option>
              <option value="Other" className="text-white bg-[#1A1A22] text-[1rem]">Other</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#374151] pointer-events-none" size={20} />
          </div>
          {errors.currentLevel && <span className="text-red-500 text-xs text-left">{errors.currentLevel.message}</span>}
        </div>
      </div>
    </div>
  );
}
