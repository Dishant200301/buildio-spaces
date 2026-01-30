export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How long does a typical project take from start to finish?",
    answer: "Project timelines vary based on scope and complexity. A simple room refresh might take 4-6 weeks, while a full home renovation typically spans 4-6 months. New construction projects can take 12-18 months. During our initial consultation, we'll provide a detailed timeline tailored to your specific project."
  },
  {
    id: "faq-2",
    question: "What is your design process like?",
    answer: "Our process begins with a discovery phase where we learn about your needs, preferences, and budget. We then develop initial concepts, refine them based on your feedback, and create detailed plans for execution. Throughout, we maintain open communication and regular check-ins to ensure your vision is realized."
  },
  {
    id: "faq-3",
    question: "Do you work with clients remotely?",
    answer: "Yes! While we love meeting clients in person, we've successfully completed projects across the country through virtual consultations. Using video calls, digital mood boards, and 3D renderings, we can collaborate effectively regardless of location."
  },
  {
    id: "faq-4",
    question: "What's included in your pricing?",
    answer: "Our fees cover design consultation, space planning, concept development, detailed drawings, material specifications, and project management. Furniture, materials, and contractor costs are typically separate. We provide transparent pricing upfront so there are no surprises."
  },
  {
    id: "faq-5",
    question: "Can you work within my budget?",
    answer: "Absolutely. We work with a range of budgets and are skilled at prioritizing investments for maximum impact. During our initial conversation, we'll discuss your budget openly and develop a plan that delivers beautiful results within your means."
  }
];
