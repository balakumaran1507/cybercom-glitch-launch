import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We love to connect with builders, hackers, and dreamers — reach out and let's collaborate
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="glass-morphism border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, question, or how we can help..."
                        rows={6}
                        required
                        className="bg-background/50 border-border/50 resize-none"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary hover-lift">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need a security audit, want to join our community, 
                  or have an idea that could change the cybersecurity landscape, 
                  we're here to listen and collaborate.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">founders@cybercom.live</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Chennai, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Follow us</h3>
                <SocialLinks />
              </div>

              {/* Quick Links */}
              <Card className="glass-morphism border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Start</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Security Consultation</span>
                      <Button variant="outline" size="sm">Book Call</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Join CTF Community</span>
                      <Button variant="outline" size="sm">Sign Up</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Workshop Registration</span>
                      <Button variant="outline" size="sm">Register</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-morphism border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How long does a security audit take?</h3>
                <p className="text-sm text-muted-foreground">
                  Typically 1-4 weeks depending on scope. We provide detailed timelines during consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer training for our team?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! We provide customized workshops and training sessions for development teams.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can startups afford your services?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer flexible packages and startup-friendly pricing. Let's discuss your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What makes your CTFs unique?</h3>
                <p className="text-sm text-muted-foreground">
                  Real-world scenarios, progressive difficulty, and focus on practical skills over theory.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;