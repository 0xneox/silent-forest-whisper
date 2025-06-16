
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const Tokenomics = () => {
  const data = [
    { name: 'Presale', value: 30, color: '#3B82F6' },
    { name: 'Liquidity', value: 25, color: '#8B5CF6' },
    { name: 'Team', value: 15, color: '#06B6D4' },
    { name: 'Marketing', value: 15, color: '#10B981' },
    { name: 'Development', value: 10, color: '#F59E0B' },
    { name: 'Reserve', value: 5, color: '#EF4444' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Fair and transparent token distribution designed for long-term sustainability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800/30 backdrop-blur border border-blue-500/20 rounded-2xl p-8">
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
              <div key={index} className="flex items-center justify-between bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }} />
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <span className="text-slate-300 font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
