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
    <section className="py-20 px-4">
      <div className="container max-w-3xl">
        <SectionHeader
          badge="FAQs"
          title="Frequently asked questions"
          description="Find answers to common questions about our services, process, and approach."
          className="mb-12"
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
                className="bg-card rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
