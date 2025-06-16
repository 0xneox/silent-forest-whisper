
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Presale from "@/components/Presale";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="relative">
        {/* Background stars */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzdGFycyIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4zIi8+CiAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMiIvPgogICAgICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSI2MCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC40Ii8+CiAgICAgIDxjaXJjbGUgY3g9IjE4MCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjMiLz4KICAgICAgPGNpcmNsZSBjeD0iNzAiIGN5PSIxNDAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMiIvPgogICAgICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNzAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNzdGFycykiLz4KPC9zdmc+')] opacity-30 pointer-events-none" />
        
        <Hero />
        <Stats />
        <Features />
        <Tokenomics />
        <Roadmap />
        <Presale />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
