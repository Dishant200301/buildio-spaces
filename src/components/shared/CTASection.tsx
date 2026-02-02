import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export const CTASection = ({
  description = "We'd love to hear from you. Reach out to discuss your ideas, get a quote, or book a consultation.",
  buttonText = "Get a free quote!",
  buttonLink = "/contact",
  backgroundImage = "/images/cta-image.jpg",
}: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 lg:py-20 px-6">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden min-h-[350px] md:min-h-[500px] flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />

          {/* Content Box */}
          <div className="relative z-10 w-full px-4">
            <div
              ref={ref}
              className={cn(
                "bg-black/70 backdrop-blur-sm rounded-[24px] md:rounded-[32px] p-6 md:p-10 lg:p-16 max-w-3xl mx-auto text-center border border-white/5 opacity-0",
                isVisible && "animate-fade-in-up opacity-100"
              )}
            >
              <h2 className="text-[28px] md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6 leading-tight">
                Let's create a <br className="hidden md:block" />
                space you'll love
              </h2>
              <p className="text-white/80 text-[15px] md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto">
                {description}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-black text-sm md:text-[17px] border border-transparent hover:bg-[#5c5b59] hover:text-white hover:border-[#5c5b59] transition-all duration-300 rounded-full px-6 h-10 md:h-12 font-medium"
              >
                <Link to={buttonLink}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
