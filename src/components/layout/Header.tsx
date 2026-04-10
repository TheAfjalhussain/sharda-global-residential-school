import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/sharda-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admission" },
  { name: "Facilities", path: "/facilities" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919608527230" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" /> +91 96085 27230
            </a>
            <a href="mailto:info@shardaglobalschool.in" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" /> info@shardaglobalschool.in
            </a>
          </div>
          <p className="text-primary-foreground/80">NH-20, Akuana, Nawada, Bihar - 805110</p>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background"}`}>
        <div className="section-container flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Sharda Global School" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg font-bold text-primary leading-tight">Sharda Global</h1>
              <p className="text-xs text-muted-foreground">Residential School</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary-light hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admission"
              className="ml-3 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:brightness-110 transition-all shadow-md"
            >
              Apply Now
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="section-container py-4 space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/admission"
                  className="block mt-3 px-4 py-3 bg-accent text-accent-foreground rounded-xl font-semibold text-sm text-center"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
