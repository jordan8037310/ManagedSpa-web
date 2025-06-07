import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, AlertTriangle, Wifi, Server, Smartphone, Database } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Advanced Firewall",
    description: "Next-generation firewall protection with intrusion detection and prevention systems."
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Continuous security monitoring with real-time threat detection and response."
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for all patient data, both in transit and at rest."
  },
  {
    icon: Smartphone,
    title: "Device Management",
    description: "Secure mobile device management with remote wipe capabilities."
  }
];

const protectionLayers = [
  { name: "Network Security", description: "Firewall, VPN, and network segmentation" },
  { name: "Endpoint Protection", description: "Antivirus, anti-malware, and device monitoring" },
  { name: "Email Security", description: "Spam filtering, phishing protection, and email encryption" },
  { name: "Data Protection", description: "Backup, encryption, and access controls" },
  { name: "User Management", description: "Multi-factor authentication and privileged access" },
  { name: "Compliance Monitoring", description: "HIPAA auditing and regulatory compliance" }
];

const threats = [
  { type: "Ransomware", impact: "Practice shutdown, data loss, reputation damage" },
  { type: "Data Breach", impact: "HIPAA violations, fines up to $1.5M, patient trust loss" },
  { type: "Phishing", impact: "Credential theft, unauthorized access, financial loss" },
  { type: "Insider Threats", impact: "Data theft, patient privacy violations, legal liability" }
];

export default function SecurityManagement() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Security Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Protect your practice from cyber threats with enterprise-grade security solutions designed specifically for medical spas and aesthetic practices.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Shield className="mr-2 h-5 w-5" />
              Get Security Assessment
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Multi-Layer Security Defense
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive protection against all types of cyber threats targeting healthcare practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => {
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
                Healthcare Cyber Threat Landscape
              </h2>
              <p className="text-lg text-muted-foreground">
                Medical practices are 2.5x more likely to be targeted by cybercriminals than other industries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {threats.map((threat, index) => (
                <Card key={index} className="border-red-200">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-red-600 mb-3">{threat.type}</h4>
                    <p className="text-muted-foreground">{threat.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Complete Security Framework
              </h2>
              <p className="text-lg text-muted-foreground">
                Six layers of protection working together to secure your practice and patient data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionLayers.map((layer, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">{layer.name}</h4>
                    <p className="text-muted-foreground">{layer.description}</p>
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
                  Proactive Threat Management
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our security operations center monitors your practice 24/7, detecting and responding to threats before they impact your operations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Real-time Monitoring</h4>
                      <p className="text-muted-foreground">24/7 security operations center monitoring</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Incident Response</h4>
                      <p className="text-muted-foreground">Immediate response to security incidents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Threat Intelligence</h4>
                      <p className="text-muted-foreground">Latest threat data and prevention strategies</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Server className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Security Operations Center
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Dedicated security experts monitoring your practice around the clock.
                    </p>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time:</span>
                        <span className="font-semibold text-primary">Under 5 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Threat Detection:</span>
                        <span className="font-semibold text-primary">99.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monitoring:</span>
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
              Secure Your Practice Today
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Don't wait for a security incident. Get comprehensive protection designed for medical practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href="/assessment">
                  <Shield className="mr-2 h-5 w-5" />
                  Free Security Audit
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="/resources/security-checklist">Download Security Guide</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}