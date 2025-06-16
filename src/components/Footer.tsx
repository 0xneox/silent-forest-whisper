
import { Twitter, MessageCircle, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Globe, href: "#", label: "Website" }
  ];

  return (
    <footer className="py-16 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">AI Computing Network</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Building the future of decentralized AI computing on Solana blockchain. 
              Join our community and be part of the revolution.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-slate-600 hover:border-blue-400 hover:bg-blue-400/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#presale" className="text-slate-400 hover:text-white transition-colors">Presale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security Audit</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 AI Computing Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
