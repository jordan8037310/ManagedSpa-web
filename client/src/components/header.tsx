import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <BrandLogo 
                className="heading-4 text-primary hover:text-primary/80 transition-colors"
                onClick={handleLogoClick}
              />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('microsoft365')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Microsoft 365
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href="/assessment">Get Started</a>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('services')}
              className="block text-slate-600 hover:text-primary py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('microsoft365')}
              className="block text-slate-600 hover:text-primary py-2"
            >
              Microsoft 365
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block text-slate-600 hover:text-primary py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block text-slate-600 hover:text-primary py-2"
            >
              Testimonials
            </button>
            <Button
              className="block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-center mt-4 w-full"
              asChild
            >
              <a href="/assessment">Get Started</a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
