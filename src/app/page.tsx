import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Bio from "@/components/landing/Bio";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import Booking from "@/components/landing/Booking";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MotionWrap from "@/components/ui/MotionWrap";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-soft-gradient text-text-main dark:text-gray-200 font-display transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      
      <MotionWrap direction="none">
        <Hero />
      </MotionWrap>

      <MotionWrap delay={0.1}>
        <Bio />
      </MotionWrap>

      <MotionWrap delay={0.1}>
        <Services />
      </MotionWrap>

      <MotionWrap delay={0.1}>
        <HowItWorks />
      </MotionWrap>

      <MotionWrap delay={0.1}>
        <Booking />
      </MotionWrap>

      <MotionWrap delay={0.1}>
        <FAQ />
      </MotionWrap>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
