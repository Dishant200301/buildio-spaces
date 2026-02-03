import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Building2, MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";

const Projects = () => {
  //   const { ref, isVisible } = useScrollAnimation(); // Removed

  return (
    <>
      <Helmet>
        <title>Projects | MonoArch*</title>
        <meta
          name="description"
          content="Explore our portfolio of architecture and interior design projects. From residential renovations to new construction."
        />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        <section className="py-12 md:py-12 px-6">
          <div className="px-0 md:px-0 lg:px-10 xl:px-28 mx-auto container">
            <SectionHeader
              badge="Campaigns"
              title="Explore projects that redefine living"
              description="Discover curated spaces brought to life through creativity and purpose."
              className="mb-16 md:mb-20"
            />

            <div className="space-y-8 md:space-y-24">
              {projects.slice(0, 4).map((project, index) => (
                <FadeIn key={project.slug} delay={index * 0.1} className="w-full">
                  <div
                    className="bg-[#1f1f1f] rounded-[32px] md:rounded-[48px] overflow-hidden p-6 md:p-12 transition-transform duration-300"
                  >
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
                      {/* Content */}
                      <div className="flex flex-col pr-0 lg:pr-8 w-full order-1">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-[#a1a1a1] text-[15px] md:text-lg lg:text-xl font-normal mb-8 leading-relaxed max-w-xl">
                          {project.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-col gap-4 mb-8">
                          <div className="flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-white">
                            <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />
                            {project.type}
                          </div>
                          <div className="flex items-center gap-3 text-[14px] md:text-[15px] font-medium text-white">
                            <MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />
                            {project.location}
                          </div>
                        </div>

                        {/* CTA */}
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center justify-center h-10 md:h-12 px-6 rounded-full bg-[#333333] text-white text-[13px] md:text-[15px] font-medium hover:bg-[#404040] transition-all w-fit group"
                        >
                          View in detail
                        </Link>
                      </div>

                      {/* Image */}
                      <div className="relative w-full mt-4 lg:mt-0 order-2">
                        <div className="aspect-[3.5/4] md:aspect-square lg:aspect-[5/5] w-full rounded-t-[160px] md:rounded-t-[300px] lg:rounded-t-[250px] rounded-b-[20px] overflow-hidden bg-muted">
                          <img
                            src={project.cardImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Projects;
