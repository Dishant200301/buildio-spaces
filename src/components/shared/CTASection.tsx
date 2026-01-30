import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export const CTASection = ({
  title = "Ready to transform your space?",
  description = "Let's create something extraordinary together. Get in touch to start your journey.",
  buttonText = "Get in touch",
  buttonLink = "/contact",
  backgroundImage = "/images/cta-bg.jpg",
}: CTASectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full flex items-end justify-center p-8 md:p-12">
            <div className="glass-strong rounded-2xl p-8 md:p-10 max-w-xl text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {description}
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full px-8"
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
