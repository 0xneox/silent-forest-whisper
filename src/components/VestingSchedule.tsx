
const VestingSchedule = () => {
  const scheduleData = [
    { phase: "Presale", percentage: "30%", vesting: "25% at TGE, 25% monthly", color: "#1AECED" },
    { phase: "Liquidity", percentage: "25%", vesting: "100% at TGE", color: "#20A5EF" },
    { phase: "Team", percentage: "15%", vesting: "6 month cliff, 24 month linear", color: "#036165" },
    { phase: "Marketing", percentage: "15%", vesting: "10% at TGE, 10% monthly", color: "#06115D" },
    { phase: "Development", percentage: "10%", vesting: "3 month cliff, 18 month linear", color: "#0EA5E9" },
    { phase: "Reserve", percentage: "5%", vesting: "12 month cliff, 36 month linear", color: "#3B82F6" }
  ];

  const stats = [
    { value: "3.33M", label: "Total Raised", subtext: "$0.007 = 1 Token" },
    { value: "0.007$", label: "Current Price", subtext: "Price = $0.007" },
    { value: "156K", label: "Tokens Sold", subtext: "" },
    { value: "0 Days", label: "Until Next Phase", subtext: "" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vesting Schedule
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-[#1AECED] mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm mb-1">{stat.label}</div>
              {stat.subtext && <div className="text-white/40 text-xs">{stat.subtext}</div>}
            </div>
          ))}
        </div>

        {/* Vesting Table */}
        <div className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6">Token Release Schedule</h3>
            <div className="space-y-4">
              {scheduleData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-4" style={{ backgroundColor: item.color }} />
                    <div>
                      <div className="text-white font-medium">{item.phase}</div>
                      <div className="text-white/60 text-sm">{item.percentage}</div>
                    </div>
                  </div>
                  <div className="text-white/80 text-sm">{item.vesting}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VestingSchedule;
