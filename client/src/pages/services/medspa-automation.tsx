import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Users, CreditCard, RotateCcw, Mail, Calendar, TrendingUp, Bot } from "lucide-react";

const automationPlatforms = [
  {
    name: "Make.com",
    description: "Advanced Automation Platform",
    icon: Zap,
    features: [
      "Visual workflow builder",
      "Advanced app connectivity",
      "Custom logic and conditions",
      "Error handling and monitoring",
      "Scalable automation processing",
      "Real-time data synchronization",
      "Multi-step workflow management"
    ],
    specialty: "Powerful automation for complex med spa workflows"
  },
  {
    name: "n8n",
    description: "Flexible Workflow Engine",
    icon: Bot,
    features: [
      "Self-hosted automation option",
      "Custom integrations possible",
      "Advanced data manipulation",
      "Webhook and API support",
      "Conditional workflow logic",
      "Database connectivity",
      "Open-source flexibility"
    ],
    specialty: "Customizable automation engine for unique requirements"
  }
];

const automationAreas = [
  {
    title: "Customer Lifecycle Management",
    icon: Users,
    description: "Automated client journey from inquiry to loyal customer",
    automations: [
      "Welcome email sequences for new inquiries",
      "Educational content delivery for prospects",
      "Pre-treatment preparation reminders",
      "Post-treatment care instructions",
      "Follow-up satisfaction surveys",
      "Birthday and anniversary campaigns",
      "Loyalty program notifications"
    ]
  },
  {
    title: "Recurring Billing & Memberships",
    icon: CreditCard,
    description: "Automated membership and package management",
    automations: [
      "Automatic membership renewals",
      "Failed payment retry sequences",
      "Expiration date reminders", 
      "Package usage tracking",
      "Billing notification emails",
      "Payment method updates",
      "Membership tier upgrades"
    ]
  },
  {
    title: "Follow-Up & Rebooking",
    icon: Calendar,
    description: "Intelligent rebooking and engagement sequences",
    automations: [
      "Thank you messages after visits",
      "Post-care instruction delivery",
      "Review request sequences",
      "Rebooking reminder campaigns",
      "Special offer notifications",
      "Seasonal treatment promotions",
      "Referral program invitations"
    ]
  },
  {
    title: "Churn Prediction & Win-Back",
    icon: RotateCcw,
    description: "AI-powered retention and reactivation campaigns",
    automations: [
      "Client activity monitoring",
      "Inactivity alert triggers",
      "Personalized win-back offers",
      "Staff notification systems",
      "Predictive analytics reports",
      "Risk scoring algorithms",
      "Retention strategy execution"
    ]
  }
];

const businessBenefits = [
  {
    title: "Operational Efficiency",
    description: "Eliminate repetitive manual tasks",
    metrics: ["60% reduction in administrative work", "40% faster client onboarding", "25% improved staff productivity"]
  },
  {
    title: "Enhanced Client Experience",
    description: "Consistent, personalized touchpoints",
    metrics: ["35% higher client satisfaction", "50% more consistent communication", "30% better retention rates"]
  },
  {
    title: "Revenue Growth",
    description: "Automated upselling and retention",
    metrics: ["20% increase in rebooking rates", "15% higher average transaction", "25% improved membership renewals"]
  },
  {
    title: "Scalable Operations",
    description: "Systems that grow with your practice",
    metrics: ["Support unlimited client growth", "Maintain quality at scale", "Reduce hiring needs"]
  }
];

const integrationCapabilities = [
  "EMR/EHR system connectivity",
  "CRM and marketing platform integration",
  "Payment processor automation",
  "Scheduling system synchronization",
  "Social media management",
  "Email marketing automation",
  "SMS campaign management",
  "Analytics and reporting dashboards"
];

export default function MedSpaAutomation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Med Spa Business Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your med spa into a well-oiled machine with intelligent automation that handles routine tasks, nurtures clients, and drives growth on autopilot.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Zap className="mr-2 h-5 w-5" />
              Automate My Practice
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Powerful Automation Platforms
              </h2>
              <p className="text-lg text-muted-foreground">
                We leverage industry-leading automation tools to create custom workflows for your practice.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {automationPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <Card key={index} className="shadow-xl">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{platform.name}</h3>
                        <p className="text-lg text-primary font-semibold mb-4">{platform.description}</p>
                        <p className="text-muted-foreground italic">{platform.specialty}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-foreground mb-4">Platform Capabilities:</h4>
                        <div className="grid gap-3">
                          {platform.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-sm text-foreground">{feature}</span>
                            </div>
                          ))}
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete Automation Coverage
              </h2>
              <p className="text-lg text-muted-foreground">
                Automate every aspect of your med spa operations for maximum efficiency and growth.
              </p>
            </div>

            <div className="space-y-8">
              {automationAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="shadow-xl">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="text-center lg:text-left">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">{area.title}</h3>
                          <p className="text-muted-foreground">{area.description}</p>
                        </div>
                        
                        <div className="lg:col-span-2">
                          <h4 className="font-bold text-foreground mb-6">Automated Workflows:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {area.automations.map((automation, autoIndex) => (
                              <div key={autoIndex} className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-sm text-foreground">{automation}</span>
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

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Automation delivers tangible results across all areas of your med spa operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessBenefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="space-y-2">
                      {benefit.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-primary/10 rounded-lg p-2">
                          <p className="text-xs font-semibold text-primary">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Seamless System Integration
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our automation solutions connect all your existing systems, creating a unified ecosystem that works in perfect harmony.
                </p>
                
                <div className="grid gap-3">
                  {integrationCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Real-Time Visibility
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Get comprehensive dashboards and alerts that keep you informed about your automated workflows and their performance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Workflow Monitoring:</span>
                        <span className="font-semibold text-primary">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Performance Reports:</span>
                        <span className="font-semibold text-primary">Real-time</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Error Handling:</span>
                        <span className="font-semibold text-primary">Automatic</span>
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
              Ready to Automate Your Med Spa?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your practice with intelligent automation that works 24/7 to grow your business and delight your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Zap className="mr-2 h-5 w-5" />
                Free Automation Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                See Demo Workflows
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}