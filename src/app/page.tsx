import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Bio from "@/components/landing/Bio";
import Services from "@/components/landing/Services";
import Booking from "@/components/landing/Booking";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-soft-gradient text-text-main dark:text-gray-200 font-display transition-colors duration-300">
      <Navbar />
      <Hero />
      <Bio />
      <Services />
      <Booking />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
