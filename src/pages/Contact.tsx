import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email us at",
    value: "hello@buildio.com",
    href: "mailto:hello@buildio.com",
  },
  {
    icon: Phone,
    title: "Give us a call",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit our office",
    value: "123 Design Street, San Francisco, CA 94102",
    href: "https://maps.google.com/?q=San+Francisco+CA",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Buildio*</title>
        <meta
          name="description"
          content="Get in touch with Buildio* to start your dream project. We'd love to hear about your vision."
        />
      </Helmet>

      <Navbar />

      <main className="pt-32">
        <section className="py-20 px-4">
          <div className="container max-w-4xl">
            <SectionHeader
              badge="Contact us"
              title="Let's bring your dream space to life"
              description="Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you shortly."
              className="mb-12"
            />

            {/* Contact Form */}
            <div
              ref={ref}
              className={cn(
                "bg-card rounded-3xl p-8 md:p-12 opacity-0",
                isVisible && "animate-fade-in-up opacity-100"
              )}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Full name
                    </label>
                    <Input
                      required
                      placeholder="John Doe"
                      className="bg-background border-border rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Email address
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-border rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Phone number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-background border-border rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Service type
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background border-border rounded-xl h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.slug} value={service.slug}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your project..."
                    className="bg-background border-border rounded-xl min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-card rounded-2xl p-6 text-center hover:bg-card/80 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                    <info.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {info.title}
                  </p>
                  <p className="text-foreground font-medium">{info.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
