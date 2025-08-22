import CountdownTimer from '@/components/CountdownTimer';
import SocialLinks from '@/components/SocialLinks';
import EmailSubscription from '@/components/EmailSubscription';
import { Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Logo and Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield size={48} className="text-primary cyber-text-glow" />
            <div className="text-5xl md:text-6xl font-bold text-primary">
              <span 
                className="glitch cyber-text-glow" 
                data-text="Cybercom"
              >
                Cybercom
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Coming Soon
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the Future of Cybersecurity
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="space-y-4">
          <h2 className="text-lg text-primary font-semibold">Launch Countdown</h2>
          <CountdownTimer />
        </div>

        {/* Email Subscription */}
        <div className="space-y-6">
          <EmailSubscription />
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg text-primary font-semibold">Join Our Community</h3>
          <SocialLinks />
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2024 Cybercom. Securing the digital frontier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
