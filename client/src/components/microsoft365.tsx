import { Mail, Users, Settings, Lock, Check } from "lucide-react";
import { Section } from "@/components/ui/section";

const benefits = [
  {
    icon: Mail,
    title: "Professional Email & Calendar",
    description: "HIPAA-compliant email with advanced scheduling and calendar integration for your practice.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Microsoft Teams for secure communication, file sharing, and virtual consultations with clients.",
    color: "wellness"
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Power Automate streamlines appointment reminders, intake forms, and follow-up workflows.",
    color: "accent-orange"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Multi-factor authentication, encryption, and advanced threat protection built into every tool.",
    color: "primary"
  }
];

const features = [
  "Work from anywhere",
  "HIPAA compliance",
  "Cost optimization",
  "Automatic updates"
];

export function Microsoft365() {
  return (
    <Section id="microsoft365" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Powered by <span className="text-primary">Microsoft 365</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Leverage enterprise-grade productivity tools tailored for your med spa. From email to document sharing, everything works seamlessly in the cloud.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const iconColorClass = benefit.color === "primary" ? "text-primary" : 
                                     benefit.color === "wellness" ? "text-wellness" : 
                                     "text-accent-orange";
              const bgColorClass = benefit.color === "primary" ? "bg-primary/10" : 
                                   benefit.color === "wellness" ? "bg-wellness/10" : 
                                   "bg-accent-orange/10";
              
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-8 h-8 ${bgColorClass} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Icon className={`${iconColorClass} h-4 w-4`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
            alt="Modern office technology setup"
            className="rounded-xl shadow-lg w-full h-auto"
          />
          
          <div className="bg-gradient-to-r from-primary/5 to-wellness/5 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Microsoft 365 Benefits for Med Spas:</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-wellness flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
