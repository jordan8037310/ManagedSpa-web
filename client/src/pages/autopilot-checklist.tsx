import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/ui/brand-logo";
import { TypeformEmbed } from "@/components/typeform-embed";
import { 
  CheckCircle, 
  Shield, 
  Cloud, 
  Settings, 
  BarChart3, 
  Users, 
  Zap,
  Download,
  Phone,
  ArrowRight,
  Lock,
  Database,
  Workflow
} from "lucide-react";

const domains = [
  {
    icon: Settings,
    title: "IT Infrastructure",
    description: "Hardware standardization, network security, backup & disaster recovery",
    items: ["Device Management", "Business-Class WiFi", "Automated Backups", "HIPAA-Compliant eFax"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Multi-factor authentication, endpoint protection, HIPAA compliance",
    items: ["MFA Everywhere", "EDR Protection", "Policy Templates", "Audit Trails"]
  },
  {
    icon: Cloud,
    title: "Cloud Software & SaaS",
    description: "Microsoft 365 optimization, Teams integration, file management",
    items: ["License Optimization", "Teams Phone", "SharePoint Governance", "EMR Integration"]
  },
  {
    icon: Users,
    title: "CRM & Communications",
    description: "Customer relationship management and omnichannel communication",
    items: ["CRM Automation", "Chat Consolidation", "SMS Marketing", "API Integration"]
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "Workflow automation for client lifecycle and staff operations",
    items: ["Welcome Workflows", "Rebooking Automation", "Staff Provisioning", "Incident Response"]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Analytics, reporting, and data-driven decision making",
    items: ["KPI Dashboards", "Data Unification", "Business Alerts", "Performance Monitoring"]
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Work ON Your Business, Not IN It",
    description: "Systems that run independently, freeing you from daily operational demands"
  },
  {
    icon: Lock,
    title: "Sleep Soundly at Night",
    description: "Complete security and compliance frameworks that protect your practice automatically"
  },
  {
    icon: Database,
    title: "Make Decisions with Confidence",
    description: "Unified data and insights that guide smart business choices without guesswork"
  },
  {
    icon: Workflow,
    title: "Scale at Your Own Pace",
    description: "Infrastructure that grows with you, not against you - no stress, no limits"
  }
];

export default function AutopilotChecklist() {
  const scrollToForm = () => {
    document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-wellness/10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              FREE Business Optimization Checklist
            </Badge>
            
            <h1 className="heading-1 text-slate-900 mb-6">
              <BrandLogo className="inline" /> Growth on Autopilot
            </h1>
            
            <p className="body-large text-slate-600 mb-8 max-w-3xl mx-auto">
              The comprehensive 68-point checklist that gives med spa owners complete freedom and autonomy. 
              Build systems that run your practice so you can focus on what matters most - growing your business and serving clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Get Free Checklist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+1-800-MNGDSPA">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 1-800-MNGDSPA
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">68</div>
                <div className="text-sm text-slate-600">Optimization Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-slate-600">Automation Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-slate-600">Owner Freedom</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <Section className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-slate-900 mb-4">
                Reclaim Your Freedom as a Business Owner
              </h2>
              <p className="body-large text-slate-600 max-w-3xl mx-auto">
                Stop being trapped in day-to-day operations. This comprehensive checklist builds the systems and 
                processes that give you complete autonomy to grow your business on your terms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="heading-5 text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="body-base text-slate-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Domains Overview */}
        <Section className="bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-slate-900 mb-4">
                6 Areas of Automation for Complete Freedom
              </h2>
              <p className="body-large text-slate-600">
                Each area builds the foundation for true business autonomy, allowing you to step away while your practice thrives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domains.map((domain, index) => {
                const Icon = domain.icon;
                return (
                  <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="heading-5 text-slate-900">{domain.title}</CardTitle>
                      </div>
                      <p className="body-base text-slate-600">{domain.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {domain.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="body-small text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Automation Showcase */}
        <Section className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-slate-900 mb-6">
                  True Business Freedom Through Automation
                </h2>
                <p className="body-large text-slate-600 mb-8">
                  Break free from being the bottleneck in your own business. These proven workflows 
                  create the autonomy successful owners crave - predictable growth without constant oversight.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="heading-5 text-slate-900 mb-1">Self-Running Client Onboarding</h4>
                      <p className="body-base text-slate-600">New clients flow seamlessly from inquiry to first appointment without your involvement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="heading-5 text-slate-900 mb-1">Revenue That Runs Itself</h4>
                      <p className="body-base text-slate-600">Intelligent rebooking sequences that maintain client relationships and drive repeat revenue</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="heading-5 text-slate-900 mb-1">Effortless Team Scaling</h4>
                      <p className="body-base text-slate-600">New hires are productive from day one with automated setup and training workflows</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="Med spa automation and technology"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">
                      Automation Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Download Form Section */}
        <Section id="download-form" className="bg-gradient-to-r from-primary/5 to-wellness/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-slate-900 mb-4">
                Claim Your Business Freedom Checklist
              </h2>
              <p className="body-large text-slate-600">
                Get the complete 68-point roadmap to building a med spa that runs without you.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <TypeformEmbed />
            </div>

            <div className="text-center mt-8">
              <p className="body-base text-slate-600 mb-4">
                Need help implementing the checklist?
              </p>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <a href="/assessment">
                  Schedule Free 60-Minute Assessment
                </a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Additional Value */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-slate-900 mb-6">
              What's Included in Your Checklist
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-5 text-slate-900 mb-2">68-Point Checklist</h3>
                <p className="body-base text-slate-600">Comprehensive optimization points across all business domains</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-5 text-slate-900 mb-2">Automation Workflows</h3>
                <p className="body-base text-slate-600">Step-by-step automation sequences for common processes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-5 text-slate-900 mb-2">ROI Calculator</h3>
                <p className="body-base text-slate-600">Calculate potential savings and efficiency gains</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-wellness/5 rounded-2xl p-8">
              <h3 className="heading-3 text-slate-900 mb-4">
                Ready to Break Free from Daily Operations?
              </h3>
              <p className="body-medium text-slate-600 mb-6">
                Join hundreds of med spa owners who have achieved true business autonomy with <BrandLogo className="inline" />.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Download Checklist Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5"
                  asChild
                >
                  <a href="tel:+1-800-MNGDSPA">Call 1-800-MNGDSPA</a>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}