import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  // { label: "Testimonials", href: "/#testimonials" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");

      if (location.pathname === "/") {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home page first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="backdrop-blur-xl px-6 py-2">
        <div className="px-0 md:px-0 lg:px-10 xl:px-28 mx-auto container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[26px] leading-[36px] font-semibold text-foreground z-50">
            MonoArch*
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground text-[17px] leading-[26px] font-medium hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "text-muted-foreground text-[17px] leading-[26px] font-medium hover:text-foreground transition-colors",
                    location.pathname === link.href && "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className=" h-12 px-6 rounded-full bg-white border-2 hover:border-[#565656] text-black text-md font-medium hover:bg-[#434343] hover:text-white"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Only visible when closed */}
          {!isOpen && (
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </nav>

      {/* Full Page Mobile / Tablet Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background flex flex-col transition-all duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-[26px] leading-[36px] font-semibold text-foreground"
            onClick={() => setIsOpen(false)}
          >
            MonoArch*
          </Link>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 mt-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground text-2xl font-medium text-left hover:text-muted-foreground transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-foreground text-2xl font-medium text-left hover:text-muted-foreground transition-colors",
                  location.pathname === link.href && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-fit h-12 bg-white rounded-full text-black px-6 inline-flex items-center justify-center font-medium text-[17px] hover:bg-white/90 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
};
