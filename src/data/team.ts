export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "michael-carter",
    name: "Michael Carter",
    role: "Founder & Lead Architect",
    image: "/images/team/michael.jpg",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Senior Interior Designer",
    image: "/images/team/sarah.jpg",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Project Manager",
    image: "/images/team/james.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com"
    }
  }
];
