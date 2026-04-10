import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FlaskConical, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const programs = [
  { icon: BookOpen, title: "Pre-Primary", grades: "Nursery, LKG, UKG", description: "Play-based learning with focus on motor skills, creativity, and early literacy.", color: "bg-accent/10 text-accent" },
  { icon: GraduationCap, title: "Primary", grades: "Class I – V", description: "Strong academic foundation with activity-led teaching and digital resources.", color: "bg-primary/10 text-primary" },
  { icon: FlaskConical, title: "Middle School", grades: "Class VI – VIII", description: "Subject specialization, lab work, and competitive exam preparation.", color: "bg-secondary/10 text-secondary" },
  { icon: Award, title: "Secondary", grades: "Class IX – X", description: "Board exam preparation, career guidance, and JEE/NEET foundation.", color: "bg-primary-dark/10 text-primary-dark" },
];

export function ProgramsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            badge="Programs"
            title="Academic Programs"
            subtitle="Comprehensive education from Nursery to Class XII."
          />
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {programs.map((prog, i) => (
            <StaggerItem key={i}>
              <Link to="/academics">
                <motion.div whileHover={{ y: -6, scale: 1.02 }} className="card-premium h-full cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl ${prog.color.split(" ")[0]} flex items-center justify-center mb-5`}>
                    <prog.icon className={`h-7 w-7 ${prog.color.split(" ")[1]}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">{prog.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{prog.grades}</p>
                  <p className="text-muted-foreground text-sm">{prog.description}</p>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
