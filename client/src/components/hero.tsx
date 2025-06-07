import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-wellness/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="heading-1 text-slate-900">
                All-You-Can-Eat{" "}
                <span className="text-primary">IT Support</span> for Med Spas
              </h1>
              <p className="body-large text-slate-600">
                Unlimited IT support, Microsoft 365 integration, and HIPAA compliance for aesthetic wellness practices. One flat fee per staff member - no surprises, no limits.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg"
                asChild
              >
                <a href="/growth-checklist">Get Free Checklist</a>
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
              >
                Get Free Consultation
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">HIPAA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">Unlimited</div>
                <div className="text-sm text-slate-600">Help Desk</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern med spa interior with advanced technology"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-wellness rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">
                  Systems Online & Monitored
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
