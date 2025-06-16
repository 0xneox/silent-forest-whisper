
const TrustSignals = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trust Signals & Timeline
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-[#1AECED]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🔒</div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Security Audit</h3>
            <p className="text-white/60">Smart contracts audited by leading security firms</p>
          </div>

          <div className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-[#1AECED]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">⚡</div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Fast Execution</h3>
            <p className="text-white/60">Lightning-fast transaction processing on Solana</p>
          </div>

          <div className="bg-black/30 backdrop-blur border border-[#1AECED]/20 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-[#1AECED]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl">🌐</div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Global Access</h3>
            <p className="text-white/60">Accessible worldwide with 24/7 availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
