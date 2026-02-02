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
    <section className="py-12 md:py-20 px-6" id="services">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        <SectionHeader
          badge="Our services"
          title="Services that shape spaces"
          description="Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours."
          className="mb-12 md:mb-16 lg:mb-20"
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 opacity-0",
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

  return (
    <div
      className="relative bg-[#1f1f1f] rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 overflow-hidden group min-h-[300px] lg:min-h-[360px] flex flex-col items-start lg:items-start text-left lg:text-left"
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
      <div className="relative z-10 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-[#141414] flex items-center justify-center mb-6 lg:mb-8">
        <img
          src={service.icon}
          alt=""
          className="w-10 h-10 lg:w-14 lg:h-14 object-contain invert brightness-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl lg:text-2xl text-left font-bold text-white mb-3 lg:mb-4">
          {service.title}
        </h3>
        <p className="text-muted-foreground/80 text-left leading-relaxed mb-6 lg:mb-8 max-w-md text-sm lg:text-base lg:mx-0">
          {service.shortDescription}
        </p>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-auto text-left">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center justify-center text-left h-10 lg:h-12 px-6 rounded-full bg-[#2a2a2a] border-2 border-[#404040] text-white text-sm lg:text-md font-medium hover:bg-[#4c4c4c] transition-all group"
        >
          View in detail
        </Link>
      </div>
    </div>
  );
};
