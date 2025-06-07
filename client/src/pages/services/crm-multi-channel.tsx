import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Smartphone, Mail, Calendar, Zap, Phone, Globe } from "lucide-react";

const crmPlatforms = [
  {
    name: "HighLevel (GoHighLevel)",
    description: "All-in-One Marketing Platform",
    icon: Zap,
    features: [
      "Unified CRM and marketing automation",
      "SMS and email campaign management",
      "Multi-channel conversation management",
      "Appointment scheduling integration",
      "Lead nurturing workflows",
      "Social media management",
      "White-label capabilities"
    ],
    specialty: "Complete marketing and CRM solution for med spas"
  },
  {
    name: "Pabau",
    description: "All-in-One Clinic Management",
    icon: Users,
    features: [
      "Client journey optimization",
      "Treatment history tracking",
      "Automated follow-up sequences",
      "Online booking integration",
      "Staff scheduling and management",
      "Financial reporting",
      "Client communication hub"
    ],
    specialty: "Purpose-built for aesthetic clinics and med spas"
  },
  {
    name: "HubSpot",
    description: "Enterprise CRM Platform",
    icon: Globe,
    features: [
      "Advanced contact management",
      "Deal pipeline tracking",
      "Marketing automation",
      "Customer service tools",
      "Reporting and analytics",
      "Third-party integrations",
      "Scalable architecture"
    ],
    specialty: "Robust CRM solution for growing med spa businesses"
  }
];

const communicationChannels = [
  { channel: "SMS/Text Messaging", icon: MessageCircle, description: "Direct text communication with clients" },
  { channel: "WhatsApp Business", icon: MessageCircle, description: "Secure messaging with multimedia support" },
  { channel: "Facebook Messenger", icon: MessageCircle, description: "Social media customer service" },
  { channel: "Instagram Direct", icon: MessageCircle, description: "Visual platform engagement" },
  { channel: "Live Website Chat", icon: MessageCircle, description: "Real-time visitor assistance" },
  { channel: "Email Communication", icon: Mail, description: "Professional email marketing and support" },
  { channel: "Voice Calls", icon: Phone, description: "Traditional phone support" },
  { channel: "Video Consultations", icon: Phone, description: "Virtual appointment capabilities" }
];

const teamsIntegration = [
  "Microsoft Teams Phone System integration",
  "Unified contact center dashboard",
  "Call routing and queue management",
  "Screen sharing for virtual consultations",
  "Recording capabilities for training",
  "Mobile app access for remote staff",
  "Integration with scheduling systems",
  "Advanced analytics and reporting"
];

const benefits = [
  {
    title: "Unified Communications",
    description: "All client interactions in one centralized platform",
    metric: "50% faster response times"
  },
  {
    title: "No Lost Leads",
    description: "Every inquiry is captured and tracked automatically",
    metric: "25% increase in lead conversion"
  },
  {
    title: "Improved Client Experience",
    description: "Clients can reach you on their preferred channel",
    metric: "40% higher satisfaction scores"
  },
  {
    title: "Staff Efficiency",
    description: "Streamlined workflows reduce context switching",
    metric: "30% productivity improvement"
  }
];

export default function CRMMultiChannel() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              CRM & Multi-Channel Chat Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Unify your customer relationships and communications across all channels - from SMS and social media to voice calls and video consultations.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get CRM Integration
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Specialized Med Spa CRM Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                We integrate and maintain CRM systems tailored specifically for medical spa operations.
              </p>
            </div>

            <div className="space-y-8">
              {crmPlatforms.map((platform, index) => {
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
                                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Multi-Channel Communication Hub
              </h2>
              <p className="text-lg text-muted-foreground">
                Manage all client communications from a single, unified dashboard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communicationChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground mb-2">{channel.channel}</h3>
                      <p className="text-xs text-muted-foreground">{channel.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Microsoft Teams Phone System Integration
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Transform your Microsoft Teams into a complete contact center that unifies voice calls, SMS, chat, and social messaging in one interface.
                </p>
                
                <div className="grid gap-3">
                  {teamsIntegration.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Optional Slack Upgrade
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      For teams that prefer Slack, we can create a cloud contact center that brings all communication channels into your Slack workspace.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Platform Options:</span>
                        <span className="font-semibold text-primary">Teams or Slack</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Channel Integration:</span>
                        <span className="font-semibold text-primary">All Channels</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time:</span>
                        <span className="font-semibold text-primary">Under 2 minutes</span>
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
                Centralized Booking & Support Desk
              </h2>
              <p className="text-lg text-muted-foreground">
                Every client interaction flows into one unified queue - no more bouncing between platforms.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Unified Booking</h3>
                    <p className="text-muted-foreground">All appointment requests from any channel flow into your scheduling system automatically.</p>
                  </div>
                  <div>
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Customer Service</h3>
                    <p className="text-muted-foreground">Support tickets, inquiries, and follow-ups managed from a single dashboard interface.</p>
                  </div>
                  <div>
                    <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">Lead Management</h3>
                    <p className="text-muted-foreground">Every potential client inquiry is captured, tracked, and nurtured automatically.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Proven Results for Med Spas
              </h2>
              <p className="text-lg text-muted-foreground">
                Unified communications deliver measurable improvements in efficiency and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm font-semibold text-primary">{benefit.metric}</p>
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
              Ready to Unify Your Communications?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a unified CRM and communication system that ensures no lead falls through the cracks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="/assessment">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Free CRM Assessment
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