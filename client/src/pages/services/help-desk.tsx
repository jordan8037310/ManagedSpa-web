import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Headphones, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support ensuring your practice never experiences downtime during critical hours."
  },
  {
    icon: Headphones,
    title: "Expert Technicians",
    description: "HIPAA-trained IT professionals who understand the unique needs of medical spa environments."
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Average response time under 15 minutes for critical issues affecting patient care."
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "All support interactions maintain strict HIPAA compliance and patient data protection."
  }
];

const benefits = [
  "Immediate troubleshooting for appointment systems",
  "EMR and practice management software support",
  "Network connectivity and Wi-Fi issues",
  "Printer and hardware troubleshooting",
  "Software installation and updates",
  "Password resets and user account management",
  "Security incident response",
  "Backup and disaster recovery assistance"
];

export default function HelpDesk() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              24/7 Help Desk Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Never let IT issues disrupt your patient care. Our expert technicians are available around the clock to keep your practice running smoothly.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="tel:+1-800-MNGDSPA">
                <Phone className="mr-2 h-5 w-5" />
                Call 1-800-MNGDSPA
              </a>
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Our Help Desk?
              </h2>
              <p className="text-lg text-muted-foreground">
                Medical spas have unique IT requirements. Our help desk is specifically designed for healthcare environments.
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Complete IT Support Coverage
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From appointment scheduling systems to patient management software, we handle every aspect of your practice's technology infrastructure.
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
                    <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Dedicated Support Team
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your practice gets assigned a dedicated team of technicians who learn your specific systems and processes.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Average Response Time:</span>
                        <span className="font-semibold text-primary">Under 15 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Resolution Rate:</span>
                        <span className="font-semibold text-primary">98.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Availability:</span>
                        <span className="font-semibold text-primary">24/7/365</span>
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
              Ready to Experience Stress-Free IT Support?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join hundreds of medical spas who trust ManagedSpa for their IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="tel:+1-800-MNGDSPA">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-MNGDSPA
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/assessment">Schedule Assessment</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}