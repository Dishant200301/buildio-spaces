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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const otherServices = slug ? getOtherServices(slug) : [];
  const { ref, isVisible } = useScrollAnimation();

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Buildio*</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <Navbar />

      <main className="pt-32">
        <section className="py-12 px-4">
          <div className="container max-w-5xl">
            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="mb-8 rounded-full"
            >
              <Link to="/#services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to services
              </Link>
            </Button>

            {/* Title & Description */}
            <h1
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0",
                isVisible && "animate-fade-in-up opacity-100"
              )}
            >
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              {service.shortDescription}
            </p>

            {/* Hero Image */}
            <div className="rounded-3xl overflow-hidden aspect-video bg-card mb-16">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {service.sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="py-20 px-4">
          <div className="container">
            <SectionHeader
              title="Explore other services"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((otherService) => (
                <OtherServiceCard key={otherService.slug} service={otherService} />
              ))}
            </div>
          </div>
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
  const Icon = service.icon;

  return (
    <div
      className="relative bg-card rounded-3xl p-8 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Image */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          isHovered ? "translate-x-0 opacity-30" : "translate-x-full opacity-0"
        )}
      >
        <img
          src={service.cardImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-foreground" />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-2">
          {service.shortDescription}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all"
        >
          <span className="glass px-4 py-2 rounded-full text-sm">
            View in detail
          </span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
