import { Phone, Mail, Linkedin, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Contact */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                BizBoost Marketing
              </h3>
              <p className="text-muted-foreground mb-6">
                Boost your business across all social media platforms with guaranteed results.
                Professional marketing campaigns starting at just ₦1,200.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+2347067412852</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">adebayoajani23@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/toheebay12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://www.facebook.com/kolawole.adebayo.1069" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a 
                  href="https://x.com/Adebayo19192400" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
                <a 
                  href="https://www.instagram.com/kolawole.adebayo.1069/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a 
                  href="https://wa.me/2347067412852" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 BizBoost Marketing. All rights reserved. Built with ❤️ for Nigerian businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;