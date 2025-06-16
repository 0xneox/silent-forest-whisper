
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Clock, Target, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Presale = () => {
  const [solAmount, setSolAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  
  // Presale details
  const presaleData = {
    raised: 3250000,
    target: 5000000,
    price: 0.05, // SOL per token
    endDate: new Date('2024-12-31'),
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
    
    if (parseFloat(solAmount) > presaleData.maxBuy) {
      toast({
        title: "Invalid Amount", 
        description: `Maximum purchase is ${presaleData.maxBuy} SOL`,
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
  const daysLeft = Math.ceil((presaleData.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section id="presale" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Presale
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Be part of the future of decentralized computing. Early supporters get the best prices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Presale Stats */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-400" />
                  Presale Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Raised</span>
                    <span className="text-white font-semibold">{presaleData.raised.toLocaleString()} SOL</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Target: {presaleData.target.toLocaleString()} SOL</span>
                    <span className="text-blue-400 font-semibold">{progressPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/50 backdrop-blur border-blue-500/20">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{daysLeft}</p>
                  <p className="text-slate-400 text-sm">Days Left</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur border-blue-500/20">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{presaleData.price}</p>
                  <p className="text-slate-400 text-sm">SOL per Token</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Purchase Form */}
          <Card className="bg-slate-800/50 backdrop-blur border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-blue-400" />
                Buy Tokens
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Amount in SOL
                </label>
                <Input
                  type="number"
                  placeholder="0.0"
                  value={solAmount}
                  onChange={(e) => handleSolChange(e.target.value)}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  min={presaleData.minBuy}
                  max={presaleData.maxBuy}
                  step="0.1"
                />
                <p className="text-slate-400 text-xs mt-1">
                  Min: {presaleData.minBuy} SOL | Max: {presaleData.maxBuy} SOL
                </p>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  You will receive
                </label>
                <Input
                  type="text"
                  value={tokenAmount}
                  readOnly
                  className="bg-slate-700/30 border-slate-600 text-white"
                  placeholder="0 Tokens"
                />
              </div>

              <Button 
                onClick={handleBuy}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg rounded-lg"
                size="lg"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet & Buy
              </Button>

              <div className="text-center text-xs text-slate-400">
                <p>By purchasing, you agree to our terms and conditions.</p>
                <p>Tokens will be distributed after presale ends.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Presale;
