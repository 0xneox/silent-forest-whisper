
const Stats = () => {
  const stats = [
    { value: "35,000+", label: "Active Users" },
    { value: "2.5M+", label: "Transactions" },
    { value: "850+", label: "Partners" },
    { value: "120+", label: "Countries" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-colors">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
