import { motion } from "framer-motion";
import { Users, GraduationCap, Clock, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const stats = [
  { icon: Users, value: "1500+", label: "Students" },
  { icon: GraduationCap, value: "25+", label: "Teachers" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: TrendingUp, value: "95%", label: "Pass Rate" },
];

export function HighlightsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-2xl bg-primary-light border border-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
