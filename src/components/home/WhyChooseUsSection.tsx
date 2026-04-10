import { motion } from "framer-motion";
import { Shield, Users, BookOpen, Building } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  { icon: Users, title: "Expert Faculty", description: "20+ experienced and certified teachers ensuring quality education for every student." },
  { icon: BookOpen, title: "Smart Classrooms", description: "Digital learning infrastructure with projectors, smart boards, and interactive content." },
  { icon: Shield, title: "Safe & Secure Campus", description: "CCTV surveillance, trained staff, and strict safety protocols for peace of mind." },
  { icon: Building, title: "Sports & Activities", description: "Comprehensive sports facilities, extracurriculars, and holistic development programs." },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Why Choose Us"
            title="Excellence in Every Aspect"
            subtitle="What makes Sharda Global Residential School the best choice for your child."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {reasons.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div whileHover={{ y: -6 }} className="card-premium text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
