import { Link } from "react-router-dom";
import { Building2, MapPin, ArrowRight } from "lucide-react";
import { projects, getFeaturedProjects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import { cn } from "@/lib/utils";
import FadeIn from "../shared/FadeIn";

interface ProjectsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  showViewAll?: boolean;
  limit?: number;
}

export const ProjectsSection = ({
  badge = "Recent work",
  title = "A Showcase of our recent projects",
  description = "From idea to execution, our work is made to elevate everyday living.",
  showViewAll = true,
  limit = 3,
}: ProjectsSectionProps) => {
  // const { ref, isVisible } = useScrollAnimation(); // Removed
  const featuredProjects = getFeaturedProjects(limit);

  return (
    <section className="py-12 md:py-20 px-6" id="projects">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          className="mb-12 md:mb-16 lg:mb-24"
          animationType="fade"
        />

        <div className="space-y-8 md:space-y-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {showViewAll && (
          <FadeIn delay={0.4}>
            <div className="text-center mt-12 md:mt-24">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-[#2a2a2a] border-2 border-[#404040] text-white text-md font-medium hover:bg-[#4c4c4c] transition-all w-fit group"
              >
                View all projects
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#1f1f1f] rounded-[24px] md:rounded-[40px] overflow-hidden p-6 md:p-12 transition-transform duration-300">
      <div className="grid lg:grid-cols-[1.8fr_1fr] gap-8 md:gap-16 items-center">
        {/* Content */}
        <div className="flex flex-col pr-0 lg:pr-8 items-start text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight lg:leading-[48px]">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap justify-start gap-x-6 gap-y-3 mb-8 md:mb-10">
            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
              <Building2 className="w-4 h-4 text-white/50" />
              {project.type}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/70">
              <MapPin className="w-4 h-4 text-white/50" />
              {project.location}
            </div>
          </div>

          {/* CTA */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all w-fit group"
          >
            View in detail
          </Link>
        </div>

        {/* Image */}
        <div className="relative mb-2 lg:mb-0 w-full">
          <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-[320px] md:max-w-[400px] lg:max-w-none mx-auto lg:mx-0 rounded-t-[160px] md:rounded-t-[200px] lg:rounded-t-[250px] rounded-b-[40px] overflow-hidden bg-muted">
            <img
              src={project.cardImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
