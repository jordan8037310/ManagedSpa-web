import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, RefreshCw, Database, Smartphone, Globe, Shield, Zap, Users } from "lucide-react";

const cloudFeatures = [
  {
    icon: Database,
    title: "Seamless Migration",
    description: "Complete data migration from legacy systems to modern cloud infrastructure with zero downtime."
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Automatic synchronization across all devices and locations for consistent data access."
  },
  {
    icon: Globe,
    title: "Remote Access",
    description: "Secure access to practice systems from anywhere with internet connectivity."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols protecting your patient data in the cloud."
  }
];

const integrations = [
  { name: "Practice Management Systems", description: "EMR, scheduling, and billing software" },
  { name: "Patient Communication", description: "Automated reminders and follow-up systems" },
  { name: "Financial Systems", description: "Accounting and payment processing platforms" },
  { name: "Marketing Tools", description: "CRM and marketing automation platforms" },
  { name: "Imaging Systems", description: "Before/after photo management and storage" },
  { name: "Inventory Management", description: "Product and supply tracking systems" }
];

const benefits = [
  "Reduced IT infrastructure costs",
  "Automatic software updates",
  "Scalable storage solutions",
  "Enhanced disaster recovery",
  "Improved collaboration tools",
  "Mobile device compatibility",
  "24/7 system availability",
  "Simplified user management"
];

export default function CloudIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Cloud Integration Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your practice with seamless cloud integration that enhances efficiency, reduces costs, and provides secure access to your systems from anywhere.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Cloud className="mr-2 h-5 w-5" />
              Start Cloud Migration
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete Cloud Transformation
              </h2>
              <p className="text-lg text-muted-foreground">
                Modern cloud solutions designed specifically for medical spa operations and patient care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudFeatures.map((feature, index) => {
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
                System Integration Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect all your practice management tools in one unified cloud environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">{integration.name}</h4>
                    <p className="text-muted-foreground">{integration.description}</p>
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
                  Cloud Migration Made Simple
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our expert team handles every aspect of your cloud migration, ensuring minimal disruption to your practice operations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Data Assessment</h4>
                      <p className="text-muted-foreground">Complete analysis of your current systems and data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Seamless Migration</h4>
                      <p className="text-muted-foreground">Zero-downtime migration with data integrity protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Staff Training</h4>
                      <p className="text-muted-foreground">Comprehensive training on new cloud systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Performance Benefits
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Experience faster systems, better reliability, and reduced operational costs.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">System Speed:</span>
                        <span className="font-semibold text-primary">3x Faster</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Uptime:</span>
                        <span className="font-semibold text-primary">99.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cost Reduction:</span>
                        <span className="font-semibold text-primary">Up to 40%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Cloud Integration?
              </h2>
              <p className="text-lg text-muted-foreground">
                Modern practices require modern solutions. Cloud integration provides the foundation for growth and efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a free cloud readiness assessment and discover how cloud integration can transform your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="/assessment">
                  <Cloud className="mr-2 h-5 w-5" />
                  Free Cloud Assessment
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+1-800-MNGDSPA">Call 1-800-MNGDSPA</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}