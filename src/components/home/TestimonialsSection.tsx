import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Class V student", content: "Sharda Global has been a wonderful experience for my child. The teachers are dedicated and the facilities are excellent.", rating: 5 },
  { name: "Rajesh Kumar", role: "Parent of Class VIII student", content: "The school's focus on holistic development sets it apart. My son excels in studies and participates actively in sports and cultural events.", rating: 5 },
  { name: "Sunita Devi", role: "Parent of Class III student", content: "As a parent, safety is my top priority. Sharda Global provides a secure and nurturing environment with regular parent-teacher meetings.", rating: 5 },
  { name: "Amit Verma", role: "Parent of Class X student", content: "The competitive exam preparation along with regular academics has been phenomenal. My child is well-prepared for board exams and entrance tests.", rating: 4 },
  { name: "Neha Singh", role: "Parent of LKG student", content: "The pre-primary section is beautifully designed. My little one loves going to school every day. The play-based learning is perfect.", rating: 5 },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading badge="Testimonials" title="What Parents Say" subtitle="Hear from our school community." />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto mt-14 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="card-premium text-center p-8 md:p-12"
            >
              <Quote className="h-10 w-10 text-primary/20 mx-auto mb-4" />
              <p className="text-lg text-foreground leading-relaxed mb-6 italic">"{testimonials[current].content}"</p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < testimonials[current].rating ? "text-accent fill-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
