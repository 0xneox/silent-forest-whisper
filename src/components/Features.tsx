
import { Shield, Zap, Globe, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Fully audited smart contracts with transparent operations"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second transactions powered by Solana blockchain"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Decentralized network accessible worldwide 24/7"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Governed by token holders with democratic decisions"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Built with cutting-edge technology to deliver unparalleled performance and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
