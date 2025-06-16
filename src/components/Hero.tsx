
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered Decentralized
            <br />
            <span style={{ color: '#1AECED' }}>Compute Powered by You</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of decentralized computing with our revolutionary 
            AI-powered blockchain platform
          </p>
        </div>

        {/* Central 3D visualization placeholder */}
        <div className="relative mb-12">
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#1AECED]/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border border-[#20A5EF]/40 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-[#1AECED]/20 to-[#20A5EF]/20 flex items-center justify-center">
              <div className="w-32 h-32 bg-[#1AECED]/30 rounded-full flex items-center justify-center">
                <div className="text-4xl font-bold text-white">AI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-black/30 backdrop-blur border border-[#1AECED]/30 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Dynamic Pricing Alert</h3>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1AECED]">00</div>
              <div className="text-white/60 text-sm">DAYS</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1AECED]">14</div>
              <div className="text-white/60 text-sm">HOURS</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1AECED]">32</div>
              <div className="text-white/60 text-sm">MINUTES</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1AECED]">18</div>
              <div className="text-white/60 text-sm">SECONDS</div>
            </div>
          </div>
          <p className="text-white/80 text-sm mt-4">To next price increase</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#1AECED] text-[#06115D] hover:bg-[#20A5EF] px-8 py-4 text-lg rounded-full font-semibold"
          >
            Join Public Presale Phase 1
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-[#1AECED] text-[#1AECED] hover:bg-[#1AECED]/10 px-8 py-4 text-lg rounded-full"
          >
            Learn More
          </Button>
        </div>

        {/* Exchange listings */}
        <div className="mt-12">
          <p className="text-white/60 text-sm mb-4">Confirmed exchange listings</p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-white/80 font-semibold">MEXC</div>
            <div className="text-white/80 font-semibold">Bitmart</div>
            <div className="text-white/80 font-semibold">Uniswap</div>
            <div className="text-white/80 font-semibold">1inch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
