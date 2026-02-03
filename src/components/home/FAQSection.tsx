import { faqs } from "@/data/faqs";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 px-6">
      <div className="container px-0 md:px-0 lg:px-10 xl:px-72 mx-auto">
        <SectionHeader
          badge="FAQs"
          title="Frequently asked questions"
          description="Find helpful answers about our services, detailed process, and bringing your vision to life."
          className="mb-16 md:mb-20"
        />

        <div
          ref={ref}
          className={cn(
            "opacity-0",
            isVisible && "animate-fade-in-up opacity-100"
          )}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-[#1f1f1f] rounded-2xl px-6 md:px-8 border-0"
              >
                <AccordionTrigger className="text-left text-white/90 font-light text-lg hover:no-underline py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-6 leading-relaxed text-base font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
