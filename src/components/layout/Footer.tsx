import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/sharda-logo.png";

const page = [
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Facilities", path: "/facilities" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
];

const quickLinks = [
  { name: "Admissions", path: "/admission" },
  { name: "Terms & Conditions", path: "#" },
  { name: "Privacy Policy", path: "#" },
  { name: "Admission Policy", path: "#" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Sharda Global School" className="h-16 w-auto" />
              <div>
                <h3 className="font-heading text-lg font-bold">Sharda Global</h3>
                <p className="text-sm text-white/70">Residential School</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Next Step to Educate — Modern English Medium Co-Education Residential School in Akuana, Nawada, Bihar.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Pages</h4>
            <ul className="space-y-2.5">
              {page.map((links) => (
                <li key={links.path}>
                  <Link to={links.path} className="text-white/60 hover:text-accent text-sm transition-colors">{links.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-accent text-sm transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <p className="text-white/60">NH-20, Akuana, Nawada, Bihar - 805110</p>
              </div>
              <a href="tel:+919608527230" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" /> +91 96085 27230
              </a>
              <a href="mailto:info@shardaglobalschool.in" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" /> info@shardaglobalschool.in
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sharda Global Residential School. All rights reserved.</p>
          <div>
            Designed & Developed by :
            <a
            href="https://growthix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span className="font-semibold"> Growthix</span>
          </a>
          <span> & </span>
          <a
            href="https://apdigi.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span className="font-semibold">Apdigi</span>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
