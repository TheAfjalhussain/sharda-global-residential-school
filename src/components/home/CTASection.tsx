import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-royal relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="section-container relative text-center">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Admissions Open 2026-27
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Give Your Child the Best Start
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Limited seats available. Secure your child's future with quality education at Sharda Global Residential School.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admission">
                <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-base hover:brightness-110 transition-all shadow-lg group">
                  Apply Now <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border-2 border-white/40 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all">Book a Visit</button>
              </Link>
              <button className="px-8 py-4 text-white/80 hover:text-white rounded-xl font-bold text-base transition-colors">
                <Download className="inline mr-2 h-5 w-5" /> Download Prospectus
              </button>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
