import { useEffect } from "react";
import { Section } from "@/components/ui/section";

export function TypeformEmbed() {
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
    <Section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Your Free IT Assessment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your practice and we'll provide a customized IT roadmap to help you grow while staying HIPAA compliant.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ minHeight: '600px' }}
          >
            <div data-tf-live="01JX5FBMEN4RNMY0QEZK2J42D4"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}