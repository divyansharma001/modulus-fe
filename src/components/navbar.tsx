
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-card/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Mod</span>
              <span className="text-xl font-bold text-foreground">ulus</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="pages/questions"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Questions
            </a>
            <a
              href="#peer-finder"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Find Peers
            </a>
            <a
              href="#mentorship"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              1:1 Mentorship
            </a>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button size="sm" variant="outline">
                Log in
              </Button>
              <Button size="sm">Sign up free</Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-card p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a
              href="/pages/questions"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Questions
            </a>
            <a
              href="#peer-finder"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Peers
            </a>
            <a
              href="#mentorship"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              1:1 Mentorship
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button className="w-full">Sign up free</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
