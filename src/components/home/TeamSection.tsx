import { teamMembers } from "@/data/team";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "@/components/shared/TeamCard";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import { cn } from "@/lib/utils";
import FadeIn from "../shared/FadeIn";

export const TeamSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-28 mx-auto">
        <SectionHeader
          badge="Our team"
          title="The dedicated team behind the craft"
          description="Our team unites designers, architects, and builders who care about every detail."
          className="mb-16 md:mb-20"
          animationType="fade"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.1} className="h-full">
              <TeamCard member={member} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
