import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import WaitlistSection from "@/components/form/WaitlistSection";
import ProgramBenefits from "@/components/benefits/ProgramBenefits";
import Footer from "@/components/layout/Footer";

import ApplicationForm from "@/components/form/ApplicationForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-clip">
      {/* Top Left Figma Eclipse Glow */}
      <div 
        className="absolute rounded-full pointer-events-none -z-10 blur-[222px]"
        style={{
          width: '380px',
          height: '380px',
          top: '-80px',
          left: '-80px',
          backgroundColor: '#C021FF',
          opacity: 0.16
        }}
      ></div>

      <Header />
      <Hero />
      <WaitlistSection>
        <ApplicationForm />
      </WaitlistSection>
      <ProgramBenefits />
      <Footer />
    </main>
  );
}
