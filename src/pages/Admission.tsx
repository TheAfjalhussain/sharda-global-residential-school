import { Layout } from "@/components/layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/home";
import { motion } from "framer-motion";
import { FileText, Upload, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
const steps = [
  { icon: FileText, title: "Fill Form", desc: "Complete the online admission form." },
  { icon: Upload, title: "Submit Documents", desc: "Upload necessary documents." },
  { icon: Users, title: "Interaction", desc: "Attend an interaction session." },
  { icon: CheckCircle, title: "Confirmation", desc: "Receive admission confirmation." },
];
const documents = ["Birth Certificate","Previous Year Marksheet","Transfer Certificate (TC)","Passport Size Photos (4)","Aadhaar Card (Child & Parent)","Medical Fitness Certificate"];
const eligibility = [
  { group: "Nursery", age: "3+ years" },{ group: "LKG", age: "4+ years" },{ group: "UKG", age: "5+ years" },
  { group: "Class I", age: "6+ years" },{ group: "Class II–VIII", age: "Age appropriate" },{ group: "Class IX–X", age: "As per board norms" },
];
export default function Admission() {
  const [formData, setFormData] = useState({ parentName: "", phone: "", email: "", childName: "", childAge: "", classApplying: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Thank you! Your admission enquiry has been submitted."); setFormData({ parentName: "", phone: "", email: "", childName: "", childAge: "", classApplying: "", message: "" }); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })); };
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Admissions 2026-27</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Admissions Open</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Join the Sharda Global family. Limited seats for Nursery to Class X.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="section-container">
          <AnimatedSection><SectionHeading badge="Process" title="Admission in 4 Simple Steps" /></AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="card-premium text-center h-full relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">{i+1}</div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5"><step.icon className="h-7 w-7 text-primary" /></div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection direction="left">
              <div className="card-premium h-full">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Age Groups & Eligibility</h3>
                <div className="space-y-3">{eligibility.map((e, i) => (<div key={i} className="flex justify-between items-center p-3 rounded-lg bg-muted"><span className="font-medium text-foreground text-sm">{e.group}</span><span className="text-sm text-primary font-semibold">{e.age}</span></div>))}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="card-premium h-full">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Documents Required</h3>
                <ul className="space-y-3">{documents.map((doc, i) => (<li key={i} className="flex items-center gap-3 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />{doc}</li>))}</ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="section-container max-w-2xl mx-auto">
          <AnimatedSection><SectionHeading badge="Apply" title="Online Admission Enquiry" subtitle="Fill the form and our team will contact you." /></AnimatedSection>
          <form onSubmit={handleSubmit} className="card-premium mt-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Parent Name *" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              <input name="childName" value={formData.childName} onChange={handleChange} placeholder="Child's Name *" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              <input name="childAge" value={formData.childAge} onChange={handleChange} placeholder="Child's Age" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
              <select name="classApplying" value={formData.classApplying} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none text-muted-foreground">
                <option value="">Class Applying For</option><option>Nursery</option><option>LKG</option><option>UKG</option><option>Class I</option><option>Class II</option><option>Class III</option><option>Class IV</option><option>Class V</option><option>Class VI</option><option>Class VII</option><option>Class VIII</option><option>Class IX</option><option>Class X</option><option>Class XI</option><option>Class XII</option>
              </select>
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any message..." rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none resize-none" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base">Submit Enquiry <ArrowRight className="inline ml-2 h-5 w-5" /></motion.button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
