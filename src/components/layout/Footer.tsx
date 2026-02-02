import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "X / Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export const Footer = () => {
  return (
    <footer className="relative py-10 px-6 overflow-hidden bg-background">
      {/* Background Watermark - Adjusted position for bottom alignment */}
      <div className="absolute bottom-[-32vw] md:bottom-[-15vw] lg:bottom-[-7vw] left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 w-full flex justify-center">
        <span className="text-[80px] md:text-[170px] lg:text-[252px] leading-[302px] font-[600] text-[#1f1f1f]">
          MonoArch*
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-0 md:px-0 lg:px-10 xl:px-28">
        <div className="grid lg:grid-cols-2 gap-12 mb-20 md:mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link to="/" className="text-4xl font-semibold text-white mb-6 block">
              MonoArch*
            </Link>
            <p className="text-white/60 text-xl font-[500] max-w-sm mb-8 leading-relaxed">
              Thoughtful design for everyday living,
              crafted with comfort and style in mind.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full text-[17px] font-[500] px-6 py-6 bg-white/5 border-white/10 text-white hover:bg-[#434343] hover:text-white border"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          {/* Links Columns - Pushed to right */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-12 lg:gap-24 lg:justify-end mt-10 md:mt-0">
            {/* Links */}
            <div>
              <h4 className="text-white mb-6 text-[17px] font-[500]">Links</h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/60 text-[17px] font-[500] hover:text-[#434343] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-white mb-6 text-[17px] font-[500]">Socials</h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 text-[17px] font-[500] hover:text-[#434343] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 text-[14px] md:text-[17px] font-[500] text-white/40 pt-8 border-t border-white/5 md:border-none">
          <p>Copyright © {new Date().getFullYear()} – All Right Reserved</p>
          <p>
            Developed by{" "}
            <a
              href="https://tryzeniq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TryzenIQ
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
