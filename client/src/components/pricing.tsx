import { Calculator, Infinity, TrendingUp, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const included = [
  "24/7 help desk support",
  "Remote troubleshooting",
  "On-site visits when needed",
  "Microsoft 365 management",
  "HIPAA compliance monitoring"
];

const proactive = [
  "Network monitoring",
  "Security management",
  "Automated backups",
  "Software updates",
  "Strategic IT planning"
];

const benefits = [
  {
    icon: Calculator,
    title: "Predictable Budgeting",
    description: "Know exactly what you'll spend on IT each month. No surprise bills or hidden fees.",
    color: "primary"
  },
  {
    icon: Infinity,
    title: "Unlimited Support",
    description: "Call as often as you need. Every ticket, every question, every training session is included.",
    color: "wellness"
  },
  {
    icon: TrendingUp,
    title: "Scales With Growth",
    description: "Add new staff members easily. Our pricing grows with your practice, not against it.",
    color: "accent-orange"
  }
];

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="pricing" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="heading-2 text-slate-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="body-large text-slate-600 max-w-3xl mx-auto">
          One flat fee per staff member gives you unlimited IT support. No surprises, no hidden costs, no limits on help desk tickets.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-wellness px-8 py-6">
            <h3 className="heading-3 text-white text-center">All-You-Can-Eat IT Support</h3>
            <p className="body-base text-primary-foreground/80 text-center mt-2">Everything your med spa needs in one simple package</p>
          </div>
          
          <CardContent className="px-8 py-12">
            <div className="text-center mb-8">
              <div className="heading-1 text-slate-900 mb-2">
                Custom Pricing
              </div>
              <div className="body-large text-slate-600">Per staff member, per month</div>
              <div className="body-medium text-wellness font-semibold mt-2">Starting from $150/user/month</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">Unlimited Support Includes:</h4>
                <div className="space-y-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-wellness flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">Proactive Services:</h4>
                <div className="space-y-3">
                  {proactive.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-wellness flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg"
              >
                Get Custom Quote
              </Button>
              <p className="text-sm text-slate-600">Free consultation • No long-term contracts • 30-day money-back guarantee</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          const iconColorClass = benefit.color === "primary" ? "text-primary" : 
                                 benefit.color === "wellness" ? "text-wellness" : 
                                 "text-accent-orange";
          const bgColorClass = benefit.color === "primary" ? "bg-primary/10" : 
                               benefit.color === "wellness" ? "bg-wellness/10" : 
                               "bg-accent-orange/10";
          
          return (
            <div key={index} className="text-center space-y-4">
              <div className={`w-16 h-16 ${bgColorClass} rounded-full flex items-center justify-center mx-auto`}>
                <Icon className={`${iconColorClass} h-8 w-8`} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
