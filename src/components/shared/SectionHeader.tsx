import { cn } from "@/lib/utils";
import { SectionBadge } from "./SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
  className,
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
        <SectionBadge className="mb-6">{badge}</SectionBadge>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
