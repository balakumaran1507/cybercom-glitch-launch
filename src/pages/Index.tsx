import CountdownTimer from '@/components/CountdownTimer';
import SocialLinks from '@/components/SocialLinks';
import EmailSubscription from '@/components/EmailSubscription';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with enhanced overlay */}
      <div className="animated-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/90 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_70%)] z-0"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Modern Header */}
        <header className="w-full py-8 px-6 md:px-12 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                <span 
                  className="glitch text-glow" 
                  data-text="CYBERCOM"
                >
                  CYBERCOM
                </span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">Features</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all">Contact</a>
            </div>
          </div>
        </header>

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
                
                {/* Email Subscription */}
                <div className="glass-card rounded-xl p-8 hover-lift border border-glass-border backdrop-blur-xl">
                  <EmailSubscription />
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

        {/* Features Section with Improved Cards */}
        <section className="w-full px-6 md:px-12 py-16 md:py-24 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Cybercom</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Our platform offers unique advantages for cybersecurity professionals and enthusiasts</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {/* Feature 1 */}
              <div className="glass-card rounded-xl p-8 hover-lift border border-glass-border h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Advanced Security Challenges</h3>
                    <p className="text-muted-foreground">State-of-the-art CTF challenges designed by industry experts to test and enhance your skills</p>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="glass-card rounded-xl p-8 hover-lift border border-glass-border h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Global Cybersecurity Community</h3>
                    <p className="text-muted-foreground">Connect with like-minded professionals and enthusiasts from around the world</p>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="glass-card rounded-xl p-8 hover-lift border border-glass-border h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Real-time Competition Platform</h3>
                    <p className="text-muted-foreground">Participate in live events with instant feedback and dynamic leaderboards</p>
                  </div>
                </div>
              </div>
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
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Competitions</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Training</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
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
