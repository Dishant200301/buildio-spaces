import { Building2, Home, LayoutGrid, Palette } from "lucide-react";

export interface ServiceSection {
  id: string;
  title: string;
  content: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  cardImage: string;
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural design",
    shortDescription: "We design structurally sound, visually striking spaces that blend function with timeless architecture.",
    icon: "/images/services-icon-1.jpg",
    heroImage: "/images/Architectural design.jpg",
    cardImage: "/images/Architectural design.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Our architectural design service focuses on creating spaces that are both visually stunning and structurally sound. From concept to construction-ready plans, we approach every project with clarity, creativity, and precision."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "Our process begins with a thorough understanding of your space, location, and vision. We evaluate site conditions, zoning requirements, and functional needs to establish a solid foundation. Early-stage sketches and 3D concepts are crafted to explore possibilities and refine design direction through client feedback. As the design evolves, we translate concepts into detailed technical drawings, selecting appropriate materials and ensuring that the architectural structure is both efficient and visually aligned with your goals. Each phase is collaborative, balancing creativity with practical execution to bring the structure to life with clarity and precision."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "Included in this service are professional floor plans and architectural elevations that define structure and scale. You’ll receive high-quality 3D visual renderings that help you visualize how light, material, and form interact within your space. We also prepare a full construction documentation package that’s ready for permit submission and contractor use. Where necessary, we coordinate with engineers and other consultants to make sure the architectural design integrates smoothly into the broader construction process."
      }
    ]
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "We design functional, expressive interiors that bring purpose into every corner of your space.",
    icon: "/images/services-icon-2.jpg",
    heroImage: "/images/Interior Design.jpg",
    cardImage: "/images/Interior Design.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Interior design turns a house into a home. We approach each project by aligning your preferences with design principles to create spaces that feel welcoming, refined, and entirely your own. Every finish, texture, and piece is chosen to enhance how you live."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "The interior design process is rooted in personalization and purpose. We begin by learning your style preferences, needs, and routines to form the foundation of a tailored design vision. Through mood boards, material samples, and layout studies, we develop a cohesive concept that blends aesthetics and functionality. Every space is carefully considered, from lighting tones and furniture layout to finish textures and storage solutions. Once the vision is aligned, we finalize the design with room-by-room planning, creating a fully realized interior that elevates your lifestyle while maintaining comfort and character."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "This service includes comprehensive interior layout plans for all rooms, ensuring practical flow and aesthetic balance. We provide curated furniture, finishes, and decor selections that suit your taste and work within your space and budget. Detailed lighting strategies and styling recommendations add warmth and clarity, while our final presentation package gives you a complete visual and material overview of your new interior. Whether you’re refreshing one room or transforming a full residence, the result is a thoughtful, beautiful environment tailored to how you live."
      }
    ]
  },
  {
    slug: "space-planning",
    title: "Space Planning",
    shortDescription: "We design optimized layouts that maximize flow, function, and the full potential of your available space.",
    icon: "/images/services-icon-3.jpg",
    heroImage: "/images/Space Planning.jpg",
    cardImage: "/images/Space Planning.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Space planning is about optimizing how every inch of your environment works. Whether it’s a compact apartment or a large office, thoughtful spatial strategy ensures functionality without compromising comfort or design."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "Our space planning approach focuses on unlocking the full potential of your home or workspace. We start by evaluating how your current layout performs – identifying traffic bottlenecks, underused corners, or crowded zones. Using this insight, we sketch and refine multiple layout options that improve circulation, enhance usability, and make your space feel more open and organized. Each plan is developed with intent, ensuring that zones function independently yet harmoniously. Once finalized, the layout is translated into diagrams and drawings that provide clarity on furniture placement and space functionality."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "Included in this service are floor plan proposals tailored for comfort, function, and flow. We map circulation patterns, designate functional zones, and offer specific recommendations for furniture placement to improve accessibility and space balance. You’ll also receive a visual summary of how your space evolves through our layout, along with an efficiency report highlighting improvements in usability and spatial logic. This service is ideal for homes, offices, or mixed-use areas in need of a smarter, more fluid layout."
      }
    ]
  },
  {
    slug: "space-decoration",
    title: "Space Decoration",
    shortDescription: "We design beautifully styled spaces with curated decor that enhances character, comfort, and atmosphere.",
    icon: "/images/services-icon-4.jpg",
    heroImage: "/images/Space Decoration.jpg",
    cardImage: "/images/Space Decoration.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "This service is the finishing layer of the design journey. Styling the space with the right decor transforms it into something deeply personal – using art, textiles, lighting, and accessories to elevate comfort and personality."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "Space decoration brings depth and personality to your environment. We begin by establishing a visual theme – whether earthy, modern, eclectic, or minimal – and plan the decorative layers accordingly. Art, textiles, lighting, and accessories are thoughtfully sourced and selected to reflect your style and complement the architectural framework. Once items are chosen, we provide clear styling guidance to ensure everything is placed with intention. The result is a cohesive, elevated look that feels personal, inviting, and fully resolved."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "As part of this service, we deliver a styling concept board that outlines the mood, palette, and visual tone for your space. You’ll receive a decor selection guide featuring curated items like wall art, cushions, lamps, and plants – all chosen to create a balanced atmosphere. Room-by-room layout suggestions help with decor positioning, while a detailed styling checklist offers clear instructions for final setup. Whether it’s a finishing touch after renovation or a refresh for a lived-in space, this service enhances comfort and expression through well-curated detail."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getOtherServices = (currentSlug: string): Service[] => {
  return services.filter(service => service.slug !== currentSlug);
};
