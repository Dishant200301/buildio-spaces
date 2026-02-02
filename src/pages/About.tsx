import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { TeamSection } from "@/components/home/TeamSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 25, suffix: "+", label: "Expert team members" },
  { value: 100, suffix: "+", label: "Happy clients" },
  { value: 9, suffix: "+", label: "Industry awards" },
];

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us | MonoArch*</title>
        <meta
          name="description"
          content="Learn about MonoArch* - our story, our team, and our commitment to creating exceptional spaces that blend style and comfort."
        />
      </Helmet>

      <Navbar />

      <main className="pt-28 md:pt-32 overflow-hidden">
        {/* Hero Section */}
        <section className="pt-6 pb-10 px-6">
          <div className="container mx-auto px-0 md:px-0 lg:px-10 xl:px-28 text-center">
            <SectionBadge className="mb-8 mx-auto">About us</SectionBadge>
            <h1
              ref={heroRef}
              className={cn(
                "text-[28px] md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 opacity-0 mx-auto leading-[1.1]",
                heroVisible && "animate-fade-in-up opacity-100"
              )}
            >
              Crafting spaces that <br className="hidden md:block" /> blend style and comfort
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
              We turn ideas into inviting, functional spaces thoughtfully designed with
              purpose, and beautifully styled for the way you live every day.
            </p>

            {/* Video Card */}
            <div
              className="relative rounded-[20px] md:rounded-[32px] overflow-hidden aspect-video bg-card group cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/images/about_hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Overlay with Pause/Play indication */}
              <div className={cn(
                "absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300",
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              )}>
                <div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center border border-white/20 text-white hover:bg-white/10 transition-colors">
                  {isPlaying ? (
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                      <div className="w-1 h-4 bg-white rounded-full"></div>
                    </div>
                  ) : (
                    <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent rounded-sm"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-20 px-6">
          <div className="container mx-auto px-0 md:px-0 lg:px-10 xl:px-28 text-center">
            <SectionBadge className="mb-8 mx-auto">Our Story</SectionBadge>
            <h2 className="text-[32px] md:text-5xl font-medium text-white text-center mb-10 md:mb-16 relative z-10 mx-auto leading-tight">
              The story behind <br className="hidden md:block" /> our creative craft
            </h2>
            <div
              ref={storyRef}
              className={cn(
                "bg-[#1f1f1f] rounded-[24px] md:rounded-[40px] p-6 md:p-12 relative overflow-hidden min-h-[auto] md:min-h-[500px] flex flex-col items-center opacity-0",
                storyVisible && "animate-fade-in-up opacity-100"
              )}
            >


              <div className="max-w-4xl mx-auto text-center mb-10 space-y-4 md:space-y-0 relative z-10">
                <p className="text-[#d2d2d2] text-base md:text-xl leading-relaxed md:leading-[32px] font-[400]">
                  We started with a vision to transform everyday spaces into something more  places that feel personal, functional, and timeless. We began as a small, passionate team has grown into a full-service studio of designers, architects, and craftsmen, all dedicated to design. For us, every project is an opportunity to create something that not only looks beautiful but also enhances the way people live, work, and connect.                </p>
                <p className="text-[#d2d2d2] text-base md:text-xl leading-relaxed md:leading-[32px] font-[400]">
                  Over the years, our dedication to innovation, detail, and teamwork has helped shape a wide range of homes, interiors, and outdoor spaces. We design with intention  blending visual appeal and functionality to create spaces that remain relevant and livable.                 </p>
              </div>

              {/* Founder Info */}
              <div className="text-center mb-0 relative z-10">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-t-[40px] rounded-b-[16px] md:rounded-t-[50px] md:rounded-b-[20px] bg-muted mx-auto mb-4 overflow-hidden border-2 border-[#1f1f1f] shadow-lg">
                  <img
                    src="/images/story_image_1.jpg"
                    alt="Michael Carter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-medium text-white mb-1">Michael Carter</h4>
                <p className="text-sm text-white/50 font-light">Founder & Owner</p>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-1/2 right-4 md:right-20 text-[6rem] md:text-[10rem] text-white/5 font-serif font-bold pointer-events-none hidden lg:block">
                ”
              </div>

              {/* Bottom Thumbnails */}
              <div className="hidden md:flex justify-center items-end gap-3 md:gap-6 relative z-10 mt-12 ">
                <div className="w-16 h-20 md:w-20 md:h-24 rounded-t-[40px] rounded-b-[16px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[12deg] bg-muted transition-transform duration-300 hover:-rotate-3">
                  <img src="/images/story_image_2.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-16 h-20 md:w-20 md:h-24 rounded-t-[40px] rounded-b-[16px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl -mt-4 bg-muted z-10 transition-transform duration-300 hover:-rotate-12">
                  <img src="/images/story_image_3.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-16 h-20 md:w-20 md:h-24 rounded-t-[40px] rounded-b-[16px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[-6deg] bg-muted transition-transform duration-300 hover:-rotate-12">
                  <img src="/images/project_details/project-2-image-1.jpg" className="w-full h-full object-cover" alt="" />
                </div>
              </div>

              {/* Mobile Thumbnails (Simplified) */}
              <div className="flex md:hidden justify-center items-end gap-2 relative z-10 mt-8 pb-12">
                <div className="w-14 h-16 rounded-t-[30px] rounded-b-[12px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[6deg] bg-muted">
                  <img src="/images/story_image_2.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-14 h-16 rounded-t-[30px] rounded-b-[12px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl -mt-2 bg-muted z-10">
                  <img src="/images/story_image_3.jpg" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-14 h-16 rounded-t-[30px] rounded-b-[12px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[-6deg] bg-muted">
                  <img src="/images/project_details/project-2-image-1.jpg" className="w-full h-full object-cover" alt="" />
                </div>
              </div>


              {/* Watermark */}
              <div className="absolute -bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 text-[4rem] md:text-[10rem] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none">
                MonoArch*
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-12 md:py-20 px-6">
          <div className="container mx-auto px-0 md:px-0 lg:px-10 xl:px-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Content */}
              <div
                ref={missionRef}
                className={cn(
                  "opacity-0",
                  missionVisible && "animate-fade-in-up opacity-100"
                )}
              >
                <SectionBadge className="mb-8">Our mission</SectionBadge>
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
                  Purpose that <br /> drives every detail
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-[600] text-white mb-2">Elevating everyday living</h3>
                    <p className="text-white/60 leading-relaxed text-base md:text-lg font-[400]">
                      Our thoughtful, innovative designs bring harmony, effortless simplicity, and joy to everyday modern home life.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-[600] text-white mb-2">Spaces that feel like home</h3>
                    <p className="text-white/60 leading-relaxed text-base md:text-lg font-[400]">
                      We turn your vision into living spaces that are well designed, personal, practical, and timelessly functional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className={cn(
                  "relative rounded-[24px] md:rounded-[40px] min-h-[200px] overflow-hidden aspect-square md:aspect-[16/10] lg:aspect-square bg-card opacity-0",
                  missionVisible && "animate-fade-in-up opacity-100 animation-delay-200"
                )}
              >
                <img
                  src="/images/mission.jpg"
                  alt="Mood board planning"
                  className="w-full h-full object-cover"
                />

                {/* Floating Icon Card */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                  <div className="w-6 h-8 md:w-8 md:h-10 bg-[#a3cccf] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Results Section */}
        <section className="py-12 md:py-20 px-6">
          <div className="container mx-auto px-0 md:px-0 lg:px-10 xl:px-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div
                ref={resultsRef}
                className={cn(
                  "relative rounded-[24px] md:rounded-[30px] min-h-[200px] overflow-hidden aspect-[4/5] md:aspect-[16/10] lg:aspect-square bg-card order-2 lg:order-none opacity-0",
                  resultsVisible && "animate-fade-in-up opacity-100"
                )}
              >
                <img
                  src="/images/Proven_results.jpg"
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content */}
              <div
                className={cn(
                  "order-1 lg:order-none opacity-0",
                  resultsVisible && "animate-fade-in-up opacity-100 animation-delay-200"
                )}
              >
                <SectionBadge className="mb-8">Proven results</SectionBadge>
                <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                  Where vision meets <br /> measurable impact
                </h2>
                <p className="text-base md:text-xl text-white/60 leading-relaxed mb-8 font-[400]">
                  Over the years, our design-driven approach has turned trust into meaningful, lasting, and measurable milestones across homes, offices, and beyond.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-y-8 gap-x-6 md:gap-x-8">
                  {stats.map((stat, index) => (
                    <StatItem key={index} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* FAQ Section */}
        <FAQSection />

      </main>

      <Footer />
    </>
  );
};

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

const StatItem = ({ value, suffix, label }: StatItemProps) => {
  const { ref, count } = useCountUp({ end: value, suffix });

  return (
    <div ref={ref}>
      <div className="text-3xl md:text-5xl font-bold text-foreground mb-2">
        {count}
      </div>
      <div className="text-muted-foreground text-sm md:text-xl font-[400]">{label}</div>
    </div>
  );
};

export default About;
