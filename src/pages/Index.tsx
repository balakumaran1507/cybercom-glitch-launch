import CountdownTimer from '@/components/CountdownTimer';
import SocialLinks from '@/components/SocialLinks';
import EmailSubscription from '@/components/EmailSubscription';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-5xl mx-auto text-center space-y-20">
          {/* Main Header */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6">
                <span 
                  className="glitch text-glow" 
                  data-text="Cybercom"
                >
                  Cybercom
                </span>
              </h1>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Coming Soon
              </h2>
            </div>
            
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting Next-Generation CTF Challenges & Cybersecurity Competitions
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-8">
            <h2 className="text-2xl text-primary font-semibold">Launch Countdown</h2>
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <CountdownTimer />
            </div>
          </div>

          {/* Email Subscription */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-10 hover-lift max-w-2xl mx-auto">
              <EmailSubscription />
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl text-primary font-semibold">Join Our Community</h3>
            <div className="glass-card rounded-2xl p-8 hover-lift max-w-lg mx-auto">
              <SocialLinks />
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 mt-16">
            <div className="glass border-t border-glass-border p-6 rounded-t-2xl">
              <p className="text-muted-foreground text-lg">
                © 2024 Cybercom. Redefining competitive cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
