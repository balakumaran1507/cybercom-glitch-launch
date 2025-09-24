import { Button } from '@/components/ui/button';

const CTFRegistration = () => {
  const handleRegister = () => {
    window.open('http://ctf.cybercom.live/', '_blank');
  };

  return (
    <div className="w-full">
      <div className="space-y-4 mb-6">
        <h3 className="text-2xl font-bold text-primary">
          Register Now
        </h3>
        <div className="text-muted-foreground text-lg">
          <div className="font-semibold text-xl mb-2">Cybercom CTF</div>
          <div>
            Timing: Sept 27th 12:30 UTC to<br />
            Sept 28th 12:30 UTC
          </div>
        </div>
      </div>
      
      <Button
        onClick={handleRegister}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-4 px-6 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-lg hover:shadow-blue-500/20 text-lg"
      >
        Register Now
      </Button>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        Join the ultimate cybersecurity challenge and test your skills!
      </p>
    </div>
  );
};

export default CTFRegistration;