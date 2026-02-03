import { cn } from "@/lib/utils";
import { SectionBadge } from "./SectionBadge";
import StaggerText from "./StaggerText";
import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  animationType?: 'stagger' | 'fade';
}

export const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
  className,
  animationType = 'stagger',
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <FadeIn>
          <SectionBadge className="mb-6">{badge}</SectionBadge>
        </FadeIn>
      )}

      {animationType === 'stagger' ? (
        <>
          <StaggerText
            tag="h2"
            className="text-2xl md:text-5xl lg:text-5xl font-medium text-foreground mb-4 text-balance"
            stagger={0.02}
          >
            {title}
          </StaggerText>
          {description && (
            <StaggerText
              tag="p"
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
              stagger={0.01}
              delay={0.02}
            >
              {description}
            </StaggerText>
          )}
        </>
      ) : (
        <>
          <FadeIn delay={0.02}>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium text-foreground mb-4 text-balance">
              {title}
            </h2>
          </FadeIn>
          {description && (
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                {description}
              </p>
            </FadeIn>
          )}
        </>
      )}
    </div>
  );
};
