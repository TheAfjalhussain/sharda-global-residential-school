import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, FlaskConical, Award, Monitor, Brain, Target } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "Pre-Primary", grades: "Nursery, LKG, UKG", subjects: "English, Hindi, Mathematics, EVS, Art & Craft, Music & Dance", methods: "Play-based learning, activity-led teaching, storytelling" },
  { icon: GraduationCap, title: "Primary", grades: "Class I – V", subjects: "English, Hindi, Mathematics, EVS, Science, Social Studies, Computer, GK", methods: "Conceptual learning, group projects, digital classrooms" },
  { icon: FlaskConical, title: "Middle School", grades: "Class VI – VIII", subjects: "English, Hindi, Mathematics, Science, Social Science, Computer, Sanskrit/Urdu", methods: "Subject specialization, laboratory work, Olympiad prep" },
  { icon: Award, title: "Secondary", grades: "Class IX – X", subjects: "Physics, Chemistry, Biology, Mathematics, English, Hindi, Computer Science", methods: "Board exam preparation, JEE/NEET foundation, career counseling" },
];
const features = [
  { icon: Monitor, title: "Smart Classrooms", desc: "Interactive digital boards and projectors in every classroom." },
  { icon: FlaskConical, title: "Science Labs", desc: "Well-equipped Physics, Chemistry, and Biology laboratories." },
  { icon: Brain, title: "Competitive Prep", desc: "Foundation courses for JEE, NEET, and Olympiad examinations." },
  { icon: Target, title: "Assessment System", desc: "Regular tests, unit exams, and comprehensive board preparation." },
];
export default function Academics() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Academics</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Comprehensive curriculum from Nursery to Class X.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Programs" title="Our Academic Programs" /></AnimatedSection>
          <div className="space-y-8 mt-14 max-w-4xl mx-auto">
            {programs.map((prog, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-premium">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"><prog.icon className="h-7 w-7 text-primary" /></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-xl font-bold text-foreground">{prog.title}</h3>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">{prog.grades}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div><p className="text-sm font-semibold text-foreground mb-1">Subjects</p><p className="text-sm text-muted-foreground">{prog.subjects}</p></div>
                        <div><p className="text-sm font-semibold text-foreground mb-1">Teaching Methods</p><p className="text-sm text-muted-foreground">{prog.methods}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Features" title="Academic Infrastructure" /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="card-premium text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5"><f.icon className="h-7 w-7 text-primary" /></div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}
