import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Star } from "lucide-react";
import logo from "@/assets/manam-logo.png";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Upcoming Events", action: () => scrollToSection("upcoming-events"), highlight: true },
    { label: "Impact", action: () => scrollToSection("impact") },
    { label: "Events", action: () => scrollToSection("events") },
    { label: "Gallery", action: () => scrollToSection("gallery") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt="Manam Foundation Logo"
              className="h-12 w-12 md:h-16 md:w-16 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
              Manam Foundation
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                className={cn(
                  "text-foreground hover:text-primary hover:bg-accent transition-colors relative",
                  link.highlight && "text-primary"
                )}
                onClick={link.action}
              >
                {link.highlight && (
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse" />
                )}
                {link.label}
              </Button>
            ))}
            <Button
              className="ml-4"
              onClick={() => scrollToSection("contact")}
            >
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-foreground hover:text-primary hover:bg-accent",
                    link.highlight && "text-primary"
                  )}
                  onClick={link.action}
                >
                  {link.highlight && (
                    <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse" />
                  )}
                  {link.label}
                </Button>
              ))}
              <Button
                className="w-full mt-2"
                onClick={() => scrollToSection("contact")}
              >
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

