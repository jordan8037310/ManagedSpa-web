import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, CheckCircle, AlertTriangle, Download, Users } from "lucide-react";

const guideSteps = [
  {
    step: "1",
    title: "Conduct Risk Assessment",
    description: "Identify all systems that store, process, or transmit PHI",
    checklist: [
      "Inventory all electronic devices and systems",
      "Map data flows throughout your practice",
      "Identify potential vulnerabilities",
      "Document current security measures"
    ]
  },
  {
    step: "2",
    title: "Develop Policies & Procedures",
    description: "Create comprehensive HIPAA policies tailored to your practice",
    checklist: [
      "Privacy policies and procedures",
      "Security policies and procedures", 
      "Breach notification procedures",
      "Employee training protocols"
    ]
  },
  {
    step: "3",
    title: "Implement Safeguards",
    description: "Put technical, physical, and administrative safeguards in place",
    checklist: [
      "Access controls and user authentication",
      "Data encryption and secure transmission",
      "Physical security measures",
      "Regular security monitoring"
    ]
  },
  {
    step: "4",
    title: "Train Your Team",
    description: "Ensure all staff understand HIPAA requirements",
    checklist: [
      "Initial HIPAA training for all employees",
      "Role-specific training programs",
      "Regular refresher training",
      "Document training completion"
    ]
  }
];

const commonViolations = [
  { violation: "Unsecured email communication", risk: "High", fine: "$100,000 - $1.5M" },
  { violation: "Lack of employee training", risk: "High", fine: "$50,000 - $1.5M" },
  { violation: "Inadequate access controls", risk: "Medium", fine: "$10,000 - $250K" },
  { violation: "Missing business associate agreements", risk: "Medium", fine: "$25,000 - $500K" },
  { violation: "Improper disposal of PHI", risk: "Medium", fine: "$50,000 - $1M" }
];

export default function HIPAAGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              HIPAA Compliance Guide for Med Spas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A comprehensive guide to achieving and maintaining HIPAA compliance in your aesthetic wellness practice.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Guide
            </Button>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Your Path to HIPAA Compliance
              </h2>
              <p className="text-lg text-muted-foreground">
                Follow these four essential steps to ensure your med spa meets all HIPAA requirements.
              </p>
            </div>

            <div className="space-y-8">
              {guideSteps.map((step, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      <div className="text-center lg:text-left">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-foreground mb-4">Action Items:</h4>
                        <div className="grid gap-3">
                          {step.checklist.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-red-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Common HIPAA Violations in Med Spas
              </h2>
              <p className="text-lg text-muted-foreground">
                Avoid these costly mistakes that frequently result in HIPAA violations and hefty fines.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Violation</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Risk Level</th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">Potential Fine</th>
                  </tr>
                </thead>
                <tbody>
                  {commonViolations.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-6 py-4 text-foreground">{item.violation}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          item.risk === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.risk}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-red-600">{item.fine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get Expert HIPAA Support
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Don't navigate HIPAA compliance alone. Our experts can help you implement a comprehensive compliance program tailored to your med spa.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Comprehensive risk assessments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Custom policy development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Staff training programs</span>
                  </div>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Free HIPAA Compliance Checklist
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Download our comprehensive 50-point checklist to ensure your practice meets all HIPAA requirements.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download Checklist
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help with HIPAA Compliance?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a free compliance assessment and ensure your practice is fully protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Shield className="mr-2 h-5 w-5" />
                Free Compliance Audit
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact HIPAA Expert
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}