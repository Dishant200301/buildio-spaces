import { teamMembers } from "@/data/team";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "@/components/shared/TeamCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        <SectionHeader
          badge="Our team"
          title="The dedicated team behind the craft"
          description="Our team unites designers, architects, and builders who care about every detail."
          className="mb-16 md:mb-20"
        />

        <div
          ref={ref}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          {teamMembers.slice(0, 3).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
