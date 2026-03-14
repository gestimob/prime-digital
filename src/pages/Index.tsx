import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductSection from "@/components/ProductSection";
import TimelineSection from "@/components/TimelineSection";
import SocialProof from "@/components/SocialProof";
import OfferSection from "@/components/OfferSection";
import AuthoritySection from "@/components/AuthoritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scanline-overlay">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductSection />
      <TimelineSection />
      <SocialProof />
      <OfferSection />
      <AuthoritySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
