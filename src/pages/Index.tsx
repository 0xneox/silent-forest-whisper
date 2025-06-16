
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
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #06115D 0%, #036165 50%, #20A5EF 100%)' }}>
      <div className="relative">
        {/* Background pattern */}
        <div className="fixed inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1AECED 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #20A5EF 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, #036165 0%, transparent 70%)`
          }} />
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
