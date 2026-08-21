import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-foreground text-studio-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-5 z-0 select-none whitespace-nowrap text-center font-display text-[clamp(3rem,12vw,15rem)] font-bold leading-none tracking-[0.04em] text-studio-white/[0.1]">
        ARUNASEYA
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Studio Arunaseya" className="h-16 w-auto brightness-0 invert" />
            <p className="font-body text-sm text-studio-white/70 leading-relaxed">
              Your trusted photography studio in Kelaniya, Sri Lanka. 
              Preserving memories since 1972.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-studio-white/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="font-body text-sm text-studio-white/70">Photo Printing</li>
              <li className="font-body text-sm text-studio-white/70">Passport Photos</li>
              <li className="font-body text-sm text-studio-white/70">Photo Framing</li>
              <li className="font-body text-sm text-studio-white/70">Photo Restoration</li>
              <li className="font-body text-sm text-studio-white/70">Laminating</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-studio-white/70">
                  17, Eksath Mawatha, Sinharamulla, Kelaniya, 11600
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+94702284833" className="font-body text-sm text-studio-white/70 hover:text-primary transition-colors">
                  +94 70 228 4833
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:arunaseya48@gmail.com" className="font-body text-sm text-studio-white/70 hover:text-primary transition-colors">
                  arunaseya48@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-studio-white/10 mt-10 pt-6 text-center">
          <p className="font-body text-sm text-studio-white/50">
            © 2026 Studio Arunaseya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
