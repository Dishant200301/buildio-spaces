import { Instagram, Linkedin } from "lucide-react";
import type { TeamMember } from "@/data/team";

// Custom X icon since it might not be in the Lucide version used or for specific styling
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="bg-[#1f1f1f] rounded-[32px] rounded-t-[200px] p-4 pb-10 flex flex-col items-center text-center group transition-transform duration-300">
      {/* Image */}
      <div className="w-full aspect-square rounded-t-[200px] rounded-b-[40px] overflow-hidden mb-8 bg-muted">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-medium text-white mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-white/50 mb-6 font-light">{member.role}</p>

      {/* Socials */}
      <div className="flex items-center justify-center gap-5">
        <a
          href={member.socials.twitter || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
        >
          <XIcon className="w-5 h-5" />
        </a>
        <a
          href={member.socials.instagram || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href={member.socials.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
