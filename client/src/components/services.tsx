import { Headphones, Shield, Cloud, TrendingUp, Database, Wrench, Check, FileText, MessageCircle, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollLink } from "@/components/ui/scroll-link";

const services = [
  {
    icon: Headphones,
    title: "24/7 Help Desk Support",
    description: "Round-the-clock technical assistance for your entire team. Get help whenever you need it, no matter the time.",
    features: ["Unlimited support tickets", "Remote troubleshooting", "Software training"],
    color: "primary",
    link: "/services/help-desk"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance & Security",
    description: "Multi-layered security designed specifically for healthcare practices handling sensitive patient data.",
    features: ["Email encryption", "Firewall management", "Regular security audits"],
    color: "wellness",
    link: "/services/hipaa-compliance"
  },
  {
    icon: Cloud,
    title: "Microsoft 365 Integration",
    description: "Complete Microsoft 365 setup and management designed specifically for medical spa environments.",
    features: ["Professional email", "Document management", "Team collaboration"],
    color: "accent-orange",
    link: "/services/microsoft-365"
  },
  {
    icon: TrendingUp,
    title: "Security Management",
    description: "Enterprise-grade security solutions protecting your practice from cyber threats and data breaches.",
    features: ["Advanced firewall", "24/7 monitoring", "Threat detection"],
    color: "primary",
    link: "/services/security-management"
  },
  {
    icon: Database,
    title: "Cloud Integration",
    description: "Seamless cloud migration and integration solutions for modern medical spa operations.",
    features: ["Data migration", "System integration", "Cloud optimization"],
    color: "wellness",
    link: "/services/cloud-integration"
  },
  {
    icon: FileText,
    title: "EHR/EMR Integration",
    description: "Specialized integration and management of medical spa EHR systems like Aesthetic Record and Symplast.",
    features: ["Aesthetic Record", "Symplast", "Nextech"],
    color: "accent-orange",
    link: "/services/ehr-emr-integration"
  },
  {
    icon: MessageCircle,
    title: "CRM & Multi-Channel Chat",
    description: "Unified customer relationship management with integrated SMS, social media, and communication tools.",
    features: ["HighLevel integration", "Teams phone system", "Social messaging"],
    color: "primary",
    link: "/services/crm-multi-channel"
  },
  {
    icon: Zap,
    title: "Med Spa Automation",
    description: "Intelligent business process automation for client lifecycle management and operational efficiency.",
    features: ["Customer lifecycle", "Recurring billing", "Churn management"],
    color: "wellness",
    link: "/services/medspa-automation"
  }
];

export function Services() {
  return (
    <Section id="services" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="heading-2 text-slate-900 mb-4">
          Comprehensive IT Services for Aesthetic Wellness
        </h2>
        <p className="body-large text-slate-600 max-w-4xl mx-auto">
          From daily helpdesk support to strategic IT planning, we handle every aspect of your practice's technology needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${bgColorClass} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`${iconColorClass} h-6 w-6`} />
                </div>
                <ScrollLink href={service.link} className="block">
                  <h3 className="heading-5 text-slate-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                    {service.title}
                  </h3>
                </ScrollLink>
                <p className="body-small text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-xs text-slate-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-3 w-3 text-wellness mr-2 flex-shrink-0" />
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
