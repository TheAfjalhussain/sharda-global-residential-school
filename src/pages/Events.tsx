import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home";
import { motion } from "framer-motion";
import { Calendar, Trophy, Palette, Music, BookOpen, Dumbbell } from "lucide-react";

const events = [
  { icon: BookOpen, title: "Science Exhibition", desc: "Annual science fair showcasing student innovations and experiments.", date: "August 2026" },
  { icon: Dumbbell, title: "Sports Day", desc: "Annual sports meet with track & field events, team sports, and award ceremonies.", date: "November 2026" },
  { icon: Palette, title: "Cultural Fest", desc: "Celebration of art, music, dance, and drama showcasing diverse talents.", date: "December 2026" },
  { icon: Trophy, title: "Republic Day", desc: "Patriotic celebration with flag hoisting, speeches, and cultural programs.", date: "January 2027" },
  { icon: Music, title: "Annual Day", desc: "Grand celebration of the school's founding with performances and awards.", date: "March 2027" },
  { icon: Calendar, title: "Independence Day", desc: "National day celebration with student-led activities and performances.", date: "August 2026" },
];

const activities = [
  { title: "Sports", items: ["Cricket", "Football", "Basketball", "Badminton", "Athletics", "Table Tennis"] },
  { title: "Arts & Culture", items: ["Drawing & Painting", "Music", "Dance", "Drama", "Craft", "Photography"] },
  { title: "Academic", items: ["Debate", "Quiz", "Essay Writing", "Science Club", "Math Olympiad", "Book Club"] },
  { title: "Life Skills", items: ["Leadership Camp", "Community Service", "Yoga & Meditation", "Public Speaking", "Financial Literacy", "First Aid Training"] },
];

export default function Events() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Life at School</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Events & Activities</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">A vibrant calendar of events, competitions, and co-curricular activities.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading badge="Calendar" title="Upcoming Events" subtitle="Key events throughout the academic year." />
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {events.map((event, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="card-premium h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <AnimatedSection>
            <SectionHeading badge="Activities" title="Extra-Curricular Programs" subtitle="Beyond academics — developing well-rounded individuals." />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {activities.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-premium h-full">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
