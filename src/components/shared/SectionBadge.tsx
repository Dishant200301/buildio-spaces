import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionBadge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full",
        "glass border-none text-md text-muted-foreground ",
        className
      )}
    >
      {children}
    </div>
  );
};
