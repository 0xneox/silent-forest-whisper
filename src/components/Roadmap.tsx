
const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2024",
      title: "Foundation",
      status: "completed",
      items: [
        "Smart contract development completed",
        "Security audit finalized",
        "Website and community launch",
        "Initial partnerships established"
      ]
    },
    {
      quarter: "Q2 2024", 
      title: "Presale Launch",
      status: "current",
      items: [
        "Public presale launch (Phase 1)",
        "Community building initiatives",
        "Marketing campaign rollout",
        "Exchange partnership negotiations"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Platform Launch",
      status: "upcoming",
      items: [
        "Token generation event (TGE)",
        "DEX listings (Uniswap, PancakeSwap)",
        "Main platform beta release",
        "Mobile application launch"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Ecosystem Expansion",
      status: "upcoming", 
      items: [
        "CEX listings (Tier 1 exchanges)",
        "Advanced AI features release",
        "Enterprise partnerships",
        "Multi-chain integration"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400/40 bg-green-400/10';
      case 'current':
        return 'border-[#1AECED]/40 bg-[#1AECED]/10';
      default:
        return 'border-white/20 bg-white/5';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'current':
        return '🔄';
      default:
        return '📅';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our journey to revolutionize decentralized AI computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className={`bg-black/30 backdrop-blur border rounded-2xl p-6 ${getStatusColor(phase.status)}`}>
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{getStatusIcon(phase.status)}</span>
                <span className="text-white/80 font-medium">{phase.quarter}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
              
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/60 text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#1AECED] rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
