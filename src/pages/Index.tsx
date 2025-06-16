
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Presale from "@/components/Presale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhyEarlyBackers from "@/components/WhyEarlyBackers";
import TokenDetails from "@/components/TokenDetails";
import VestingSchedule from "@/components/VestingSchedule";
import TrustSignals from "@/components/TrustSignals";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#06115D] via-[#036165] to-[#20A5EF]">
      <div className="relative">
        {/* Background effects */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-[#1AECED]/20 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#20A5EF]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1AECED]/10 rounded-full blur-3xl"></div>
        </div>
        
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <WhyEarlyBackers />
        <TokenDetails />
        <Tokenomics />
        <VestingSchedule />
        <TrustSignals />
        <Roadmap />
        <Presale />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
