
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
          <span className="text-blue-400 text-lg font-semibold tracking-wide">SOLANA ECOSYSTEM</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
          AI-Powered<br />
          <span className="text-blue-400">Decentralized</span><br />
          Computing Network
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the future of decentralized computing with our revolutionary AI-powered blockchain platform built on Solana
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full">
            <Rocket className="w-5 h-5 mr-2" />
            Join Presale
          </Button>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg rounded-full">
            Learn More
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-blue-400/30 rounded-lg animate-spin-slow opacity-50" />
        <div className="absolute bottom-20 left-10 w-16 h-16 border border-purple-400/30 rounded-full animate-bounce opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
