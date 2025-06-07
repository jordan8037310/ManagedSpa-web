import { Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Owner, Luxe Wellness Spa",
    initials: "SM",
    quote: "Since switching to ManagedSpa, our system downtime has been virtually eliminated. The unlimited support model means we never hesitate to call for help.",
    color: "primary"
  },
  {
    name: "Dr. Rachel Kim",
    title: "Medical Director, Elite Aesthetics",
    initials: "DR",
    quote: "The HIPAA compliance support gives us complete peace of mind. We can focus on our clients knowing our data is secure and compliant.",
    color: "wellness"
  },
  {
    name: "Michael Hughes",
    title: "Operations Manager, Rejuvenate Med Spa",
    initials: "MH",
    quote: "The predictable pricing has transformed our budgeting. No more surprise IT bills or emergency service fees eating into our profits.",
    color: "accent-orange"
  }
];

export function Testimonials() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Trusted by Leading Med Spas
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          See how aesthetic wellness practices are transforming their operations with ManagedSpa IT support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => {
          const bgColorClass = testimonial.color === "primary" ? "bg-primary/10" : 
                               testimonial.color === "wellness" ? "bg-wellness/10" : 
                               "bg-accent-orange/10";
          const textColorClass = testimonial.color === "primary" ? "text-primary" : 
                                  testimonial.color === "wellness" ? "text-wellness" : 
                                  "text-accent-orange";
          
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-slate-700 text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${bgColorClass} rounded-full flex items-center justify-center`}>
                    <span className={`${textColorClass} font-semibold`}>{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 bg-gradient-to-r from-primary/5 to-wellness/5 rounded-2xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your IT Experience?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Join hundreds of med spas who have eliminated IT stress with our all-you-can-eat support model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <a href="tel:+1-800-MANAGED">Call (800) MANAGED</a>
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Modern med spa consultation room"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
