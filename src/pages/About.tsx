import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home";
import { motion } from "framer-motion";
import { Eye, Target, Heart, Star, Users, Shield } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "Empathy and care in every interaction." },
  { icon: Star, title: "Excellence", desc: "Striving for the highest standards." },
  { icon: Shield, title: "Integrity", desc: "Honesty, trust, and responsibility." },
  { icon: Users, title: "Community", desc: "Inclusive growth and teamwork." },
];

const infrastructure = [
  "⁠State-of-the-art classrooms",
  "Well Equipped Science & Computer Labs",
  "⁠Library with a vast collection of books",
  "⁠Spacious playgrounds and sports facilities",
  "⁠Safe and secure campus",
  "Transportation across Nawada",
  "CCTV Monitored Campus",
  "Hygienic & Clean Campus and Drinking Water",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sharda Global Residential School</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Modern English Medium Co-Education School — Nursery to Class X, Residential & Day Scholar</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading badge="Our Story" title="A Legacy of Excellence" />
            <div className="mt-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Sharda Global Residential School, located on NH-20, Akuana, Nawada, Bihar, is a Modern English medium co-education institution offering education from Nursery to Class X. With over 5 years of dedicated service, we are one of the leading schools in the region.</p>
              <p>Our school provides both residential and day-scholar options. We nurture confident, curious, and compassionate learners prepared for the challenges of the future.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection direction="left">
              <div className="card-premium border-2 border-primary/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">To be a center of academic excellence that nurtures future leaders with strong values, global perspective, and a passion for lifelong learning.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="card-premium border-2 border-accent/20 h-full">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Provide quality education from Nursery to Class X</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Foster holistic development — academic, physical, and emotional</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Create a safe, stimulating learning environment</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Build character through values-based education</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Values" title="What We Stand For" /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="card-premium text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Infrastructure" title="World-Class Facilities" /></AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
            {infrastructure.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
