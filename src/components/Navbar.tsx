
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-white text-xl font-bold">AI</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white/80 hover:text-[#1AECED] transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-[#1AECED] transition-colors">About</a>
            <a href="#tokenomics" className="text-white/80 hover:text-[#1AECED] transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-white/80 hover:text-[#1AECED] transition-colors">Roadmap</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-[#1AECED] text-[#1AECED] hover:bg-[#1AECED] hover:text-[#06115D]"
          >
            Connect Wallet
          </Button>
          <Button 
            className="bg-[#1AECED] text-[#06115D] hover:bg-[#20A5EF]"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
