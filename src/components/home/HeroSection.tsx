import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clientLogos = [
  "/images/logo-1.jpg",
  "/images/logo-2.jpg",
  "/images/logo-3.jpg",
  "/images/logo-4.jpg",
];



export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="min-h-[auto] lg:min-h-[90vh] pt-24 lg:pt-32 pb-12 lg:pb-20 px-6 flex items-center bg-[#141414] overflow-hidden relative">

      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        <div className="grid lg:grid-cols-[50%_50%] gap-12 lg:gap-0 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={cn(
              "flex flex-col items-center lg:items-start text-center lg:text-left opacity-0",
              isVisible && "animate-fade-in-up opacity-100"
            )}
          >
            <SectionBadge className="mb-8 border-white/10 bg-white/5 text-[14px] lg:text-[16px] leading-[24px] font-normal text-white/80">
              #1 in Smart, Stylish Spaces
            </SectionBadge>

            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-medium text-white leading-tight lg:leading-[72px] mb-6 lg:mb-4 tracking-tight max-w-xl">
              Crafting spaces <br className="hidden lg:block" /> that match your <br className="hidden lg:block" /> style and needs
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/60 mb-8 lg:mb-10 max-w-xl leading-relaxed lg:leading-[32px] font-normal mx-auto lg:mx-0">
              Building new or upgrading? We craft stylish, inspiring spaces that feel uniquely yours.
            </p>

            <div className="flex flex-row flex-nowrap md:flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="h-12 px-4 md:px-6 rounded-full bg-white border-2 hover:border-[#565656] text-black text-md font-medium hover:bg-[#434343] hover:text-white whitespace-nowrap"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="inline-flex items-center justify-center h-12 px-4 md:px-6 rounded-full bg-[#2a2a2a] border-2 border-[#404040] text-white text-md font-medium hover:bg-[#4c4c4c] transition-all w-fit group whitespace-nowrap"
              >
                <Link to="/#services">View services</Link>
              </Button>
            </div>

            {/* Client Logos Marquee */}
            <div className="hidden lg:block w-full max-w-xl overflow-hidden relative mx-auto lg:mx-0">
              <div className="absolute left-0 top-0 bottom-0 w-8 lg:w-12 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-8 lg:w-12 bg-gradient-to-l from-background to-transparent z-10" />

              <div className="flex gap-12 lg:gap-16 animate-marquee w-max">
                {/* Duplicate 3 times for smooth infinite scroll */}
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="Client logo"
                    className="h-8 md:h-24 lg:h-28 w-auto object-contain opacity-100 grayscale hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full flex items-center justify-center lg:justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px] aspect-[3.5/4.5] rounded-t-[200px] lg:rounded-t-[400px] rounded-b-[30px] lg:rounded-b-[40px] overflow-hidden bg-[#1f1f1f]">
              <img
                src="/images/Home_Hero.jpg"
                alt="Modern villa with pool"
                className="w-full h-full object-cover "
              />


              {/* Rating Card */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-8 bg-[#1f1f1fa6] backdrop-blur-[10px] border border-white/10 p-4 lg:p-6 rounded-[24px] lg:rounded-[32px] max-w-[200px] lg:max-w-[260px] shadow-2xl w-full">
                <div className="flex -space-x-2 lg:-space-x-3 mb-3 lg:mb-5 justify-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border border-white/10 overflow-hidden bg-[#2a2a2a]"
                    >
                      <img
                        src={`/images/review-${i}.jpg`}
                        className="w-full h-full object-cover"
                        alt="Client avatar"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2 lg:mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 lg:w-6 lg:h-6 fill-white text-white"
                    />
                  ))}
                </div>
                <p className="text-[14px] lg:text-[18px] font-medium text-white text-center leading-snug">
                  Rated 5 Stars by <br />
                  <span className="font-normal text-white">2k+ happy clients</span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
