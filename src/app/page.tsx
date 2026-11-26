import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import AboutPinSection from "@/components/AboutPinSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import SkillsSection from "@/components/SkillsSection";
import ExpandSlider from "@/components/reveal-kit/ExpandSlider";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { PROCESS_SLIDES } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PillarsSection />
        <AboutPinSection />
        <PortfolioShowcase />
        <SkillsSection />
        <ExpandSlider
          id="process"
          kicker="Methodology"
          heading="Search & Store Architecture"
          intro="Every high-growth project combines four compounding phases — moving seamlessly from keyword intelligence and WordPress/Shopify engineering to durable organic authority."
          slides={PROCESS_SLIDES}
        />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
