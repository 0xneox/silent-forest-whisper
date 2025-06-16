
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI-Powered Decentralized
            <br />
            <span className="text-[#1AECED]">Compute Powered by You</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of decentralized computing with our revolutionary 
            AI-powered blockchain platform on Solana
          </p>
        </div>

        {/* 3D Visualization with floating elements */}
        <div className="relative mb-16">
          <div className="w-96 h-96 mx-auto relative">
            {/* Central core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-r from-[#1AECED]/30 to-[#20A5EF]/30 rounded-full flex items-center justify-center backdrop-blur">
                <div className="w-24 h-24 bg-[#1AECED]/40 rounded-full flex items-center justify-center">
                  <div className="text-3xl font-bold text-white">AI</div>
                </div>
              </div>
            </div>
            
            {/* Floating cubes */}
            <div className="absolute top-8 left-12 w-8 h-8 bg-[#1AECED]/60 rounded animate-pulse"></div>
            <div className="absolute top-16 right-16 w-6 h-6 bg-[#20A5EF]/60 rounded-lg animate-bounce"></div>
            <div className="absolute bottom-12 left-8 w-10 h-10 bg-[#036165]/60 rounded rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 right-12 w-7 h-7 bg-[#1AECED]/70 rounded-full animate-ping"></div>
            
            {/* Orbital rings */}
            <div className="absolute inset-8 rounded-full border border-[#1AECED]/20 animate-spin-slow"></div>
            <div className="absolute inset-16 rounded-full border border-[#20A5EF]/30"></div>
          </div>
        </div>

        {/* Dynamic Pricing Alert */}
        <div className="bg-black/40 backdrop-blur border border-[#1AECED]/30 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Dynamic Pricing Alert</h3>
          <div className="grid grid-cols-4 gap-6 text-center mb-4">
            <div>
              <div className="text-4xl font-bold text-[#1AECED] mb-1">00</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1AECED] mb-1">14</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1AECED] mb-1">32</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1AECED] mb-1">18</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>
          <p className="text-white/70 text-sm">To next price increase</p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-[#1AECED] text-[#06115D] hover:bg-[#1AECED]/90 px-10 py-4 text-lg font-semibold rounded-full transition-all"
          >
            Join Public Presale Phase 1
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-[#1AECED] text-[#1AECED] hover:bg-[#1AECED]/10 px-10 py-4 text-lg font-semibold rounded-full transition-all"
          >
            Learn More
          </Button>
        </div>

        {/* Confirmed Exchange Listings */}
        <div className="mt-16">
          <p className="text-white/50 text-sm mb-6 uppercase tracking-wide">Confirmed Exchange Listings</p>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-white/70 font-semibold text-lg">MEXC</div>
            <div className="text-white/70 font-semibold text-lg">Bitmart</div>
            <div className="text-white/70 font-semibold text-lg">Uniswap</div>
            <div className="text-white/70 font-semibold text-lg">1inch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
