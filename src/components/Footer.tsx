
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "GitHub", href: "#" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Presale", href: "#presale" }
  ];

  const resources = [
    { name: "Whitepaper", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Security Audit", href: "#" },
    { name: "Support", href: "#" }
  ];

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">AI Compute</h3>
            <p className="text-white/60 mb-6 text-sm">
              Building the future of decentralized AI computing on Solana blockchain. 
              Join our community and be part of the revolution.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/80 hover:border-[#1AECED] hover:bg-[#1AECED]/10 hover:text-[#1AECED]"
                  asChild
                >
                  <a href={social.href}>{social.name}</a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-[#1AECED] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-white/60 hover:text-[#1AECED] transition-colors text-sm">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Email: hello@aicompute.com</p>
              <p>Community: Discord</p>
              <p>Updates: Twitter</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2024 AI Compute Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
