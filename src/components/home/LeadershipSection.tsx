import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Quote } from "lucide-react";
import dir from "@/assets/teacher3.jpg";
import principle from "@/assets/teacher5.jpg";

interface LeaderProps {
  name: string;
  role: string;
  image: string;
  message: string;
  points: string[];
  reverse?: boolean;
}

function LeaderCard({
  name,
  role,
  image,
  message,
  points,
  reverse = false,
}: LeaderProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-10 items-center bg-white/70 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* 📸 Image */}
      <div className={`${reverse ? "lg:col-start-2" : ""}`}>
        <div className="relative group">
          <img
            src={image}
            alt={name}
            className="rounded-2xl w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />

          {/* Name */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/80 text-sm">{role}</p>
          </div>
        </div>
      </div>

      {/* 📝 Content */}
      <div className={`${reverse ? "lg:col-start-1" : ""}`}>
        {/* Quote */}
        <div className="relative mb-6">
          <Quote className="absolute -top-3 left-0 text-primary/20 w-10 h-10" />
          <p className="text-muted-foreground text-lg leading-relaxed pl-10 italic">
            {message}
          </p>
        </div>

        {/* Divider */}
        <div className="h-[2px] w-20 bg-primary mb-6 rounded-full" />

        {/* Points */}
        <div className="grid sm:grid-cols-2 gap-3">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-sm text-foreground hover:translate-x-1 transition"
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LeadershipSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-background">
      <div className="section-container">

        {/* Heading */}
        <AnimatedSection>
          <SectionHeading
            badge="Leadership"
            title="Message from Our Leaders"
            subtitle="Guiding students with vision, integrity, and a commitment to excellence."
          />
        </AnimatedSection>

        <div className="space-y-20 mt-20 max-w-6xl mx-auto">

          {/* 🎯 Director (Image Left) */}
          <AnimatedSection direction="left">
            <LeaderCard
              name="Rahul Ranjan"
              role="Director"
              image={principle}
              message="At Sharda Global Residential School, we prioritize holistic child development, focusing on academic excellence, emotional intelligence, and social growth."
              points={[
                "Experiential learning approach",
                "Personalized attention for every student",
                "Extracurricular & co-curricular focus",
                "Regular parent-teacher interaction",
                "Strong emphasis on values & ethics",
                "Curiosity & creativity driven curriculum",
              ]}
            />
          </AnimatedSection>

          {/* 🎯 Principal (Image Right) */}
          <AnimatedSection direction="right">
            <LeaderCard
              name="Satyajeet Singh"
              role="Principal"
              image={dir}
              reverse
              message="At Sharda Global Residential School, we're committed to creating a best learning environment that fosters academic excellence, creativity, and personal growth."
              points={[
                "Encouraging curiosity & exploration",
                "Fostering a love for lifelong learning",
                "Critical thinking & problem-solving skills",
                "Emotional intelligence & empathy",
                "Support for individuality & diversity",
                
              ]}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}