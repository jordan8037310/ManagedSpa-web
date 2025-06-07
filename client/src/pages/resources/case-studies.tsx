import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, Shield, DollarSign, Star } from "lucide-react";

const caseStudies = [
  {
    title: "Luxe Medical Spa",
    subtitle: "Complete IT Transformation",
    location: "Beverly Hills, CA",
    staffSize: "25 employees",
    challenge: "Outdated systems causing appointment booking failures and HIPAA compliance concerns",
    solution: "Full Microsoft 365 migration, HIPAA compliance program, and 24/7 monitoring",
    results: [
      { metric: "System Uptime", value: "99.9%", improvement: "+15%" },
      { metric: "Booking Efficiency", value: "40%", improvement: "faster" },
      { metric: "IT Costs", value: "35%", improvement: "reduction" },
      { metric: "Security Incidents", value: "0", improvement: "Zero breaches" }
    ],
    testimonial: "ManagedSpa transformed our practice. We went from constant IT headaches to seamless operations.",
    author: "Dr. Sarah Chen, Medical Director"
  },
  {
    title: "Elite Aesthetics",
    subtitle: "Security & Compliance Overhaul",
    location: "Miami, FL", 
    staffSize: "12 employees",
    challenge: "Failed HIPAA audit and multiple security vulnerabilities",
    solution: "Comprehensive security assessment, policy development, and staff training",
    results: [
      { metric: "Compliance Score", value: "100%", improvement: "HIPAA compliant" },
      { metric: "Security Rating", value: "A+", improvement: "from D-" },
      { metric: "Staff Training", value: "100%", improvement: "completion" },
      { metric: "Vulnerability Fixes", value: "47", improvement: "issues resolved" }
    ],
    testimonial: "We passed our follow-up audit with flying colors. The peace of mind is invaluable.",
    author: "Maria Rodriguez, Practice Manager"
  },
  {
    title: "Rejuvenation Center",
    subtitle: "Cloud Migration Success",
    location: "Austin, TX",
    staffSize: "18 employees", 
    challenge: "Legacy systems limiting growth and remote work capabilities",
    solution: "Cloud infrastructure migration and mobile device management",
    results: [
      { metric: "Remote Access", value: "100%", improvement: "staff enabled" },
      { metric: "System Speed", value: "3x", improvement: "faster" },
      { metric: "Storage Costs", value: "50%", improvement: "reduction" },
      { metric: "Backup Recovery", value: "15 min", improvement: "vs 4 hours" }
    ],
    testimonial: "The cloud migration enabled us to expand to a second location seamlessly.",
    author: "Dr. Michael Torres, Owner"
  }
];

const industryStats = [
  { stat: "98%", description: "of our clients report improved efficiency" },
  { stat: "Zero", description: "HIPAA violations among our clients" },
  { stat: "24/7", description: "average support response time under 15 minutes" },
  { stat: "40%", description: "average reduction in IT costs" }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how medical spas across the country have transformed their operations with ManagedSpa's IT solutions.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <TrendingUp className="mr-2 h-5 w-5" />
              See Your Potential
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <Card key={index} className="shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className="bg-primary text-white p-8">
                        <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                        <p className="text-primary-foreground/90 mb-4">{study.subtitle}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Location:</span>
                            <span>{study.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{study.staffSize}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <h4 className="font-bold text-foreground mb-3">Challenge</h4>
                        <p className="text-muted-foreground mb-6">{study.challenge}</p>
                        
                        <h4 className="font-bold text-foreground mb-3">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div className="bg-muted/30 p-8">
                        <h4 className="font-bold text-foreground mb-6">Results</h4>
                        <div className="space-y-4 mb-6">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">{result.metric}:</span>
                              <div className="text-right">
                                <div className="font-bold text-primary">{result.value}</div>
                                <div className="text-xs text-muted-foreground">{result.improvement}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="border-t pt-4">
                          <div className="flex items-start space-x-3">
                            <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-foreground italic mb-2">"{study.testimonial}"</p>
                              <p className="text-xs text-muted-foreground">— {study.author}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Proven Results Across the Industry
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Join hundreds of medical spas who have transformed their operations with our solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {industryStats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{item.stat}</div>
                  <p className="text-primary-foreground/90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free assessment and discover how we can transform your practice operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Clock className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Case Study PDF
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}