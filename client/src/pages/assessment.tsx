import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Comprehensive IT Audit",
    description: "Complete assessment of your current technology infrastructure, security posture, and operational efficiency."
  },
  {
    icon: Clock,
    title: "60-Minute Deep Dive",
    description: "Dedicated one-hour session with our IT experts to understand your practice's unique challenges and goals."
  },
  {
    icon: Users,
    title: "Customized Recommendations",
    description: "Personalized action plan with specific recommendations for your practice size and specialty focus."
  },
  {
    icon: Shield,
    title: "HIPAA Compliance Review",
    description: "Thorough evaluation of your current compliance status with actionable steps to ensure full protection."
  }
];

export default function Assessment() {
  useEffect(() => {
    // Load Typeform embed script if not already loaded
    if (!document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')) {
      const script = document.createElement('script');
      script.src = "//embed.typeform.com/next/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-wellness/10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="heading-1 text-slate-900 mb-6">
              Free 60-Minute IT Assessment
            </h1>
            <p className="body-large text-slate-600 mb-8 max-w-3xl mx-auto">
              Get a comprehensive evaluation of your practice's technology infrastructure, security posture, and growth opportunities. No obligation, no pressure - just expert insights to help your practice thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg"
              >
                Schedule Your Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg"
                asChild
              >
                <a href="tel:+1-800-MNGDSPA">Call 1-800-MNGDSPA</a>
              </Button>
            </div>
          </div>
        </section>

        {/* What You'll Get Section */}
        <Section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-slate-900 mb-4">
                What You'll Get in Your Assessment
              </h2>
              <p className="body-large text-slate-600">
                Our comprehensive evaluation covers every aspect of your practice's technology needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-wellness/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Transform Your IT Experience?
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Join hundreds of med spas who have eliminated IT stress with our expert guidance.
              </p>
              <Button
                onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-lg"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </Section>

        {/* Assessment Form */}
        <Section id="assessment-form" className="bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Schedule Your Free Assessment
              </h2>
              <p className="text-lg text-gray-600">
                Complete the form below and our team will contact you within 24 hours to schedule your personalized IT assessment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '600px' }}>
              <div data-tf-live="01JX5FBMEN4RNMY0QEZK2J42D4"></div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}