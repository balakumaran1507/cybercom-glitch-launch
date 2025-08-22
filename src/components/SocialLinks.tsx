import { Linkedin, Instagram, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
    },
  ];

  return (
    <div className="flex space-x-6 justify-center">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 cyber-glow-hover group"
        >
          <social.icon 
            size={24} 
            className="group-hover:text-primary transition-colors duration-300" 
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;