import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, Clock, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const benefits = [
  {
    icon: Check,
    title: "Free IT Security Audit",
    description: "Comprehensive review of your current IT setup and security posture.",
    color: "primary"
  },
  {
    icon: Check,
    title: "Custom Pricing Proposal",
    description: "Tailored quote based on your practice size and specific needs.",
    color: "wellness"
  },
  {
    icon: Check,
    title: "Implementation Roadmap",
    description: "Step-by-step plan for seamless transition to ManagedSpa support.",
    color: "accent-orange"
  }
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceName: "",
      staffSize: "",
      message: ""
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      return await apiRequest('POST', '/api/consultation', data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Section id="contact" className="bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="w-16 h-16 bg-wellness/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-wellness" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-xl text-slate-600 mb-6">
              Your consultation request has been submitted successfully. Our team will contact you within 24 hours to schedule your free IT assessment.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact" className="bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Get Your Free IT Assessment
          </h2>
          <p className="text-xl text-slate-600">
            Discover how ManagedSpa can transform your practice's technology experience. No obligation, no pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  const bgColorClass = benefit.color === "primary" ? "bg-primary" : 
                                       benefit.color === "wellness" ? "bg-wellness" : 
                                       "bg-accent-orange";
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-6 h-6 ${bgColorClass} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <Icon className="text-white h-3 w-3" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Or Contact Us Directly:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-slate-700">(800) MANAGED</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-slate-700">hello@managedspa.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-slate-700">24/7 Support Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="practiceName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Practice Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="staffSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Staff Members</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select staff size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 employees</SelectItem>
                            <SelectItem value="6-10">6-10 employees</SelectItem>
                            <SelectItem value="11-25">11-25 employees</SelectItem>
                            <SelectItem value="26-50">26-50 employees</SelectItem>
                            <SelectItem value="50+">50+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your current IT challenges</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your current IT pain points, goals, or questions..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg shadow-lg"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Submitting..." : "Get My Free Assessment"}
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
