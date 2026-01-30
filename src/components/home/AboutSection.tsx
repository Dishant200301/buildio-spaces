import { SectionHeader } from "@/components/shared/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "21+", label: "Talented team members" },
  { value: "210+", label: "Completed projects" },
  { value: "9+", label: "Industry awards won" },
];

const bulletPoints = [
  "Balance of style and function",
  "Timeless results, built to last",
  "Thoughtful, detail-driven process",
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4" id="about">
      <div className="container">
        {/* Header */}
        <SectionHeader
          badge="Who we are"
          title="We're a team of designers, architects, and builders turning spaces into works of art. From interiors to landscapes, we deliver lasting results tailored to your vision."
          className="mb-16"
        />

        {/* Stats */}
        <div
          ref={ref}
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Text Card */}
          <div className="relative bg-card rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Background Logo */}
            <div className="absolute bottom-4 right-4 text-8xl font-bold text-foreground/[0.03] pointer-events-none select-none">
              Buildio*
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 max-w-md">
              We design with intention—creating spaces that reflect your style,
              not just trends.
            </h3>

            <ul className="space-y-3 mb-8">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-foreground rounded-full" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-xl bg-muted overflow-hidden transform rotate-3 hover:rotate-0 transition-transform"
                >
                  <img
                    src={`/images/about/thumb-${i}.jpg`}
                    alt="Work sample"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div className="rounded-3xl overflow-hidden bg-card aspect-square lg:aspect-auto">
            <img
              src="/images/about/about-main.jpg"
              alt="Our team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
