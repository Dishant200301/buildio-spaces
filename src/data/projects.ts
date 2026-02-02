export interface ProjectSection {
  id: string;
  title: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  type: string;
  location: string;
  area: string;
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "modern-farmhouse-revival",
    title: "Modern Farmhouse Revival Design",
    description: "A complete transformation of a dated residence into a bright, open farmhouse-style home. We redesigned the layout for better flow modern fixtures, and created a harmonious blend of rustic charm and modern functionality throughout the space.",
    type: "Residential Renovation",
    location: "Austin, Texas",
    area: "2,300 sq ft",
    heroImage: "/images/project_details/project-1-image-1.jpg",
    cardImage: "/images/project-image-1.avif",
    galleryImages: [
      "/images/project_details/project-1-image-1.jpg",
      "/images/project_details/project-1-image-2.jpg",
      "/images/project_details/project-1-image-3.jpg",
      "/images/project_details/project-1-image-4.jpg",
      "/images/project_details/project-1-image-5.jpg",
      "/images/project_details/project-1-image-6.jpg"
    ],
    sections: [
      {
        id: "concept",
        title: "Project Concept",
        content: "The vision was to honor the home's agricultural heritage while introducing contemporary comfort. We preserved original beam structures and stone elements while opening the floor plan to create flowing, light-filled spaces. The design celebrates the tension between old and new, rough and refined."
      },
      {
        id: "process",
        title: "Our Process",
        content: "We began with extensive documentation of original features worth preserving. Working closely with local craftsmen, we restored wood beams, refinished original floors, and matched period-appropriate hardware. New additions—floor-to-ceiling windows, a chef's kitchen, and spa-like bathrooms—were designed to complement rather than compete with the home's character."
      },
      {
        id: "outcome",
        title: "The Outcome",
        content: "The completed renovation delivers the best of both worlds: the warmth and character of a century-old farmhouse with the functionality and comfort of modern living. Natural light floods every room, the kitchen has become the heart of family gatherings, and the master suite offers a peaceful retreat. The clients now enjoy a home that tells a story while meeting contemporary needs."
      }
    ]
  },
  {
    slug: "mediterranean-villa-refresh",
    title: "Mediterranean Villa Refresh",
    description: "A sun-soaked villa received a modern yet respectful upgrade. With a focus on natural materials, elegant minimalism, and spatial flow, we revived this spacious property into a timeless family retreat that honors Mediterranean charm while embracing modern living.",
    type: "Villa Renovation",
    location: "Marbella, Spain",
    area: "3,800 sq ft",
    heroImage: "/images/project_details/project-2-image-1.jpg",
    cardImage: "/images/project-image-2.jpg",
    galleryImages: [
      "/images/project_details/project-2-image-1.jpg",
      "/images/project_details/project-2-image-2.jpg",
      "/images/project_details/project-2-image-3.jpg",
      "/images/project_details/project-2-image-4.jpg",
      "/images/project_details/project-2-image-5.jpg",
      "/images/project_details/project-2-image-6.jpg"
    ],
    sections: [
      {
        id: "concept",
        title: "Project Concept",
        content: "This former textile warehouse offered soaring ceilings, massive windows, and raw industrial character. Our concept embraced these assets while introducing warmth and livability. We designed distinct zones for living, dining, working, and sleeping—all while maintaining the open, airy feeling that makes loft living special."
      },
      {
        id: "process",
        title: "Our Process",
        content: "Structural steel was cleaned and left exposed as a design feature. Original brick walls were carefully restored. We introduced a floating mezzanine for the bedroom, maximizing floor space while creating an intimate sleeping area. Custom millwork provides storage without compromising the open aesthetic."
      },
      {
        id: "outcome",
        title: "The Outcome",
        content: "The finished loft perfectly balances industrial heritage with residential comfort. The client—a creative professional—now has a space that inspires work and relaxation equally. Sunlight streams through original factory windows, dinner parties unfold beneath steel beams, and the city skyline serves as ever-changing artwork."
      }
    ]
  },
  {
    slug: "modern-living-room-redesign",
    title: "Modern Living Room Redesign",
    description: "A compact city living room was completely reimagined to enhance comfort and express modern elegance. Through smart furnishing, subtle color tones, and thoughtful textures, we created a welcoming, cozy interior that feels both stylish and deeply livable.",
    type: "Interior Design",
    location: "Chicago, Illinois",
    area: "450 sq ft",
    heroImage: "/images/project_details/project-3-image-1.jpg",
    cardImage: "/images/project-image-3.jpg",
    galleryImages: [
      "/images/project_details/project-3-image-1.jpg",
      "/images/project_details/project-3-image-2.jpg",
      "/images/project_details/project-3-image-3.jpg",
      "/images/project_details/project-3-image-4.jpg",
      "/images/project_details/project-3-image-5.jpg",
      "/images/project_details/project-3-image-6.jpg"
    ],
    sections: [
      {
        id: "concept",
        title: "Project Concept",
        content: "Designed from the ground up to celebrate its oceanfront location, this residence treats the Pacific as its primary artwork. Floor-to-ceiling glass, indoor-outdoor living areas, and a restrained material palette ensure nothing competes with the view. The architecture frames the ocean rather than hiding from it."
      },
      {
        id: "process",
        title: "Our Process",
        content: "Site analysis revealed optimal positioning for views, privacy, and protection from coastal elements. We selected materials that age gracefully in salt air—weathered teak, zinc, and limestone. The floor plan unfolds as a journey from the street side to the water, with each room revealing more of the ocean as you move through the home."
      },
      {
        id: "outcome",
        title: "The Outcome",
        content: "The completed residence serves as both everyday home and vacation retreat. Sliding walls dissolve the boundary between interior and terrace. The kitchen, living, and dining areas flow seamlessly to outdoor entertaining spaces. Our clients describe it as living in a permanent state of vacation—peaceful, connected to nature, and endlessly inspiring."
      }
    ]
  },
  {
    slug: "tranquil-garden-retreat",
    title: "Tranquil Garden Retreat Space",
    description: "We transformed a plain backyard into a peaceful, low-maintenance outdoor retreat. With natural textures, layered greenery, and thoughtful zoning, the landscape now invites relaxation, gathering, and quiet connection with nature—right at home.",
    type: "Landscape Design",
    location: "Napa Valley, California",
    area: "1,200 sq ft",
    heroImage: "/images/project_details/project-4-image-1.jpg",
    cardImage: "/images/project-image-4.png",
    galleryImages: [
      "/images/project_details/project-4-image-1.jpg",
      "/images/project_details/project-4-image-2.jpg",
      "/images/project_details/project-4-image-3.jpg",
      "/images/project_details/project-4-image-4.jpg",
      "/images/project_details/project-4-image-5.jpg",
      "/images/project_details/project-4-image-6.jpg"
    ],
    sections: [
      {
        id: "concept",
        title: "Project Concept",
        content: "In urban living, every square foot counts. Our concept for this compact apartment focused on creating the illusion of space through carefully considered design moves. We eliminated visual clutter, maximized natural light, and designed multi-functional elements that serve double duty."
      },
      {
        id: "process",
        title: "Our Process",
        content: "We removed non-structural walls to create an open-plan living area. Built-in storage lines the perimeter, keeping surfaces clear. A custom Murphy bed transforms the bedroom into a home office by day. Light colors and reflective surfaces amplify the apartment's modest natural light."
      },
      {
        id: "outcome",
        title: "The Outcome",
        content: "The renovated apartment lives far larger than its footprint suggests. Guests are routinely surprised by the sense of spaciousness. Our client, a young professional, can now host dinner parties, work from home, and relax in comfort—all within their small but perfectly formed urban retreat."
      }
    ]
  },
  {
    slug: "heritage-townhouse-restoration",
    title: "Heritage Townhouse Restoration",
    description: "Breathing new life into a Victorian townhouse while honoring its architectural heritage.",
    type: "Historic Restoration",
    location: "Boston, Massachusetts",
    area: "2,800 sq ft",
    heroImage: "/images/project_details/project-1-image-5.jpg",
    cardImage: "/images/project_details/project-1-image-6.jpg",
    galleryImages: [
      "/images/project_details/project-1-image-1.jpg",
      "/images/project_details/project-1-image-2.jpg",
      "/images/project_details/project-1-image-3.jpg",
      "/images/project_details/project-1-image-4.jpg",
      "/images/project_details/project-1-image-5.jpg",
      "/images/project_details/project-1-image-6.jpg"
    ],
    sections: [
      {
        id: "concept",
        title: "Project Concept",
        content: "This 1890s townhouse had suffered from decades of neglect and ill-conceived renovations. Our goal was to strip away inappropriate additions, restore original features, and sensitively introduce modern comforts. The result respects the home's history while making it viable for contemporary family life."
      },
      {
        id: "process",
        title: "Our Process",
        content: "Extensive research into the home's history guided our restoration approach. We worked with preservation specialists to restore original plasterwork, refinish hardwood floors, and recreate missing architectural details. The kitchen and bathrooms were completely redesigned with period-appropriate fixtures and finishes."
      },
      {
        id: "outcome",
        title: "The Outcome",
        content: "The restored townhouse now stands as one of the finest examples of Victorian residential architecture in the neighborhood. Original features—pocket doors, ceiling medallions, carved mantels—shine once again. Modern systems operate invisibly behind period facades. The family enjoys both historical grandeur and everyday practicality."
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
};
