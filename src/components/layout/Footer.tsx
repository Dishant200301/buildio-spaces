import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-foreground/[0.02]">
          Buildio*
        </span>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-foreground mb-4 block">
              Buildio*
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              We're a team of designers, architects, and builders turning spaces
              into works of art. From interiors to landscapes, we deliver lasting
              results tailored to your vision.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Socials</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Buildio*. All rights reserved.</p>
          <p>Designed & Built with care</p>
        </div>
      </div>
    </footer>
  );
};
