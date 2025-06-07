import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Phone, Mail, MessageCircle, FileText, Search, Clock, Users, HelpCircle } from "lucide-react";

const supportOptions = [
  {
    icon: Phone,
    title: "24/7 Phone Support",
    description: "Immediate assistance for critical issues",
    contact: "(800) MANAGED",
    availability: "24/7/365",
    responseTime: "Immediate"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Quick help for general questions",
    contact: "Chat Now",
    availability: "6 AM - 10 PM EST",
    responseTime: "< 2 minutes"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Non-urgent requests and detailed issues",
    contact: "support@managedspa.com",
    availability: "Business Hours",
    responseTime: "< 4 hours"
  },
  {
    icon: FileText,
    title: "Submit Ticket",
    description: "Track complex issues and requests",
    contact: "Open Ticket",
    availability: "Always Available",
    responseTime: "< 1 hour"
  }
];

const quickLinks = [
  { title: "Password Reset", category: "Account" },
  { title: "HIPAA Training Portal", category: "Compliance" },
  { title: "Microsoft 365 Setup", category: "Software" },
  { title: "VPN Configuration", category: "Network" },
  { title: "Backup Status Check", category: "Data" },
  { title: "Security Incident Report", category: "Security" }
];

const knowledgeBase = [
  {
    title: "Getting Started with Microsoft 365",
    description: "Complete setup guide for new Microsoft 365 accounts",
    category: "Software",
    views: "2.5k views"
  },
  {
    title: "HIPAA Compliance Checklist",
    description: "Essential steps to maintain HIPAA compliance",
    category: "Compliance", 
    views: "1.8k views"
  },
  {
    title: "Troubleshooting Network Issues",
    description: "Common network problems and solutions",
    category: "Network",
    views: "1.2k views"
  },
  {
    title: "Data Backup Best Practices",
    description: "How to ensure your data is properly backed up",
    category: "Data",
    views: "980 views"
  }
];

const systemStatus = [
  { service: "Email Services", status: "Operational", uptime: "99.9%" },
  { service: "Cloud Storage", status: "Operational", uptime: "99.8%" },
  { service: "Network Monitoring", status: "Operational", uptime: "100%" },
  { service: "Backup Services", status: "Operational", uptime: "99.7%" }
];

export default function SupportPortal() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Support Portal
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the help you need, when you need it. Our support team is here 24/7 to keep your practice running smoothly.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for help..."
                  className="pl-10"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Search
              </Button>
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How Can We Help You?
              </h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to get the support you need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-3">
                        {option.contact}
                      </Button>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Available: {option.availability}</div>
                        <div>Response: {option.responseTime}</div>
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
                Quick Actions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common tasks and frequently needed resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">{link.title}</h4>
                        <p className="text-sm text-muted-foreground">{link.category}</p>
                      </div>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Knowledge Base
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Self-service articles and guides to help you resolve common issues.
                </p>
                
                <div className="space-y-4">
                  {knowledgeBase.map((article, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1">{article.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{article.description}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded">{article.category}</span>
                              <span>{article.views}</span>
                            </div>
                          </div>
                          <FileText className="h-4 w-4 text-muted-foreground ml-4" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Browse All Articles
                </Button>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  System Status
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Real-time status of all <BrandLogo className="inline" /> services and systems.
                </p>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {systemStatus.map((system, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-medium text-foreground">{system.service}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-green-600">{system.status}</div>
                            <div className="text-xs text-muted-foreground">{system.uptime} uptime</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t text-center">
                      <p className="text-sm text-muted-foreground mb-3">
                        All systems operational
                      </p>
                      <Button variant="outline" size="sm">
                        View Detailed Status
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg mt-6">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Need Personal Assistance?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our expert technicians are standing by to help.
                    </p>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Live Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              24/7 Emergency Support
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Critical issues affecting patient care? We're here around the clock.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:+1-800-MNGDSPA">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: 1-800-MNGDSPA
              </a>
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}