import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/ui/brand-logo";
import { TypeformEmbed } from "@/components/typeform-embed";
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Clock,
  Users,
  Workflow,
  Phone
} from "lucide-react";

const partnershipBenefits = [
  {
    icon: DollarSign,
    title: "Accelerated Revenue Growth",
    description: "MedShift's Velocity Enterprise + ManagedSpa's IT foundation = faster deal closures and increased sales velocity for your aesthetic practice"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Combined HIPAA-compliant infrastructure with MedShift's secure payment processing and data protection protocols"
  },
  {
    icon: Workflow,
    title: "Seamless System Integration", 
    description: "Your EMR, CRM, and MedShift Velocity platforms work together flawlessly with our unified IT management"
  },
  {
    icon: Clock,
    title: "Zero Downtime Operations",
    description: "24/7 IT support ensures MedShift's critical business systems stay online and performing optimally"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth Infrastructure",
    description: "Technology foundation that grows with your practice as you leverage MedShift's marketplace and lending solutions"
  },
  {
    icon: Zap,
    title: "Automated Workflow Excellence",
    description: "ManagedSpa's automation + MedShift's enterprise modules = completely streamlined practice operations"
  }
];

const stats = [
  { number: "$400M+", label: "Deployed via Velocity Lending" },
  { number: "5,500+", label: "Customers Across All Lines" },
  { number: "50+", label: "Manufacturer Partners" },
  { number: "100%", label: "HIPAA Compliance" }
];

export default function MedShift() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-blue-50 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Exclusive Partnership
              </Badge>
              
              <h1 className="heading-1 text-slate-900 mb-6">
                <BrandLogo className="inline" /> × MedShift
              </h1>
              <p className="text-2xl font-medium text-blue-600 mb-4">
                Powering Growth for Aesthetic Practices
              </p>
              
              <p className="body-large text-slate-600 mb-8 max-w-4xl mx-auto">
                The perfect combination: MedShift's proven business acceleration platform plus ManagedSpa's 
                all-inclusive IT infrastructure. Get the technology foundation that lets you maximize every 
                MedShift opportunity.
              </p>
              
              <div className="grid sm:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with TypeForm */}
        <Section className="bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Benefits */}
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="heading-2 text-slate-900 mb-4">
                    Why MedShift Customers Choose ManagedSpa
                  </h2>
                  <p className="body-large text-slate-600 mb-8">
                    You're already accelerating growth with MedShift's platform. Now eliminate IT friction 
                    with the only technology partner designed specifically for aesthetic practices.
                  </p>
                </div>

                <div className="space-y-8">
                  {partnershipBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="heading-5 text-slate-900 mb-2">{benefit.title}</h3>
                          <p className="body-base text-slate-600">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-primary/5 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="heading-4 text-slate-900 mb-3">
                        Exclusive Benefits for MedShift Customers
                      </h3>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>Priority implementation and dedicated success manager</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>Pre-configured integrations with Velocity Enterprise modules</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>Specialized support for MedShift marketplace optimization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>Joint training sessions and best practice workshops</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - TypeForm */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <TypeformEmbed />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Partnership Value Section */}
        <Section className="bg-slate-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="heading-2 text-slate-900 mb-6">
              The Power of Partnership
            </h2>
            <p className="body-large text-slate-600 mb-12 max-w-4xl mx-auto">
              MedShift accelerates your business growth. ManagedSpa ensures your technology never slows you down. 
              Together, they create the foundation for unlimited practice expansion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-left">
                  <h3 className="heading-4 text-slate-900 mb-3">MedShift Delivers</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Velocity Enterprise business acceleration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Lending and financing solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Direct-to-consumer marketplaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>E-commerce and unified commerce</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="heading-4 text-slate-900 mb-3">ManagedSpa Provides</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>24/7 IT support and infrastructure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>HIPAA-compliant security framework</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Seamless system integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Automated workflow optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="heading-3 text-slate-900 mb-4">Together = Unstoppable Growth</h3>
                <p className="body-medium text-slate-600 mb-6">
                  While MedShift accelerates your business opportunities, ManagedSpa ensures your 
                  technology infrastructure never becomes a bottleneck to growth.
                </p>
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-sm text-slate-600">Faster implementation with our pre-built integrations</p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-primary/10 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-slate-900 mb-6">
              Ready to Maximize Your MedShift Investment?
            </h2>
            <p className="body-large text-slate-600 mb-8">
              Join the growing number of aesthetic practices that have eliminated IT friction 
              while accelerating growth with the MedShift + ManagedSpa partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg"
                onClick={() => document.querySelector('.typeform')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Your Implementation Plan
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+1-800-MNGDSPA">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Partnership Team
                </a>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}