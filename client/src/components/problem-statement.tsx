import { AlertTriangle, Shield, DollarSign, Check } from "lucide-react";
import { Section } from "@/components/ui/section";

export function ProblemStatement() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Focus on Your Clients, Not Your IT Problems
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Med spa owners shouldn't be troubleshooting network issues when they could be growing their practice and caring for clients.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Tech Disruptions</h3>
          <p className="text-slate-600">
            System failures disrupt appointments and compromise client experience in your wellness practice.
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <Shield className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Security Risks</h3>
          <p className="text-slate-600">
            HIPAA violations and data breaches can result in massive fines and reputation damage.
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <DollarSign className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Unpredictable Costs</h3>
          <p className="text-slate-600">
            Hourly IT bills and emergency service calls create budget uncertainty for your practice.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-wellness/5 to-primary/5 rounded-2xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              The Solution: All-You-Can-Eat IT Support
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Transform IT from a cost center into a competitive advantage with unlimited support, proactive monitoring, and predictable monthly pricing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-wellness" />
                <span className="text-slate-700">Unlimited remote and on-site support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-wellness" />
                <span className="text-slate-700">24/7 proactive monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-wellness" />
                <span className="text-slate-700">One flat fee per staff member</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional IT support team"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
