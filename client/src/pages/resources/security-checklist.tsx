import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, AlertTriangle, Download, Lock, Eye } from "lucide-react";

const securityCategories = [
  {
    title: "Network Security",
    icon: Shield,
    items: [
      "Firewall configured and actively monitored",
      "Secure Wi-Fi with WPA3 encryption",
      "Guest network separated from business network",
      "Regular network vulnerability scans",
      "VPN access for remote connections",
      "Network access controls implemented"
    ]
  },
  {
    title: "Data Protection",
    icon: Lock,
    items: [
      "All patient data encrypted at rest and in transit",
      "Regular automated backups performed",
      "Backup recovery tested monthly",
      "Secure cloud storage with BAA in place",
      "Data retention policies established",
      "Secure data disposal procedures"
    ]
  },
  {
    title: "Access Management",
    icon: Eye,
    items: [
      "Multi-factor authentication enabled",
      "Strong password policies enforced",
      "Regular access reviews conducted",
      "Privileged access managed separately",
      "User accounts deactivated promptly",
      "Role-based access controls implemented"
    ]
  }
];

const criticalActions = [
  {
    priority: "Critical",
    action: "Enable Multi-Factor Authentication",
    description: "Protect all accounts with an additional layer of security",
    impact: "Prevents 99.9% of automated cyber attacks"
  },
  {
    priority: "Critical", 
    action: "Implement Email Security",
    description: "Deploy advanced email filtering and encryption",
    impact: "Blocks 95% of phishing attempts"
  },
  {
    priority: "High",
    action: "Regular Security Training",
    description: "Train staff to recognize and respond to threats",
    impact: "Reduces human error by 70%"
  },
  {
    priority: "High",
    action: "Endpoint Protection",
    description: "Install enterprise antivirus on all devices",
    impact: "Detects and prevents malware infections"
  }
];

const complianceItems = [
  "HIPAA risk assessment completed annually",
  "Business Associate Agreements with all vendors",
  "Incident response plan documented and tested",
  "Employee security training completed",
  "Access logs reviewed monthly",
  "Security policies updated annually"
];

export default function SecurityChecklist() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              IT Security Checklist for Med Spas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive security checklist to protect your practice from cyber threats and ensure HIPAA compliance.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Checklist
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Essential Security Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive security coverage across all critical areas of your practice.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {securityCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-orange-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Critical Security Actions
              </h2>
              <p className="text-lg text-muted-foreground">
                These security measures should be implemented immediately to protect your practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {criticalActions.map((action, index) => (
                <Card key={index} className="border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-foreground">{action.action}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        action.priority === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {action.priority}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{action.description}</p>
                    <p className="text-sm font-medium text-primary">{action.impact}</p>
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
                  HIPAA Compliance Checklist
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ensure your security measures meet HIPAA requirements with these essential compliance items.
                </p>
                
                <div className="space-y-3">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Free Security Assessment
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive security evaluation of your practice with actionable recommendations.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-4" asChild>
                    <a href="/assessment">Schedule Free Assessment</a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Printable Checklist
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Security Stats for Healthcare
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">83%</div>
                <p className="text-muted-foreground">of healthcare organizations experienced a cyberattack in 2023</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$10.9M</div>
                <p className="text-muted-foreground">average cost of a healthcare data breach</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">280 days</div>
                <p className="text-muted-foreground">average time to identify and contain a breach</p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Leave Your Practice Vulnerable
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get expert help implementing these security measures and protecting your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Shield className="mr-2 h-5 w-5" />
                Get Security Help
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Security Expert
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}