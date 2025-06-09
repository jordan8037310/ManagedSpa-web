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
    <div className="w-full">
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        style={{ minHeight: '700px' }}
      >
        <div data-tf-live="01JX5FBMEN4RNMY0QEZK2J42D4"></div>
      </div>
    </div>
  );
}