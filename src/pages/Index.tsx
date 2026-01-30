import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { PastWorkMarquee } from "@/components/home/PastWorkMarquee";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/shared/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Buildio* | Architecture & Interior Design</title>
        <meta
          name="description"
          content="We blend innovative design with timeless craftsmanship to create environments that inspire and endure. Transform your space with Buildio*."
        />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <PastWorkMarquee />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
