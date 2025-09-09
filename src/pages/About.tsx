import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Co-Founder & CEO",
      image: "/placeholder.svg",
      description: "Security researcher turned entrepreneur"
    },
    {
      name: "Sarah Kim", 
      role: "Co-Founder & CTO",
      image: "/placeholder.svg",
      description: "Former red team lead, AI enthusiast"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Research",
      image: "/placeholder.svg", 
      description: "Cloud security & automation expert"
    },
    {
      name: "Priya Patel",
      role: "Lead Penetration Tester",
      image: "/placeholder.svg",
      description: "Web application security specialist"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Born from Passion,
            <br />
            Built for Impact
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're young founders who started Cybercom with one mission: make cybersecurity accessible, 
            exciting, and impactful. From late-night CTF sessions to building enterprise solutions, 
            we're the hustlers turning passion into protection.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Started by college friends who couldn't sleep because they were too busy 
                  finding vulnerabilities in everything. What began as weekend CTF competitions 
                  turned into a mission to revolutionize cybersecurity.
                </p>
                <p>
                  We're not your typical security company. We're the ones who think outside 
                  the box, break things to make them stronger, and believe that the best 
                  defense comes from understanding the attack.
                </p>
                <p>
                  Today, we're building the future of cybersecurity - one challenge, 
                  one pentest, one workshop at a time.
                </p>
              </div>
            </div>
            <div className="glass-morphism rounded-2xl p-8 border border-border/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">50+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">CTF Challenges Created</h3>
                    <p className="text-sm text-muted-foreground">Pushing boundaries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">25+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Companies Secured</h3>
                    <p className="text-sm text-muted-foreground">Real impact delivered</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">1000+</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Students Trained</h3>
                    <p className="text-sm text-muted-foreground">Next-gen defenders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">
              The hustlers, hackers, and dreamers building the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass-morphism border-border/50 hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold">Innovation First</h3>
              <p className="text-muted-foreground">
                We don't follow trends, we create them. Every solution is built from scratch.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold">Security Obsessed</h3>
              <p className="text-muted-foreground">
                Every line of code, every system we touch becomes more secure.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold">Community Driven</h3>
              <p className="text-muted-foreground">
                We grow by lifting others. Knowledge shared is security multiplied.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;