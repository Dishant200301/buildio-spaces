import { SectionBadge } from "@/components/shared/SectionBadge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "25+", label: "Talented team members" },
  { value: "100+", label: "Completed projects" },
  { value: "9+", label: "Industry awards won" },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-6 bg-background">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-20 space-y-8">
          <div className="relative">
            <img
              src="/images/Who we are-1.jpg"
              alt="Who we are"
              className="hidden md:block w-14 h-16 md:w-16 md:h-20 absolute -left-16 -top-6 md:-left-[400px] md:-top-8 rounded-t-[30px] rounded-b-[12px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[12deg] bg-muted transition-transform duration-300 hover:rotate-[0deg]"
            />
            <SectionBadge>Who we are</SectionBadge>
          </div>

          <h2 className="text-[24px] md:text-4xl lg:text-[40px] font-[600] text-white leading-tight md:leading-[48px]">
            We’re a team of designers, architects, and builders turning spaces into works of art. From interiors to landscapes, we deliver lasting results tailored to your vision.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full mb-16">
          {stats.map((stat, index) => {
            const numericValue = parseInt(stat.value);
            return (
              <StatItem key={index} end={numericValue} suffix="+" label={stat.label} />
            )
          })}
        </div>

        {/* Content & Image Grid */}
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          {/* Left Card */}
          <div className="bg-[#1f1f1f] rounded-[24px] md:rounded-[30px] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[400px] md:min-h-[450px]">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-6 md:mb-8 leading-normal md:leading-[34px]">
                We design with intention creating spaces that reflect your style, not just trends.
              </h3>

              <div className="space-y-2">
                <p className="text-white/80 text-lg md:text-[20px] font-[400]">
                  1: Balance of style and function
                </p>
                <p className="text-white/80 text-lg md:text-[20px] font-[400]">
                  2: Timeless results, built to last
                </p>
                <p className="text-white/80 text-lg md:text-[20px] font-[400]">
                  3: Thoughtful, detail driven process
                </p>
              </div>
            </div>

            {/* Bottom Images */}
            <div className="flex gap-4 mt-10 md:mt-12 relative z-10 pl-2 md:pl-6 pb-2 md:pb-6 mx-auto">
              <div className="w-14 h-16 md:w-20 md:h-24 rounded-t-[30px] rounded-b-[12px] md:rounded-t-[40px] md:rounded-b-[16px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[12deg] bg-muted transition-transform duration-300 hover:rotate-[24deg]">
                <img src="/images/Who we are-2.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-16 md:w-20 md:h-24 rounded-t-[30px] rounded-b-[12px] md:rounded-t-[40px] md:rounded-b-[16px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl rotate-[0deg] bg-muted transition-transform duration-300 hover:-rotate-12">
                <img src="/images/Who we are-3.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-16 md:w-20 md:h-24 rounded-t-[30px] rounded-b-[12px] md:rounded-t-[40px] md:rounded-b-[16px] overflow-hidden border-2 border-[#1f1f1f] shadow-xl -rotate-[8deg] bg-muted transition-transform duration-300 hover:-rotate-[18deg]">
                <img src="/images/Who we are-4.jpg" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Watermark */}
            <div className="absolute -bottom-10 -right-4 md:-bottom-14 md:right-10 pointer-events-none opacity-10 text-[80px] md:text-[132px] font-[600] text-white tracking-tighter select-none leading-none md:leading-[158px]">
              MonoArch*
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-[24px] md:rounded-[30px] overflow-hidden bg-muted h-[400px] lg:h-auto">
            <img
              src="/images/Who we are-5.jpg"
              alt="Interior design process"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp({ end, duration: 2000 });

  return (
    <div ref={ref} className="flex flex-col  mx-auto">
      <span className="text-4xl md:text-5xl font-medium text-white mb-2 tabular-nums items-left text-left">
        {count}{suffix}
      </span>
      <span className="text-white/60 text-sm md:text-base font-light  items-center text-left">{label}</span>
    </div>
  );
};
