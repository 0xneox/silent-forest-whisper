
const Features = () => {
  const features = [
    {
      title: "Decentralization",
      description: "Fully audited smart contracts with transparent operations",
      icon: "🔒"
    },
    {
      title: "Lightning Speed",
      description: "Sub-second transactions powered by Solana blockchain", 
      icon: "⚡"
    },
    {
      title: "Reliability",
      description: "Decentralized network accessible worldwide 24/7",
      icon: "🌐"
    },
    {
      title: "AI-Powered",
      description: "Advanced AI algorithms for optimal performance",
      icon: "🤖"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trust & Transparency
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Audited with transparent smart contracts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 hover:border-[#1AECED]/40 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
