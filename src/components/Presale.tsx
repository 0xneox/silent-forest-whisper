
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Public Presale Phase 1
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Be part of the future of decentralized AI computing. Early supporters get the best prices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Presale Progress */}
          <div className="space-y-6">
            <Card className="bg-black/30 backdrop-blur border-[#1AECED]/20">
              <CardHeader>
                <CardTitle className="text-white">Presale Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Raised</span>
                    <span className="text-white font-semibold">${presaleData.raised.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-4">
                    <div 
                      className="h-4 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${progressPercentage}%`,
                        background: 'linear-gradient(90deg, #1AECED 0%, #20A5EF 100%)'
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Target: ${presaleData.target.toLocaleString()}</span>
                    <span className="text-[#1AECED] font-semibold">{progressPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase Information */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-black/30 backdrop-blur border-[#1AECED]/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-[#1AECED] mb-1">${presaleData.price}</div>
                  <div className="text-white/60 text-sm">Current Price</div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur border-[#1AECED]/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">${presaleData.nextPrice}</div>
                  <div className="text-white/60 text-sm">Next Phase Price</div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <Card className="bg-black/30 backdrop-blur border-[#1AECED]/20">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Phase 1 Benefits</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1AECED] rounded-full mr-3" />
                    Lowest price guaranteed
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1AECED] rounded-full mr-3" />
                    Early access to platform
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1AECED] rounded-full mr-3" />
                    Bonus rewards program
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#1AECED] rounded-full mr-3" />
                    Exclusive community access
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Form */}
          <Card className="bg-black/30 backdrop-blur border-[#1AECED]/20">
            <CardHeader>
              <CardTitle className="text-white">Buy AIC Tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Amount in SOL
                </label>
                <Input
                  type="number"
                  placeholder="0.0"
                  value={solAmount}
                  onChange={(e) => handleSolChange(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder-white/40"
                  min={presaleData.minBuy}
                  max={presaleData.maxBuy}
                  step="0.1"
                />
                <p className="text-white/40 text-xs mt-1">
                  Min: {presaleData.minBuy} SOL | Max: {presaleData.maxBuy} SOL
                </p>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  You will receive
                </label>
                <Input
                  type="text"
                  value={tokenAmount ? `${tokenAmount} AIC` : "0 AIC"}
                  readOnly
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              <div className="bg-[#1AECED]/10 border border-[#1AECED]/20 rounded-lg p-4">
                <div className="text-sm text-white/80 space-y-1">
                  <div className="flex justify-between">
                    <span>Price per token:</span>
                    <span>${presaleData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next phase price:</span>
                    <span>${presaleData.nextPrice}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-[#1AECED]">
                    <span>Your discount:</span>
                    <span>{(((presaleData.nextPrice - presaleData.price) / presaleData.nextPrice) * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleBuy}
                className="w-full bg-[#1AECED] text-[#06115D] hover:bg-[#20A5EF] py-6 text-lg rounded-lg font-semibold"
                size="lg"
              >
                Connect Wallet & Buy Now
              </Button>

              <div className="text-center text-xs text-white/40 space-y-1">
                <p>By purchasing, you agree to our terms and conditions.</p>
                <p>Tokens will be distributed according to vesting schedule.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Presale;
