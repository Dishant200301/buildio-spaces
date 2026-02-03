import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation"; // Removed
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/shared/FadeIn";
import StaggerText from "@/components/shared/StaggerText";

const contactInfo = [
  {
    icon: Mail,
    title: "Email us at",
    value: "hello@yourstudio.com",
    href: "mailto:hello@yourstudio.com",
    type: "email"
  },
  {
    icon: Phone,
    title: "Give us a call",
    value: "+1 (310) 555-2345",
    href: "tel:+13105552345",
    type: "phone"
  },
  {
    icon: MapPin,
    title: "Visit our office",
    value: "123 Street, Los Angeles, CA 55 Grove Ave, Brooklyn, NY 11201",
    href: "https://maps.google.com/?q=Brooklyn+NY+11201",
    type: "address"
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(); // Removed
  // const { ref: formRef, isVisible: formVisible } = useScrollAnimation(); // Removed
  // const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(); // Removed

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MonoArch*</title>
        <meta
          name="description"
          content="Get in touch with MonoArch* to start your dream project."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-[#141414] text-white">
        {/* HERO + FORM SECTION */}
        {/* HERO + FORM SECTION */}
        {/* HERO + FORM SECTION */}
        <section className="pt-[100px] md:pt-[140px] pb-[64px] px-6">
          <div className="mx-auto container px-0 md:px-0 lg:px-10 xl:px-28">
            <div className="mx-auto max-w-[900px]">
              {/* HEADER */}
              <div className="mb-12 text-center">
                <FadeIn>
                  <span className="inline-block mb-6 px-4 py-2.5 rounded-full bg-[#1f1f1f] text-[16px] tracking-[0.04em] text-white/80 font-normal">
                    Contact us
                  </span>
                </FadeIn>

                <StaggerText
                  tag="h1"
                  className="mx-auto mb-6 max-w-[600px] text-[36px] md:text-[56px] font-medium leading-[1.1] tracking-tight text-white"
                  stagger={0.03}
                >
                  Let’s bring your dream space to life
                </StaggerText>

                <StaggerText
                  tag="p"
                  className="mx-auto max-w-[620px] text-[16px] md:text-[20px] text-white/60 leading-relaxed"
                  stagger={0.01}
                  delay={0.3}
                >
                  Reach out to discuss your ideas, ask a question, or request a quote.                </StaggerText>
              </div>

              {/* FORM CARD */}
              <FadeIn delay={0.3} className="w-full">
                <div
                  className="rounded-[20px] md:rounded-[32px] bg-[#1f1f1f] p-[20px] md:p-[30px] border border-white/5 shadow-2xl shadow-black/20"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2.5">
                        <label className="block text-[18px] font-medium text-white">
                          Full name
                        </label>
                        <Input
                          required
                          placeholder="Sarah Ahmed"
                          className="h-[52px] rounded-[14px] bg-[#141414] border border-white/[0.08] text-white placeholder:text-white/40 focus:border-white/20 focus:ring-0 transition-colors"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <label className="block text-[18px] font-medium text-white">
                          Email address
                        </label>
                        <Input
                          required
                          type="email"
                          placeholder="sarah.ahmed@email.com"
                          className="h-[52px] rounded-[14px] bg-[#141414] border border-white/[0.08] text-white placeholder:text-white/40 focus:border-white/20 focus:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2.5">
                        <label className="block text-[18px] font-medium text-white">
                          Phone number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+1 (844) 555-0198"
                          className="h-[52px] rounded-[14px] bg-[#141414] border border-white/[0.08] text-white placeholder:text-white/40 focus:border-white/20 focus:ring-0 transition-colors"
                        />
                      </div>

                      <div className="space-y-2.5">
                        <label className="block text-[18px] font-medium text-white">
                          Service type
                        </label>
                        <Input
                          type="text"
                          placeholder="Interior Design"
                          className="h-[52px] rounded-[14px] bg-[#141414] border border-white/[0.08] text-white placeholder:text-white/40 focus:border-white/20 focus:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="block text-[18px] font-medium text-white">
                        Message
                      </label>
                      <Textarea
                        required
                        placeholder="Let us know how we can help you..."
                        className="min-h-[160px] resize-none rounded-[14px] bg-[#141414] border border-white/[0.08] text-white placeholder:text-white/40 focus:border-white/20 focus:ring-0 transition-colors p-4"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-[52px] w-full rounded-full bg-white text-black text-[16px] font-semibold hover:bg-white/90 active:scale-[0.99] transition-all"
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                      </Button>
                    </div>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="pb-[40px] md:pb-[120px] px-6">
          <div className="mx-auto container px-0 md:px-0 lg:px-10 xl:px-28">
            <div className="mx-auto max-w-[900px]">
              <div className="grid gap-6 md:grid-cols-2">
                {/* TOP ROW CARDS (Email & Phone) */}
                {contactInfo.slice(0, 2).map((item, index) => (
                  <FadeIn key={item.title} delay={0.4 + (index * 0.1)} className="h-full">
                    <a
                      href={item.href}
                      className={cn(
                        "group flex flex-col items-center justify-center rounded-[32px] bg-[#1f1f1f] p-10 md:p-12 text-center h-full",
                        "border border-white/5 transition-all duration-300",
                        " hover:shadow-xl hover:shadow-black/20",
                      )}
                    >
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#141414] border border-white/10 text-white/80 group-hover:text-white transition-colors">
                        <item.icon className="h-8 w-8" strokeWidth={1.5} />
                      </div>
                      <p className="mb-2 text-[18px] font-medium text-[#a3a3a3] group-hover:text-white/60 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[18px] md:text-[24px] font-[400] text-white tracking-tight">
                        {item.value}
                      </p>
                    </a>
                  </FadeIn>
                ))}

                {/* BOTTOM ROW CARD */}
                <FadeIn delay={0.6} className="md:col-span-2">
                  <a
                    href={contactInfo[2].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex flex-col items-center justify-center rounded-[32px] bg-[#1f1f1f] p-10 md:p-12 text-center",
                      "border border-white/5 transition-all duration-300",
                    )}
                  >
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#141414] border border-white/10 text-white/80 group-hover:text-white transition-colors">
                      <MapPin className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <p className="mb-2 text-[18px] font-medium text-[#a3a3a3] group-hover:text-white/60 transition-colors">
                      {contactInfo[2].title}
                    </p>
                    <p className="mx-auto max-w-[420px] text-[18px] md:text-[24px] font-[500] text-white tracking-tight leading-relaxed">
                      {contactInfo[2].value}
                    </p>
                  </a>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
