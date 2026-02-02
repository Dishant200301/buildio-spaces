import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-20" id="testimonials">
      <div
        ref={ref}
        className={cn(
          "container px-6 md:px-0 lg:px-10 xl:px-28 mx-auto mb-12 md:mb-20 opacity-0",
          isVisible && "animate-fade-in-up opacity-100"
        )}
      >
        <SectionHeader
          badge="Testimonials"
          title="Hear from our clients"
          description="Real feedback from real clients who trusted us with their spaces."
        />
      </div>

      {/* Scrolling Cards */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-64 lg:w-[450px] bg-gradient-to-r from-background via-background/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 md:w-64 lg:w-[450px] bg-gradient-to-l from-background via-background/95 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-8 animate-marquee-slow w-max py-4">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[0];
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[550px] bg-[#1f1f1f] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col items-center justify-between min-h-[280px] md:min-h-[300px] select-none">
      <div className="flex flex-col items-center">
        {/* Stars */}
        <div className="flex gap-4 mb-6 md:mb-8 justify-center">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
          ))}
        </div>

        {/* Text */}
        <p className="text-white/80 font-[400] text-center text-base md:text-[18px] leading-[26px] md:leading-[29px] max-w-md">
          {testimonial.text}
        </p>
      </div>

      {/* Profile */}
      <div className="text-center mt-8 md:mt-10">
        <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] mx-auto rounded-t-[40px] rounded-b-[16px] md:rounded-t-[50px] md:rounded-b-[20px] overflow-hidden bg-muted mb-4 border-2 border-[#1f1f1f]">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-medium text-white text-[18px] mb-1">{testimonial.name}</h4>
        <p className="text-[16px] text-white/70 font-[400]">{testimonial.role}</p>
      </div>
    </div>
  );
};
