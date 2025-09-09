import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Features = () => {
  const activities = [
    {
      category: "Events",
      items: [
        {
          title: "Cybersecurity Summit 2024",
          description: "Annual conference bringing together 500+ security professionals",
          image: "/placeholder.svg",
          status: "Completed",
          participants: "500+"
        },
        {
          title: "National CTF Championship",
          description: "India's largest student-focused cybersecurity competition",
          image: "/placeholder.svg", 
          status: "Annual",
          participants: "2000+"
        },
        {
          title: "Security Bootcamp Series",
          description: "Intensive weekend training for aspiring ethical hackers",
          image: "/placeholder.svg",
          status: "Ongoing",
          participants: "150+"
        }
      ]
    },
    {
      category: "Workshops",
      items: [
        {
          title: "Web Application Security",
          description: "Hands-on penetration testing workshop for developers",
          image: "/placeholder.svg",
          status: "Monthly",
          participants: "50/session"
        },
        {
          title: "AI Security & Privacy",
          description: "Exploring vulnerabilities in machine learning systems",
          image: "/placeholder.svg",
          status: "New",
          participants: "30/session"
        },
        {
          title: "Cloud Security Fundamentals",
          description: "AWS, Azure, and GCP security best practices",
          image: "/placeholder.svg",
          status: "Popular",
          participants: "75/session"
        }
      ]
    },
    {
      category: "CTF Challenges",
      items: [
        {
          title: "Binary Exploitation Series",
          description: "Advanced memory corruption and reverse engineering",
          image: "/placeholder.svg",
          status: "Expert",
          participants: "200+"
        },
        {
          title: "Web Security Playground",
          description: "Real-world web application vulnerabilities to practice",
          image: "/placeholder.svg",
          status: "Beginner",
          participants: "1000+"
        },
        {
          title: "Cryptography Challenges",
          description: "Modern encryption algorithms and implementation flaws",
          image: "/placeholder.svg",
          status: "Intermediate",
          participants: "400+"
        }
      ]
    },
    {
      category: "Client Success",
      items: [
        {
          title: "E-commerce Security Audit",
          description: "Comprehensive pentest for major online retailer",
          image: "/placeholder.svg",
          status: "Confidential",
          participants: "Critical fixes"
        },
        {
          title: "FinTech Startup Security",
          description: "End-to-end security assessment and compliance",
          image: "/placeholder.svg",
          status: "Ongoing",
          participants: "SOC 2 Ready"
        },
        {
          title: "Healthcare Platform Audit",
          description: "HIPAA compliance and vulnerability assessment",
          image: "/placeholder.svg",
          status: "Completed",
          participants: "Zero incidents"
        }
      ]
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "/placeholder.svg" },
    { name: "SecureStartup", logo: "/placeholder.svg" },
    { name: "CloudInnovate", logo: "/placeholder.svg" },
    { name: "DataSecure", logo: "/placeholder.svg" },
    { name: "NextGen Solutions", logo: "/placeholder.svg" },
    { name: "CyberDefense Pro", logo: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Wild Cards
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From CTF championships to enterprise pentesting, here's how we're 
            reshaping cybersecurity one challenge at a time.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      {activities.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 px-6 ${categoryIndex % 2 === 1 ? 'bg-muted/20' : ''}`}>
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">{category.category}</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <Card key={index} className="glass-morphism border-border/50 hover-lift cursor-pointer group">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-primary font-medium">
                        {item.participants}
                      </span>
                      <span className="text-muted-foreground">
                        Learn More →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partners Section */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4">Trusted Partners</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Companies that trust us with their security
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="glass-morphism rounded-lg p-6 border border-border/30 hover-lift">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-morphism rounded-2xl p-12 border border-border/50">
            <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our next event, workshop, or challenge your security posture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3 rounded-lg font-medium hover-lift">
                Join Next Event
              </button>
              <button className="btn-secondary px-8 py-3 rounded-lg font-medium hover-lift">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;