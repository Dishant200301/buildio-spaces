import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clientLogos = [
  "Archviz", "DesignCo", "BuildPro", "SpaceWorks", "HomeStyle", "Interior+"
];

const floatingTags = [
  { label: "Smart planning", position: "top-8 left-4" },
  { label: "Seamless process", position: "top-1/3 right-4" },
  { label: "Client satisfaction", position: "bottom-1/4 left-8" },
];

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={cn(
              "max-w-xl opacity-0",
              isVisible && "animate-fade-in-up opacity-100"
            )}
          >
            <SectionBadge className="mb-6">
              #1 in Smart, Stylish Spaces
            </SectionBadge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Crafting spaces that match your style and needs
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              We blend innovative design with timeless craftsmanship to create
              environments that inspire and endure. Your vision, our expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <Link to="/#services">View services</Link>
              </Button>
            </div>

            {/* Client Logos Marquee */}
            <div className="relative overflow-hidden gradient-mask-edges">
              <div className="flex gap-8 animate-marquee">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <span
                    key={index}
                    className="text-muted-foreground/50 text-sm font-medium whitespace-nowrap"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-t-[120px] rounded-b-[40px] overflow-hidden aspect-[3/4] bg-card">
              <img
                src="/images/hero-main.jpg"
                alt="Modern interior design"
                className="w-full h-full object-cover"
              />

              {/* Floating Tags */}
              {floatingTags.map((tag, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute glass px-4 py-2 rounded-full text-sm text-foreground",
                    tag.position
                  )}
                >
                  <span className="inline-block w-2 h-2 bg-success rounded-full mr-2" />
                  {tag.label}
                </div>
              ))}

              {/* Rating Card */}
              <div className="absolute bottom-6 right-6 glass-strong rounded-2xl p-4">
                <div className="flex -space-x-2 mb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-muted border-2 border-card"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-warning text-warning"
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Rated 5 Stars by 2k+ happy clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
