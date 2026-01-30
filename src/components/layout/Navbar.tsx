import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/#testimonials" },
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
      <nav className="glass-strong mx-4 mt-4 rounded-full px-6 py-4">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Buildio*
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    location.pathname === link.href && "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button
                asChild
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 w-full mt-2"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
