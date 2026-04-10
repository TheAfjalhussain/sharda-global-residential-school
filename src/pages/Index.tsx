import { Layout } from "@/components/layout";
import {
  HeroSection,
  HighlightsSection,
  WhyChooseUsSection,
  ProgramsSection,
  LeadershipSection,
  TestimonialsSection,
  CTASection,
  Facilities,
} from "@/components/home";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <LeadershipSection />
      <ProgramsSection />
      <Facilities />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </Layout>
  );
}
