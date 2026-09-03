import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import WaitlistSection from "@/components/form/WaitlistSection";
import ProgramBenefits from "@/components/benefits/ProgramBenefits";
import Footer from "@/components/layout/Footer";

import ApplicationForm from "@/components/form/ApplicationForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Top Left Figma Eclipse Glow */}
      <div 
        className="absolute rounded-full pointer-events-none -z-10 blur-[90px]"
        style={{
          width: '293px',
          height: '293px',
          top: '-55px',
          left: '-36px',
          backgroundColor: '#C021FF',
          opacity: 0.26
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
