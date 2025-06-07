import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Smartphone, Cloud, Users, Database, Zap, CheckCircle } from "lucide-react";

const ehrPlatforms = [
  {
    name: "Aesthetic Record",
    description: "All-in-One Med Spa EMR",
    icon: FileText,
    features: [
      "HIPAA-compliant practice management",
      "Integrated charting and telehealth",
      "Before/after photo management",
      "Point-of-sale integration",
      "Online booking system",
      "Inventory and loyalty programs",
      "KPI reporting and analytics"
    ],
    specialty: "Purpose-built for medical spas and wellness clinics"
  },
  {
    name: "Symplast",
    description: "Mobile Cloud EHR for Aesthetics",
    icon: Smartphone,
    features: [
      "Mobile-first platform design",
      "Intuitive aesthetic workflow charting",
      "Patient app for two-way engagement",
      "Front desk automation",
      "Plastic surgery optimization",
      "Cloud-based accessibility",
      "Streamlined check-in process"
    ],
    specialty: "#1 mobile EHR for plastic surgery and med spa businesses"
  },
  {
    name: "Nextech",
    description: "Scalable Med Spa Software",
    icon: Cloud,
    features: [
      "Single to multi-location scaling",
      "HIPAA-compliant data security",
      "Certified cloud datacenter hosting",
      "Multiple security layers",
      "Enterprise-grade infrastructure",
      "Advanced reporting capabilities",
      "Third-party integrations"
    ],
    specialty: "Robust solution for growing med spa enterprises"
  }
];

const integrationServices = [
  "EMR system setup and configuration",
  "Data migration from legacy systems",
  "HIPAA compliance implementation",
  "Staff training and onboarding",
  "Workflow optimization",
  "Third-party system integration",
  "Ongoing support and maintenance",
  "Software vendor liaison services"
];

const benefits = [
  {
    title: "Streamlined Workflows",
    description: "Reduce administrative burden and automate routine tasks",
    impact: "40% time savings on administrative work"
  },
  {
    title: "Enhanced Patient Care",
    description: "Better access to patient history and treatment plans",
    impact: "Improved patient satisfaction scores"
  },
  {
    title: "Compliance Assurance",
    description: "Built-in HIPAA compliance and security measures",
    impact: "Zero compliance violations"
  },
  {
    title: "Data-Driven Insights",
    description: "Comprehensive reporting and analytics capabilities",
    impact: "Better business decision making"
  }
];

export default function EHRIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              EHR/EMR Integration & Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seamlessly integrate and manage specialized Electronic Health Record systems designed specifically for medical spas and wellness practices.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Database className="mr-2 h-5 w-5" />
              Schedule EHR Consultation
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Specialized Med Spa EHR Platforms
              </h2>
              <p className="text-lg text-muted-foreground">
                We integrate and support the leading EHR/EMR platforms designed specifically for aesthetic wellness practices.
              </p>
            </div>

            <div className="space-y-8">
              {ehrPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <Card key={index} className="shadow-xl">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="text-center lg:text-left">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
                          <p className="text-lg text-primary font-semibold mb-4">{platform.description}</p>
                          <p className="text-muted-foreground italic">{platform.specialty}</p>
                        </div>
                        
                        <div className="lg:col-span-2">
                          <h4 className="font-bold text-foreground mb-6">Key Features & Capabilities:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {platform.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Complete EHR Integration Services
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team handles every aspect of your EHR implementation and ongoing management, ensuring seamless integration with your practice workflows.
                </p>
                
                <div className="grid gap-3">
                  {integrationServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Your Tech Liaison
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We coordinate directly with EHR vendors on your behalf, handling support tickets, feature requests, and system updates.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vendor Coordination:</span>
                        <span className="font-semibold text-primary">Full Service</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">System Updates:</span>
                        <span className="font-semibold text-primary">Automated</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Backups:</span>
                        <span className="font-semibold text-primary">Daily</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Proven Benefits for Med Spas
              </h2>
              <p className="text-lg text-muted-foreground">
                Modern EHR systems are proven to streamline workflows and reduce administrative burden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">{benefit.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your EHR System?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get expert EHR integration and management tailored specifically for your med spa practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Shield className="mr-2 h-5 w-5" />
                Free EHR Assessment
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