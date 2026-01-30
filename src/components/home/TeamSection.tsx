import { teamMembers } from "@/data/team";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4">
      <div className="container">
        <SectionHeader
          badge="Our team"
          title="The dedicated team behind the craft"
          description="Meet the talented individuals who bring creativity, expertise, and passion to every project."
          className="mb-16"
        />

        <div
          ref={ref}
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
