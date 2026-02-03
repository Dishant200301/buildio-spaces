import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getServiceBySlug, getOtherServices, services } from "@/data/services";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeader } from "@/components/shared/SectionHeader";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";
import StaggerText from "@/components/shared/StaggerText";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const otherServices = slug ? getOtherServices(slug) : [];
  // const { ref, isVisible } = useScrollAnimation(); // Removed
  // const { ref: otherServicesRef, isVisible: otherServicesVisible } = useScrollAnimation(); // Removed

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | MonoArch*</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <section className="py-6 lg:py-12 px-6">
          <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
            {/* Back Button */}
            <FadeIn>
              <Link
                to="/#services"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 hover:bg-secondary border-2 border-[#202020] transition-colors mb-12"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </FadeIn>

            {/* Title & Description */}
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mb-12">
                {service.shortDescription}
              </p>
            </FadeIn>

            {/* Hero Image */}
            <FadeIn delay={0.3} className="w-full">
              <div className="rounded-xl md:rounded-2xl lg:rounded-3xl h-[400px] md:h-[500px] lg:h-[600px] mx-auto w-[100%] overflow-hidden aspect-video bg-card mb-16">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full "
                />
              </div>
            </FadeIn>

            {/* Content Sections */}
            <div className="space-y-12 max-w-4xl mx-auto">
              {service.sections.map((section, index) => (
                <FadeIn key={section.id} delay={0.4 + (index * 0.1)}>
                  <div className="">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="py-20 px-6">
          <FadeIn delay={0.2}>
            <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
              <SectionHeader
                title="Explore other services"
                className="mb-12"
                animationType="fade"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {otherServices.map((otherService) => (
                  <OtherServiceCard key={otherService.slug} service={otherService} />
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

interface OtherServiceCardProps {
  service: (typeof services)[0];
}

const OtherServiceCard = ({ service }: OtherServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-[#1f1f1f] rounded-[24px] md:rounded-[32px] p-6 md:p-8 overflow-hidden group min-h-[300px] md:min-h-[360px] flex flex-col items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Image */}
      <div
        className={cn(
          "absolute top-0 right-0 w-[260px] h-[160px] rounded-bl-[100px] rounded-tl-[100px] overflow-hidden transition-all duration-700 ease-out z-0 hidden lg:block",
          isHovered
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src={service.cardImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Icon */}
      <div className="relative z-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#141414] flex items-center justify-center mb-6 md:mb-8">
        <img
          src={service.icon}
          alt=""
          className="w-8 h-8 md:w-14 md:h-14 object-contain invert brightness-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
          {service.title}
        </h3>
        <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md">
          {service.shortDescription}
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-auto">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center justify-center h-10 md:h-12 px-5 md:px-6 rounded-full bg-[#2a2a2a] border-2 border-[#404040] text-white text-sm md:text-md font-medium hover:bg-[#4c4c4c] transition-all w-fit group"
        >
          View in detail
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
