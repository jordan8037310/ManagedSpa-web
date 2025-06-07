import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Lock, Eye, AlertTriangle, Users } from "lucide-react";

const complianceFeatures = [
  {
    icon: Shield,
    title: "Risk Assessments",
    description: "Comprehensive security risk assessments tailored to medical spa environments and patient data handling."
  },
  {
    icon: FileCheck,
    title: "Policy Development",
    description: "Custom HIPAA policies and procedures specifically written for aesthetic wellness practices."
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for all patient data, both in transit and at rest, meeting HIPAA requirements."
  },
  {
    icon: Eye,
    title: "Audit Monitoring",
    description: "Continuous monitoring and audit trails to track access to protected health information (PHI)."
  }
];

const complianceServices = [
  "HIPAA Risk Assessment & Gap Analysis",
  "Business Associate Agreements (BAAs)",
  "Employee HIPAA Training Programs",
  "Incident Response Planning",
  "Data Backup & Recovery Solutions",
  "Access Control & User Management",
  "Network Security & Firewall Management",
  "Regular Compliance Audits & Reporting"
];

const penalties = [
  { range: "$100 - $50,000", description: "Per violation for unknowing violations" },
  { range: "$1,000 - $50,000", description: "Per violation for reasonable cause" },
  { range: "$10,000 - $50,000", description: "Per violation for willful neglect (corrected)" },
  { range: "$50,000+", description: "Per violation for willful neglect (not corrected)" }
];

export default function HIPAACompliance() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              HIPAA Compliance Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Protect your patients and your practice with comprehensive HIPAA compliance management designed specifically for medical spas and aesthetic wellness centers.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Shield className="mr-2 h-5 w-5" />
              Get Compliance Assessment
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete HIPAA Protection
              </h2>
              <p className="text-lg text-muted-foreground">
                From risk assessments to ongoing monitoring, we ensure your practice maintains full HIPAA compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFeatures.map((feature, index) => {
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

        <Section className="py-16 bg-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                HIPAA Violation Penalties
              </h2>
              <p className="text-lg text-muted-foreground">
                The cost of non-compliance can be devastating. Protect your practice with proper HIPAA management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {penalties.map((penalty, index) => (
                <Card key={index} className="text-center border-red-200">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-red-600 mb-2">{penalty.range}</div>
                    <p className="text-sm text-muted-foreground">{penalty.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                *Maximum annual penalty can reach $1.5 million per violation category
              </p>
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Comprehensive Compliance Services
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our HIPAA compliance program covers every aspect of patient data protection, from initial assessment to ongoing monitoring and training.
                </p>
                
                <div className="grid gap-3">
                  {complianceServices.map((service, index) => (
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
                      Staff Training Included
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive HIPAA training for all staff members, with regular updates and certification tracking.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Training Modules:</span>
                        <span className="font-semibold text-primary">12+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Certification Valid:</span>
                        <span className="font-semibold text-primary">1 Year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completion Tracking:</span>
                        <span className="font-semibold text-primary">Automated</span>
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
              Don't Risk Your Practice's Future
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a comprehensive HIPAA compliance assessment and protect your patients' data today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Shield className="mr-2 h-5 w-5" />
                Free Compliance Audit
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download HIPAA Guide
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}