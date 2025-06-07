import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, Shield, Cloud } from "lucide-react";

const featuredPost = {
  title: "2024 Cybersecurity Trends Every Med Spa Must Know",
  excerpt: "The healthcare cybersecurity landscape is evolving rapidly. Learn about the latest threats targeting medical spas and how to protect your practice.",
  author: "Dr. Sarah Mitchell",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Security",
  image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
};

const blogPosts = [
  {
    title: "HIPAA Compliance in the Cloud: A Complete Guide",
    excerpt: "Moving to the cloud doesn't mean compromising on HIPAA compliance. Here's everything you need to know.",
    author: "Michael Chen",
    date: "December 10, 2024", 
    readTime: "6 min read",
    category: "Compliance",
    tags: ["HIPAA", "Cloud", "Compliance"]
  },
  {
    title: "5 Signs Your Med Spa Needs an IT Upgrade",
    excerpt: "Is your technology holding back your practice? Discover the warning signs that indicate it's time for an upgrade.",
    author: "Lisa Rodriguez",
    date: "December 5, 2024",
    readTime: "4 min read", 
    category: "Technology",
    tags: ["IT Upgrade", "Practice Management", "Technology"]
  },
  {
    title: "Ransomware Protection for Healthcare Practices",
    excerpt: "Ransomware attacks on healthcare are increasing. Learn how to protect your practice and patient data.",
    author: "James Wilson",
    date: "November 28, 2024",
    readTime: "7 min read",
    category: "Security", 
    tags: ["Ransomware", "Security", "Data Protection"]
  },
  {
    title: "Microsoft 365 vs Google Workspace for Med Spas",
    excerpt: "Choosing the right productivity suite is crucial. We compare the top options for healthcare practices.",
    author: "Emily Davis",
    date: "November 20, 2024",
    readTime: "5 min read",
    category: "Technology",
    tags: ["Microsoft 365", "Google Workspace", "Productivity"]
  },
  {
    title: "Building a HIPAA-Compliant Remote Work Policy",
    excerpt: "Remote work is here to stay. Ensure your practice maintains HIPAA compliance with a proper remote work policy.",
    author: "David Kim",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Compliance",
    tags: ["Remote Work", "HIPAA", "Policy"]
  },
  {
    title: "The True Cost of IT Downtime in Medical Spas",
    excerpt: "System downtime costs more than you think. Calculate the real impact on your practice and how to prevent it.",
    author: "Rachel Thompson", 
    date: "November 8, 2024",
    readTime: "4 min read",
    category: "Business",
    tags: ["Downtime", "Business Continuity", "ROI"]
  }
];

const categories = ["All", "Security", "Compliance", "Technology", "Business"];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Security": return Shield;
    case "Compliance": return Shield;
    case "Technology": return Cloud;
    case "Business": return TrendingUp;
    default: return ArrowRight;
  }
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              ManagedSpa Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert insights, best practices, and industry trends for medical spa technology and operations.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Badge 
                  key={index} 
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-white"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-xl overflow-hidden mb-12">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div 
                    className="h-64 lg:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredPost.image})` }}
                  />
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <Badge className="mb-4">{featuredPost.category}</Badge>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{featuredPost.date}</span>
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/5"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </Section>

        <Section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on medical spa technology and cybersecurity.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}