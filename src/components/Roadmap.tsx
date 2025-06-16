
import { CheckCircle, Clock, Calendar } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2024",
      title: "Foundation",
      status: "completed",
      items: [
        "Smart contract development",
        "Security audit completion",
        "Website launch",
        "Community building"
      ]
    },
    {
      quarter: "Q2 2024",
      title: "Presale Launch",
      status: "current",
      items: [
        "Public presale launch",
        "Partnership announcements",
        "Marketing campaign",
        "Exchange negotiations"
      ]
    },
    {
      quarter: "Q3 2024",
      title: "Platform Launch",
      status: "upcoming",
      items: [
        "DEX listing",
        "Main platform release",
        "Mobile app launch",
        "Staking rewards"
      ]
    },
    {
      quarter: "Q4 2024",
      title: "Expansion",
      status: "upcoming",
      items: [
        "Multi-chain integration",
        "Advanced AI features",
        "Enterprise partnerships",
        "Global expansion"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'current':
        return <Clock className="w-6 h-6 text-blue-400" />;
      default:
        return <Calendar className="w-6 h-6 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-400/40 bg-green-400/10';
      case 'current':
        return 'border-blue-400/40 bg-blue-400/10';
      default:
        return 'border-slate-400/40 bg-slate-400/10';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our journey to revolutionize decentralized computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className={`bg-slate-800/30 backdrop-blur border rounded-2xl p-6 ${getStatusColor(phase.status)}`}>
              <div className="flex items-center mb-4">
                {getStatusIcon(phase.status)}
                <span className="ml-3 text-slate-300 font-medium">{phase.quarter}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
              
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-400 text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
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
