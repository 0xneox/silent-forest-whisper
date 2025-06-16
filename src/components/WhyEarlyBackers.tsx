
const WhyEarlyBackers = () => {
  const benefits = [
    {
      title: "Early Access",
      description: "Get first access to new features and platform updates before public release",
      icon: "🚀"
    },
    {
      title: "Exclusive Benefits", 
      description: "Special rewards, bonuses and priority treatment for early supporters",
      icon: "⭐"
    },
    {
      title: "Community Voice",
      description: "Direct influence on project development decisions and governance voting", 
      icon: "🗳️"
    },
    {
      title: "Premium Support",
      description: "Priority customer support and dedicated assistance from our team",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Why Early Backers Win Big
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of early supporters who are already securing their position in the future of AI computing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/40 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-8 text-center hover:border-[#1AECED]/40 transition-all hover:transform hover:scale-105">
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEarlyBackers;
