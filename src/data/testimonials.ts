export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Jenkins",
    role: "Interior renovation",
    avatar: "/images/Testimonials-1.jpg",
    rating: 5,
    text: "The final results were flawless. They created refreshing, clean layouts, and made our entire home feel more livable, spacious, and inviting than we imagined."
  },
  {
    id: "testimonial-2",
    name: "Daniel Hayes",
    role: "Space planning",
    avatar: "/images/Testimonials-2.jpg",
    rating: 5,
    text: "From the first consultation to the final details, the team delivered. The exterior feels fresh, balanced, and welcoming — a complete upgrade that made a big difference."
  },
  {
    id: "testimonial-3",
    name: "Jason Miller",
    role: "Architectural design",
    avatar: "/images/Testimonials-3.jpg",
    rating: 5,
    text: "Every part of the process was handled with precision. The layout, planning, structure, and detailing came together to create a space that’s both functional and beautiful."
  },
  {
    id: "testimonial-4",
    name: "Emily Richardson",
    role: "Homeowner",
    avatar: "/images/Testimonials-4.jpg",
    rating: 5,
    text: "MonoArch* transformed our outdated kitchen into the heart of our home. Their attention to detail and understanding of how we actually live made all the difference."
  }
];
