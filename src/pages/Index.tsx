
import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import CoverageArea from "../components/CoverageArea";
import HowItWorks from "../components/HowItWorks";
import ContactSection from "../components/ContactSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    document.title = "Rovanimf Guincho 24h | Socorro Veicular";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <CoverageArea />
      <HowItWorks />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
