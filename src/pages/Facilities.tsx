import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home";
import { motion } from "framer-motion";
import { Monitor, BookOpen, FlaskConical, Laptop, Bus, Shield, UtensilsCrossed, Dumbbell } from "lucide-react";
const facilities = [
  { icon: Monitor, title: "Smart Classrooms", desc: "Interactive digital boards, projectors, and audio-visual learning aids." },
  { icon: BookOpen, title: "Library", desc: "Spacious library with 5000+ books for all age groups." },
  { icon: FlaskConical, title: "Science Labs", desc: "Well-equipped Physics, Chemistry, and Biology labs." },
  { icon: Laptop, title: "Computer Lab", desc: "Modern computer lab with latest hardware and software." },
  { icon: Dumbbell, title: "Sports Facilities", desc: "Cricket ground, basketball court, badminton, and indoor games." },
  { icon: Bus, title: "Transport", desc: "Safe school bus service covering major routes across Nawada." },
  { icon: UtensilsCrossed, title: "Canteen", desc: "Hygienic canteen serving nutritious meals with clean drinking water." },
  { icon: Shield, title: "Safety & Security", desc: "24/7 CCTV, trained security, first aid, strict visitor management." },
];
export default function Facilities() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Our Campus</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">World-Class Facilities</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Modern infrastructure for the best learning environment.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="card-premium h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5"><f.icon className="h-7 w-7 text-primary" /></div>
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
