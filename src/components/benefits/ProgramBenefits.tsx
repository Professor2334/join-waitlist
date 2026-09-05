import React from 'react';
import { Settings, Globe, CircleDollarSign } from 'lucide-react';

const CustomCheckIcon = ({ size = 24, color = "currentColor", strokeWidth = 2.5, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 3-3h7" />
  </svg>
);

export default function ProgramBenefits() {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Eclipse glow — center-right, spanning heading + cards (293x293, #C021FF at 16%, blur 222) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '329px',
          height: '320px',
          backgroundColor: 'rgba(192, 33, 255, 0.16)',
          filter: 'blur(222px)',
          top: '50%',
          left: '55%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />

      <section className="relative z-10 w-full px-6 md:px-12 py-16 md:py-24 max-w-[var(--container-max)] mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#C084FC]" />
            <span
              className="font-bold text-[#C084FC] uppercase"
              style={{ fontSize: '0.75rem', letterSpacing: '1.2px' }}
            >
              Program Benefits
            </span>
          </div>

          {/* Heading with linear gradient and shimmer effect */}
          <h2
            className="font-black italic bg-clip-text text-transparent"
            style={{
              fontSize: 'var(--text-display-lg)',
              lineHeight: '60px',
              letterSpacing: '-1.5px',
              paddingBottom: '10px',
              backgroundImage: 'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.45) 50%, transparent 100%), linear-gradient(90deg, #FFFFFF 0%, #C084FC 50%, #22D3EE 100%)',
              backgroundSize: '30% 100%, 100% 100%',
              backgroundRepeat: 'no-repeat, no-repeat',
              animation: 'shimmer-sweep 4s linear infinite',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Why Join This Program?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div
            className="col-span-1 row-span-1 flex flex-col transition-transform hover:-translate-y-1 mx-auto"
            style={{
              width: '273.5px',
              height: '331.71px',
              backgroundColor: '#12121A',
              border: '1px solid #1F2937',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#1A1A24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0px 0px 15px 0px rgba(236, 72, 153, 0.30)' }}>
              <CustomCheckIcon size={24} color="#EC4899" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FFFFFF', lineHeight: '28px', marginBottom: '12px' }}>
              Learn Design<br />Thinking
            </h3>
            <p style={{ color: '#9CA3AF', paddingBottom: '0.75rem', lineHeight: '1.6', fontSize: '0.875rem', fontWeight: 'normal' }}>
              Master the 5-stage DT framework — Empathize, Define, Ideate, Prototype, Test — applied to real robotics and AI challenges.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="col-span-1 row-span-1 flex flex-col transition-transform hover:-translate-y-1 mx-auto"
            style={{
              width: '273.5px',
              height: '331.71px',
              backgroundColor: '#12121A',
              border: '1px solid #1F2937',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#1A1A24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0px 0px 15px 0px rgba(74, 222, 128, 0.30)' }}>
              <Settings size={24} color="#4ADE80" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FFFFFF', lineHeight: '28px', marginBottom: '12px' }}>
              Build Real-World<br />Solutions
            </h3>
            <p style={{ color: '#9CA3AF', paddingBottom: '0.75rem', lineHeight: '1.6', fontSize: '0.875rem', fontWeight: 'normal' }}>
              Move beyond theory. Collaborate in teams to prototype and test solutions to actual problems facing communities across Africa.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="col-span-1 row-span-1 flex flex-col transition-transform hover:-translate-y-1 mx-auto"
            style={{
              width: '273.5px',
              height: '331.71px',
              backgroundColor: '#12121A',
              border: '1px solid #1F2937',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#1A1A24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0px 0px 15px 0px rgba(96, 165, 250, 0.30)' }}>
              <Globe size={24} color="#60A5FA" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FFFFFF', lineHeight: '28px', marginBottom: '12px' }}>
              Access Industry<br />Mentorship
            </h3>
            <p style={{ color: '#9CA3AF', paddingBottom: '0.75rem', lineHeight: '1.6', fontSize: '0.875rem', fontWeight: 'normal' }}>
              Get paired with robotics engineers, AI researchers, and product designers from leading tech companies and research labs.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="col-span-1 row-span-1 flex flex-col transition-transform hover:-translate-y-1 mx-auto"
            style={{
              width: '273.5px',
              height: '331.71px',
              backgroundColor: '#12121A',
              border: '1px solid #1F2937',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#1A1A24', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0px 0px 15px 0px rgba(251, 146, 60, 0.30)' }}>
              <CircleDollarSign size={24} color="#FB923C" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#FFFFFF', lineHeight: '28px', marginBottom: '12px' }}>
              Opportunity for<br />Seed Funding
            </h3>
            <p style={{ color: '#9CA3AF', paddingBottom: '0.75rem', lineHeight: '1.6', fontSize: '0.875rem', fontWeight: 'normal' }}>
              Top teams gain access to DTC&apos;s innovation fund and investor network to bring their prototypes to market.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
