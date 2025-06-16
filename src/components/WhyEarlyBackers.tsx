
const WhyEarlyBackers = () => {
  const benefits = [
    {
      title: "Early Access",
      description: "Get first access to new features and updates",
      icon: "🚀"
    },
    {
      title: "Exclusive Benefits", 
      description: "Special rewards and bonuses for early supporters",
      icon: "⭐"
    },
    {
      title: "Community Voice",
      description: "Direct influence on project development decisions", 
      icon: "🗳️"
    },
    {
      title: "Premium Support",
      description: "Priority customer support and assistance",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Early Backers Win Big
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 text-center hover:border-[#1AECED]/40 transition-all">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEarlyBackers;
