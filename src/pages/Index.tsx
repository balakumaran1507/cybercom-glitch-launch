import CountdownTimer from '@/components/CountdownTimer';
import SocialLinks from '@/components/SocialLinks';
import EmailSubscription from '@/components/EmailSubscription';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center p-8">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Main Header */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-primary">
                <span 
                  className="glitch text-glow" 
                  data-text="Cybercom"
                >
                  Cybercom
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Coming Soon
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting Next-Generation CTF Challenges & Cybersecurity Competitions
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-6">
            <h3 className="text-lg text-primary font-medium">Launch Countdown</h3>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <CountdownTimer />
            </div>
          </div>

          {/* Email Subscription */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 hover-lift max-w-xl mx-auto">
              <EmailSubscription />
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg text-primary font-medium">Join Our Community</h3>
            <div className="glass-card rounded-2xl p-6 hover-lift max-w-md mx-auto">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-4xl mx-auto px-8">
            <div className="glass border-t border-glass-border p-4 rounded-t-xl">
              <p className="text-muted-foreground text-sm">
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
