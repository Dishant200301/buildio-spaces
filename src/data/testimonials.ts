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
    name: "Emily Richardson",
    role: "Homeowner",
    avatar: "/images/testimonials/emily.jpg",
    rating: 5,
    text: "Buildio* transformed our outdated kitchen into the heart of our home. Their attention to detail and understanding of how we actually live made all the difference. We couldn't be happier with the result."
  },
  {
    id: "testimonial-2",
    name: "David Park",
    role: "Restaurant Owner",
    avatar: "/images/testimonials/david.jpg",
    rating: 5,
    text: "Working with Buildio* on our restaurant redesign was seamless. They balanced aesthetics with functionality perfectly, creating a space that our customers love and our staff can work efficiently in."
  },
  {
    id: "testimonial-3",
    name: "Amanda Foster",
    role: "Tech Startup CEO",
    avatar: "/images/testimonials/amanda.jpg",
    rating: 5,
    text: "Our new office space has completely changed how our team works. Buildio* understood our culture and designed an environment that promotes both collaboration and focus. Highly recommend!"
  },
  {
    id: "testimonial-4",
    name: "Robert Martinez",
    role: "Property Developer",
    avatar: "/images/testimonials/robert.jpg",
    rating: 5,
    text: "I've worked with many architects over my career, and Buildio* stands out for their creativity and professionalism. They delivered a stunning design on time and within budget. True partners."
  }
];
