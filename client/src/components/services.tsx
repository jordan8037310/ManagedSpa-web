import { Headphones, Shield, Cloud, TrendingUp, Database, Wrench, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Headphones,
    title: "24/7 Help Desk Support",
    description: "Round-the-clock technical assistance for your entire team. Get help whenever you need it, no matter the time.",
    features: ["Unlimited support tickets", "Remote troubleshooting", "Software training"],
    color: "primary"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance & Security",
    description: "Multi-layered security designed specifically for healthcare practices handling sensitive patient data.",
    features: ["Email encryption", "Firewall management", "Regular security audits"],
    color: "wellness"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with spa management software, scheduling systems, and Microsoft 365.",
    features: ["Software integration", "Data migration", "Vendor coordination"],
    color: "accent-orange"
  },
  {
    icon: TrendingUp,
    title: "Proactive Monitoring",
    description: "Continuous system monitoring to prevent issues before they impact your practice operations.",
    features: ["Network monitoring", "Performance optimization", "Preventive maintenance"],
    color: "primary"
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Automated backups and disaster recovery planning to protect your critical business data.",
    features: ["Automated backups", "Disaster recovery", "Business continuity"],
    color: "wellness"
  },
  {
    icon: Wrench,
    title: "On-Site Support",
    description: "When remote support isn't enough, our technicians provide on-site assistance at your location.",
    features: ["Equipment installation", "Network setup", "Staff training"],
    color: "accent-orange"
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Comprehensive IT Services for Aesthetic Wellness
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
          From daily helpdesk support to strategic IT planning, we handle every aspect of your practice's technology needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          const iconColorClass = service.color === "primary" ? "text-primary" : 
                                 service.color === "wellness" ? "text-wellness" : 
                                 "text-accent-orange";
          const bgColorClass = service.color === "primary" ? "bg-primary/10" : 
                               service.color === "wellness" ? "bg-wellness/10" : 
                               "bg-accent-orange/10";
          
          return (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`${iconColorClass} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-wellness mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
