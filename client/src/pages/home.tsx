import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProblemStatement } from "@/components/problem-statement";
import { Services } from "@/components/services";
import { Microsoft365 } from "@/components/microsoft365";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { TypeformEmbed } from "@/components/typeform-embed";
import { Footer } from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when landing on the page
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Services />
        <Microsoft365 />
        <Pricing />
        <Testimonials />
        <TypeformEmbed />
      </main>
      <Footer />
    </div>
  );
}
