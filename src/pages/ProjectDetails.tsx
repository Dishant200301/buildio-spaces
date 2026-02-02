import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Maximize2 } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { ref, isVisible } = useScrollAnimation();

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | MonoArch*</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <Navbar />

      <main className="pt-12 md:pt-12">
        <section className="py-12 px-6">
          <div className="container mx-auto px-0 md:px-0 lg:px-10 xl:px-28">
            {/* Back Button */}
            <Link
              to="/projects"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1f1f1f] hover:bg-white/10 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
            </Link>

            {/* Title & Description */}
            <div className="mb-8 md:mb-12">
              <h1
                ref={ref}
                className={cn(
                  "text-[30px] md:text-6xl lg:text-[80px] font-semibold text-foreground mb-6 opacity-0 leading-[1.05] tracking-tight",
                  isVisible && "animate-fade-in-up opacity-100"
                )}
              >
                {project.title}
              </h1>
              <p className="text-[16px] md:text-xl text-[#a3a3a3] max-w-3xl leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Meta Bar */}
            <div className="bg-[#1f1f1f] rounded-[24px] md:rounded-[32px] p-6 md:p-8 mb-12 md:mb-16 border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] uppercase tracking-wider font-medium text-white/50">Project Type</span>
                  <div className="flex items-center gap-2 text-white font-medium text-[17px]">
                    <Building2 className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                    {project.type}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] uppercase tracking-wider font-medium text-white/50">Location</span>
                  <div className="flex items-center gap-2 text-white font-medium text-[17px]">
                    <MapPin className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                    {project.location}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] uppercase tracking-wider font-medium text-white/50">Area</span>
                  <div className="flex items-center gap-2 text-white font-medium text-[17px]">
                    <Maximize2 className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                    {project.area}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="rounded-[32px] overflow-hidden aspect-[3/4] md:aspect-video bg-card mb-12 md:mb-20 relative">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
              {project.sections.map((section, index) => (
                <div key={section.id} className="">
                  <h2 className="text-[28px] md:text-4xl font-semibold text-white mb-4 md:mb-6 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-[#a3a3a3] text-[16px] md:text-lg leading-relaxed font-normal">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Scroll */}
        <section className="py-12 md:py-20 mx-auto container overflow-hidden">
          <div className="container px-4 mb-10">
            {/* Optional gallery header if needed, strictly sticking to image layout */}
          </div>

          {/* MOBILE / TABLET GALLERY (Alternating Marquee) */}
          <div className="lg:hidden relative w-full gradient-mask-edges overflow-hidden">
            <div className="flex gap-4 animate-marquee-reverse-slow pl-4">
              {[...project.galleryImages, ...project.galleryImages].map(
                (image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex-shrink-0 rounded-t-[160px] rounded-b-[20px] overflow-hidden bg-card transition-all duration-500",
                      index % 2 === 0
                        ? "h-[300px] w-[260px]"
                        : "h-[220px] w-[300px] mt-16 aspect-[4/3] !rounded-[24px]"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* DESKTOP GALLERY (Arch Marquee) - Preserved */}
          <div className="hidden lg:block relative w-full gradient-mask-edges">
            <div className="flex gap-4 md:gap-6 animate-marquee-reverse-slow hover:cursor-grab active:cursor-grabbing pl-4">
              {[...project.galleryImages, ...project.galleryImages].map(
                (image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex-shrink-0 rounded-t-[100px] md:rounded-t-[160px] rounded-b-[20px] overflow-hidden bg-card transition-all duration-500",
                      index % 2 === 0
                        ? "h-[300px] w-[260px] md:h-[375px] md:w-[320px]"
                        : "h-[220px] w-[300px] mt-16 md:h-[280px] md:w-[400px] md:mt-24 aspect-[4/3] !rounded-[24px] md:!rounded-[32px]"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetails;
