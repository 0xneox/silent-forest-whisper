
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Presale = () => {
  const [solAmount, setSolAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  
  const presaleData = {
    raised: 3330000,
    target: 5000000,
    price: 0.007,
    currentPhase: 1,
    nextPrice: 0.012,
    minBuy: 0.1,
    maxBuy: 100
  };

  const calculateTokens = (solValue: string) => {
    const sol = parseFloat(solValue) || 0;
    const tokens = sol / presaleData.price;
    setTokenAmount(tokens.toLocaleString());
  };

  const handleSolChange = (value: string) => {
    setSolAmount(value);
    calculateTokens(value);
  };

  const handleBuy = () => {
    if (!solAmount || parseFloat(solAmount) < presaleData.minBuy) {
      toast({
        title: "Invalid Amount",
        description: `Minimum purchase is ${presaleData.minBuy} SOL`,
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Wallet Connection Required",
      description: "Please connect your Solana wallet to continue",
    });
  };

  const progressPercentage = (presaleData.raised / presaleData.target) * 100;

  return (
    <section id="presale" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Public Presale Phase 1
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Be part of the future of decentralized AI computing. Early supporters get the best prices and exclusive benefits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Presale Information */}
          <div className="space-y-8">
            {/* Progress Card */}
            <Card className="bg-black/40 backdrop-blur border border-[#1AECED]/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Presale Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Raised</span>
                    <span className="text-white font-bold text-xl">${presaleData.raised.toLocaleString()}</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-4">
                      <div 
                        className="h-4 rounded-full transition-all duration-500 bg-gradient-to-r from-[#1AECED] to-[#20A5EF]"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Target: ${presaleData.target.toLocaleString()}</span>
                    <span className="text-[#1AECED] font-bold">{progressPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Information */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur border border-[#1AECED]/20 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#1AECED] mb-2">${presaleData.price}</div>
                  <div className="text-white/60">Current Price</div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur border border-[#1AECED]/20 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-white mb-2">${presaleData.nextPrice}</div>
                  <div className="text-white/60">Next Phase Price</div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <Card className="bg-black/40 backdrop-blur border border-[#1AECED]/20">
              <CardContent className="p-8">
                <h3 className="text-white font-bold text-xl mb-6">Phase 1 Exclusive Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1AECED] rounded-full mr-4"></div>
                    <span className="text-white/80">Lowest price guaranteed - 42% discount</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1AECED] rounded-full mr-4"></div>
                    <span className="text-white/80">Early access to platform features</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1AECED] rounded-full mr-4"></div>
                    <span className="text-white/80">Bonus rewards and staking benefits</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#1AECED] rounded-full mr-4"></div>
                    <span className="text-white/80">Exclusive community access and governance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Purchase Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="bg-black/40 backdrop-blur border border-[#1AECED]/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Buy AIC Tokens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    Amount in SOL
                  </label>
                  <Input
                    type="number"
                    placeholder="0.0"
                    value={solAmount}
                    onChange={(e) => handleSolChange(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder-white/40 h-14 text-lg"
                    min={presaleData.minBuy}
                    max={presaleData.maxBuy}
                    step="0.1"
                  />
                  <p className="text-white/40 text-xs mt-2">
                    Min: {presaleData.minBuy} SOL | Max: {presaleData.maxBuy} SOL
                  </p>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">
                    You will receive
                  </label>
                  <Input
                    type="text"
                    value={tokenAmount ? `${tokenAmount} AIC` : "0 AIC"}
                    readOnly
                    className="bg-white/5 border-white/20 text-white h-14 text-lg"
                  />
                </div>

                <div className="bg-[#1AECED]/10 border border-[#1AECED]/30 rounded-xl p-6">
                  <div className="text-sm text-white/80 space-y-3">
                    <div className="flex justify-between">
                      <span>Price per token:</span>
                      <span className="text-white font-semibold">${presaleData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next phase price:</span>
                      <span className="text-white font-semibold">${presaleData.nextPrice}</span>
                    </div>
                    <div className="border-t border-[#1AECED]/20 pt-3">
                      <div className="flex justify-between font-bold text-[#1AECED]">
                        <span>Your discount:</span>
                        <span>{(((presaleData.nextPrice - presaleData.price) / presaleData.nextPrice) * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleBuy}
                  className="w-full bg-[#1AECED] text-[#06115D] hover:bg-[#1AECED]/90 py-6 text-lg font-bold rounded-xl transition-all"
                  size="lg"
                >
                  Connect Wallet & Buy Now
                </Button>

                <div className="text-center text-xs text-white/40 space-y-2 pt-4 border-t border-white/10">
                  <p>By purchasing, you agree to our terms and conditions.</p>
                  <p>Tokens will be distributed according to vesting schedule.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
