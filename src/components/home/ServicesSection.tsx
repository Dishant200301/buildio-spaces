import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4" id="services">
      <div className="container">
        <SectionHeader
          badge="Our services"
          title="Services that shape spaces"
          description="Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours."
          className="mb-16"
        />

        <div
          ref={ref}
          className={cn(
            "grid md:grid-cols-2 gap-6 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: (typeof services)[0];
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative bg-card rounded-3xl p-8 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Visual Area */}
      <div className="relative h-24 mb-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
          <Icon className="w-8 h-8 text-foreground" />
        </div>

        {/* Hover Image */}
        <div
          className={cn(
            "absolute top-0 right-0 w-32 h-24 rounded-2xl overflow-hidden transition-all duration-500",
            isHovered
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          )}
        >
          <img
            src={service.cardImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-6">{service.shortDescription}</p>

      {/* CTA */}
      <Link
        to={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all group/link"
      >
        <span className="glass px-4 py-2 rounded-full text-sm">
          View in detail
        </span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
