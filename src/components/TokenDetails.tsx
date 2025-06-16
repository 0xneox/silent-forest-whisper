
const TokenDetails = () => {
  const details = [
    { label: "Token Name", value: "AI Compute Token" },
    { label: "Token Symbol", value: "AIC" },
    { label: "Total Supply", value: "1,000,000,000 AIC" },
    { label: "Network", value: "Solana" },
    { label: "Current Price", value: "$0.05" },
    { label: "Listing Price", value: "$0.08" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            $AIC Our Token Details
          </h2>
          <p className="text-xl text-white/80">
            Learn more about our tokenomics and distribution
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {details.map((detail, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                <span className="text-white/80">{detail.label}</span>
                <span className="text-white font-semibold">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetails;
