import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const marqueeImages = [
  { src: "/images/work-1.jpg", tall: true },
  { src: "/images/work-2.jpg", tall: false },
  { src: "/images/work-3.jpg", tall: true },
  { src: "/images/work-4.jpg", tall: false },
  { src: "/images/work-5.jpg", tall: true },
  { src: "/images/work-6.jpg", tall: false },
];

export const PastWorkMarquee = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={cn(
        "py-8 md:py-20 overflow-hidden px-6 opacity-0",
        isVisible && "animate-fade-in-up opacity-100"
      )}
    >
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto mb-6 md:mb-10">
        {/* Optional gallery header if needed, strictly sticking to image layout */}
      </div>
      <div className="relative w-full gradient-mask-edges">
        <div className="flex gap-4 md:gap-6 animate-marquee-reverse-slow hover:cursor-grab active:cursor-grabbing pl-4">
          {[...marqueeImages, ...marqueeImages].map((image, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 rounded-t-[80px] md:rounded-t-[160px] rounded-b-[16px] md:rounded-b-[20px] overflow-hidden bg-card transition-all duration-500",
                index % 2 === 0
                  ? "h-[190px] w-[160px] md:h-[375px] md:w-[320px]"
                  : "h-[160px] w-[220px] mt-8 md:h-[280px] md:w-[400px] md:mt-24 aspect-[4/3] !rounded-[16px] md:!rounded-[32px]"
              )}
            >
              <img
                src={image.src}
                alt="Past work"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
