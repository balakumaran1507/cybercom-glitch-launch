import CountdownTimer from '@/components/CountdownTimer';
import SocialLinks from '@/components/SocialLinks';
import CTFRegistration from '@/components/EmailSubscription';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with enhanced overlay */}
      <div className="animated-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/90 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] z-0"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col pt-16">

        {/* Hero Section with Countdown */}
        <section className="flex-1 flex items-center justify-center px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Left Column - Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white">Redefining</span>
                    <br />
                    <span>Cybersecurity</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    The next generation of CTF challenges and competitions is coming. Be ready.
                  </p>
                </div>
                
                {/* CTF Registration */}
                <div className="glass-card rounded-xl p-8 hover-lift border border-glass-border backdrop-blur-xl">
                  <CTFRegistration />
                </div>
                
                {/* Social Links */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Join Our Community</h3>
                  <SocialLinks />
                </div>
              </div>
              
              {/* Right Column - Countdown */}
              <div className="glass-card rounded-2xl p-10 md:p-12 hover-lift border border-glass-border backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                
                <div className="relative z-10 text-center space-y-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">Launching In</h3>
                  <CountdownTimer />
                  <p className="text-muted-foreground">
                    Prepare yourself for a revolutionary cybersecurity experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors and Partners */}
        <section className="w-full px-6 md:px-12 py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Sponsors and Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="glass-morphism rounded-lg p-6 border border-border/30 hover-lift">
                  <div className="w-full h-16 bg-muted rounded flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Partner {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="w-full px-6 md:px-12 py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">CYBERCOM</h3>
                <p className="text-muted-foreground">Redefining the future of cybersecurity competitions and training.</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider">Platform</h4>
                <ul className="space-y-2">
                  <li><a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                  <li><a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Competitions</a></li>
                  <li><a href="/features" className="text-muted-foreground hover:text-primary transition-colors">Training</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                  <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © 2024 Cybercom. All rights reserved.
              </p>
              <SocialLinks />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
