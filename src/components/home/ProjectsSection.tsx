import { Link } from "react-router-dom";
import { Building2, MapPin, ArrowRight } from "lucide-react";
import { projects, getFeaturedProjects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  showViewAll?: boolean;
  limit?: number;
}

export const ProjectsSection = ({
  badge = "Our Projects",
  title = "Explore projects that redefine living",
  description = "Discover curated spaces brought to life through creativity and purpose.",
  showViewAll = true,
  limit = 3,
}: ProjectsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const featuredProjects = getFeaturedProjects(limit);

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container">
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          className="mb-16"
        />

        <div
          ref={ref}
          className={cn(
            "space-y-8 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/projects">View all projects</Link>
            </Button>
          </div>
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
    <div className="bg-card rounded-3xl overflow-hidden">
      <div className="grid lg:grid-cols-5 gap-6 p-6 md:p-8">
        {/* Content */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="w-4 h-4" />
              {project.type}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {project.location}
            </div>
          </div>

          {/* CTA */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-foreground hover:gap-3 transition-all w-fit"
          >
            <span className="glass px-4 py-2 rounded-full text-sm">
              View in detail
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Image */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
            <img
              src={project.cardImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
