import { Linkedin, Twitter, Github, MessageSquare } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
        aria-label="LinkedIn"
      >
        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-glass-border flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-lg shadow-black/20">
          <Linkedin size={22} />
        </div>
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-blue-400 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
        aria-label="Twitter"
      >
        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-glass-border flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-lg shadow-black/20">
          <Twitter size={22} />
        </div>
      </a>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-purple-400 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
        aria-label="GitHub"
      >
        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-glass-border flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 shadow-lg shadow-black/20">
          <Github size={22} />
        </div>
      </a>
      <a 
        href="https://discord.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-cyan-400 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300"
        aria-label="Discord"
      >
        <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-glass-border flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 shadow-lg shadow-black/20">
          <MessageSquare size={22} />
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;