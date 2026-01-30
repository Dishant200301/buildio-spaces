import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Maximize2 } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
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
        <title>{project.title} | Buildio*</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <Navbar />

      <main className="pt-32">
        <section className="py-12 px-4">
          <div className="container max-w-5xl">
            {/* Back Button */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="mb-8 rounded-full"
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to projects
              </Link>
            </Button>

            {/* Title & Description */}
            <h1
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 opacity-0",
                isVisible && "animate-fade-in-up opacity-100"
              )}
            >
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              {project.description}
            </p>

            {/* Meta Bar */}
            <div className="glass rounded-2xl p-6 flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Project Type</p>
                  <p className="text-foreground font-medium">{project.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">{project.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Maximize2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Area</p>
                  <p className="text-foreground font-medium">{project.area}</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="rounded-3xl overflow-hidden aspect-video bg-card mb-16">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {project.sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Marquee */}
        <section className="py-16 overflow-hidden">
          <div className="relative gradient-mask-edges">
            <div className="flex gap-6 animate-marquee-reverse pause-animation">
              {[...project.galleryImages, ...project.galleryImages].map(
                (image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 h-56 rounded-2xl overflow-hidden bg-card"
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
