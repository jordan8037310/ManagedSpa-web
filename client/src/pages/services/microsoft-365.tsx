import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Mail, Calendar, FileText, Users, Shield, Smartphone, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Professional Email",
    description: "Custom domain email with 50GB mailbox and advanced spam protection for your practice."
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Integrated calendar system with patient booking capabilities and automated reminders."
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Secure patient file storage with version control and HIPAA-compliant sharing."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Microsoft Teams integration for secure staff communication and virtual consultations."
  }
];

const applications = [
  { name: "Outlook", description: "Professional email and calendar management" },
  { name: "Word", description: "Patient forms and treatment documentation" },
  { name: "Excel", description: "Financial reporting and patient tracking" },
  { name: "PowerPoint", description: "Patient education and staff training materials" },
  { name: "Teams", description: "Secure communication and virtual consultations" },
  { name: "SharePoint", description: "Document management and collaboration" },
  { name: "OneDrive", description: "Secure cloud storage with automatic backup" },
  { name: "Power BI", description: "Business intelligence and practice analytics" }
];

const benefits = [
  "HIPAA-compliant cloud storage",
  "Advanced threat protection",
  "Mobile device management",
  "Multi-factor authentication",
  "Automatic software updates",
  "24/7 technical support"
];

export default function Microsoft365() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Microsoft 365 for Med Spas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Streamline your practice operations with a complete Microsoft 365 solution designed for healthcare environments with built-in HIPAA compliance.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Cloud className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Everything Your Practice Needs
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete productivity suite with healthcare-specific configurations and security features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete Application Suite
              </h2>
              <p className="text-lg text-muted-foreground">
                Access to all Microsoft 365 applications with healthcare-optimized configurations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">{app.name}</h4>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Healthcare-Grade Security
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Microsoft 365 configured specifically for medical practices with enhanced security features and HIPAA compliance built-in.
                </p>
                
                <div className="grid gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Enterprise Security
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Advanced threat protection, data loss prevention, and compliance management included.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Encryption:</span>
                        <span className="font-semibold text-primary">256-bit AES</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Uptime SLA:</span>
                        <span className="font-semibold text-primary">99.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance:</span>
                        <span className="font-semibold text-primary">HIPAA Ready</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Modernize Your Practice?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get Microsoft 365 configured for your medical spa with full setup and training included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Cloud className="mr-2 h-5 w-5" />
                Start 30-Day Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}