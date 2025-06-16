
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Tokenomics = () => {
  const data = [
    { name: 'Presale', value: 30, color: '#1AECED' },
    { name: 'Liquidity', value: 25, color: '#20A5EF' },
    { name: 'Team', value: 15, color: '#036165' },
    { name: 'Marketing', value: 15, color: '#06115D' },
    { name: 'Development', value: 10, color: '#0EA5E9' },
    { name: 'Reserve', value: 5, color: '#3B82F6' }
  ];

  const stats = [
    { value: "$100K", label: "Current Phase" },
    { value: "100X", label: "Projected Growth" },
    { value: "$16M", label: "Potential Value" },
    { value: "$30M", label: "Market Cap Goal" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fair and transparent token distribution designed for long-term sustainability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-[#1AECED] mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-8">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }} />
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <span className="text-white/80 font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
