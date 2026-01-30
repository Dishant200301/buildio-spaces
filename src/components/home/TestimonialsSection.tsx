import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/SectionHeader";

export const TestimonialsSection = () => {
  return (
    <section className="py-20" id="testimonials">
      <div className="container px-4 mb-12">
        <SectionHeader
          badge="Testimonials"
          title="Hear from our clients"
          description="Trusted by homeowners, businesses, and developers who value quality and creativity."
        />
      </div>

      {/* Scrolling Cards */}
      <div className="relative overflow-hidden gradient-mask-edges">
        <div className="flex gap-6 animate-marquee-slow pause-animation">
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
    <div className="flex-shrink-0 w-[350px] bg-card rounded-3xl p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-6 justify-center">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-warning text-warning" />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground text-center mb-8 leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Profile */}
      <div className="text-center">
        <div className="w-16 h-24 mx-auto rounded-t-[40px] rounded-b-2xl overflow-hidden bg-muted mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  );
};
