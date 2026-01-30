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
  icon: typeof Building2;
  heroImage: string;
  cardImage: string;
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural Design",
    shortDescription: "From concept to completion, we design buildings that stand the test of time while pushing creative boundaries.",
    icon: Building2,
    heroImage: "/images/services/architectural-design-hero.jpg",
    cardImage: "/images/services/architectural-design.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Our architectural design service transforms your vision into reality. We blend innovative design thinking with practical functionality to create structures that inspire and endure. Whether you're planning a residential retreat or a commercial landmark, our team brings expertise, creativity, and attention to detail to every project."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "We begin with deep listening—understanding your goals, lifestyle, and aspirations. Our design process involves collaborative sketching, 3D visualization, and iterative refinement. We consider environmental factors, local regulations, and sustainability from day one. Each design decision is made with purpose, ensuring your building serves both form and function beautifully."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "Our comprehensive service includes initial consultation and site analysis, conceptual design and 3D modeling, detailed architectural drawings and specifications, material selection guidance, contractor coordination support, and project oversight through completion. We provide regular updates and revisions to ensure the final result exceeds your expectations."
      }
    ]
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription: "We craft interiors that reflect your personality while maximizing comfort, flow, and aesthetic appeal.",
    icon: Home,
    heroImage: "/images/services/interior-design-hero.jpg",
    cardImage: "/images/services/interior-design.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Interior design is about creating spaces that feel like home while looking extraordinary. We curate every element—from furniture and lighting to textures and colors—to craft environments that enhance daily living. Our designs balance beauty with practicality, ensuring spaces that work as well as they look."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "We start by understanding how you live and what inspires you. Through mood boards, material samples, and detailed plans, we create a cohesive vision for your space. Our approach considers natural light, traffic flow, and the psychology of color. We source from trusted suppliers and oversee installation to ensure flawless execution."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "The service encompasses space planning and layout optimization, custom furniture design and sourcing, lighting design and fixture selection, color palette and material specification, window treatments and soft furnishings, art curation and accessory styling, and full project management from concept to completion."
      }
    ]
  },
  {
    slug: "space-planning",
    title: "Space Planning",
    shortDescription: "We design optimized layouts that maximize flow, function, and the full potential of your available space.",
    icon: LayoutGrid,
    heroImage: "/images/services/space-planning-hero.jpg",
    cardImage: "/images/services/space-planning.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Space planning is about optimizing how every inch of your environment works. Whether it's a compact apartment or a large office, thoughtful spatial strategy ensures functionality without compromising comfort or design. We analyze traffic patterns, usage requirements, and spatial relationships to create layouts that feel natural and efficient."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "Our space planning approach focuses on unlocking the full potential of your home or workspace. We start by evaluating how your current layout performs—identifying traffic bottlenecks, underused corners, or crowded zones. Using this insight, we sketch and refine multiple layout options that improve circulation, enhance usability, and make your space feel more open and organized."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "Included in this service are floor plan proposals tailored for comfort, function, and flow. We map circulation patterns, design functional zones, and offer specific recommendations for furniture placement to improve accessibility and space balance. You'll receive visual diagrams showing how your space evolves through layout improvements, along with an efficiency report highlighting improvements in usability."
      }
    ]
  },
  {
    slug: "space-decoration",
    title: "Space Decoration",
    shortDescription: "The finishing touches that transform a house into a home—curated décor that tells your story.",
    icon: Palette,
    heroImage: "/images/services/space-decoration-hero.jpg",
    cardImage: "/images/services/space-decoration.jpg",
    sections: [
      {
        id: "about",
        title: "About the service",
        content: "Space decoration is the art of adding personality and warmth to your interiors. Beyond furniture and paint, it's about the carefully chosen objects, textures, and arrangements that make a space uniquely yours. We curate collections that reflect your taste while creating visual harmony throughout your home."
      },
      {
        id: "approach",
        title: "Our approach",
        content: "We approach decoration as storytelling. Every piece we select has meaning and purpose. We consider scale, proportion, and visual balance, mixing vintage finds with contemporary pieces to create layered, interesting spaces. Our eye for detail ensures cohesive styling that feels collected over time, not decorated overnight."
      },
      {
        id: "included",
        title: "What's included in the service",
        content: "Our decoration service includes accessory and artwork selection, textile and rug sourcing, plant and greenery styling, shelf and surface styling, seasonal refresh guidance, and sourcing of unique vintage or artisan pieces. We handle procurement, delivery, and final placement to ensure every detail is perfect."
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
