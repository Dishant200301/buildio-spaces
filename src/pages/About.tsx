import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionBadge } from "@/components/shared/SectionBadge";
import { TeamSection } from "@/components/home/TeamSection";
import { CTASection } from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 25, suffix: "+", label: "Expert team members" },
  { value: 100, suffix: "+", label: "Happy clients" },
  { value: 9, suffix: "+", label: "Industry awards" },
];

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>About Us | Buildio*</title>
        <meta
          name="description"
          content="Learn about Buildio* - our story, our team, and our commitment to creating exceptional spaces that blend style and comfort."
        />
      </Helmet>

      <Navbar />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl text-center">
            <SectionBadge className="mb-6">About us</SectionBadge>
            <h1
              ref={heroRef}
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 opacity-0",
                heroVisible && "animate-fade-in-up opacity-100"
              )}
            >
              Crafting spaces that blend style and comfort
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              We believe great design should be both beautiful and livable. Our
              approach combines creative vision with practical expertise to
              deliver spaces that truly work for you.
            </p>

            {/* Video Card */}
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-card">
              {!isPlaying ? (
                <>
                  <img
                    src="/images/about/video-poster.jpg"
                    alt="Our story video"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-foreground/90 flex items-center justify-center hover:bg-foreground transition-colors">
                      <Play className="w-8 h-8 text-background ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <video
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="container max-w-5xl">
            <SectionBadge className="mb-6 mx-auto flex w-fit">
              Our story
            </SectionBadge>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              The story behind our creative craft
            </h2>

            <div className="bg-card rounded-3xl p-8 md:p-12 relative">
              {/* Quote Mark */}
              <div className="absolute top-8 right-8 text-8xl text-foreground/10 font-serif">
                "
              </div>

              <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 2009, Buildio* began with a simple belief: everyone
                  deserves a space that feels like home. What started as a small
                  design studio has grown into a full-service architecture and
                  interior design firm, but our core values remain unchanged.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We approach every project with curiosity, creativity, and a
                  commitment to excellence. Our team brings diverse perspectives
                  and deep expertise to create spaces that are as functional as
                  they are beautiful.
                </p>
              </div>

              {/* Founder Info */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  <img
                    src="/images/team/michael.jpg"
                    alt="Michael Carter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-foreground">Michael Carter</h4>
                <p className="text-sm text-muted-foreground">Founder & Owner</p>
              </div>

              {/* Interactive Images */}
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-32 rounded-2xl overflow-hidden bg-muted transition-transform duration-300 hover:-rotate-3"
                  >
                    <img
                      src={`/images/about/story-${i}.jpg`}
                      alt="Our work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proven Results Section */}
        <section className="py-20 px-4">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="rounded-3xl overflow-hidden aspect-square bg-card">
                <img
                  src="/images/about/results.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <SectionBadge className="mb-6">Proven results</SectionBadge>
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Where vision meets measurable impact
                </h2>
                <p className="text-muted-foreground mb-10">
                  Our track record speaks for itself. Over the years, we've built
                  lasting relationships with clients who trust us to deliver
                  exceptional results, on time and on budget.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
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

        <CTASection />
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
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default About;
