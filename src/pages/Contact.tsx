import { Layout } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
const contactInfo = [
  { icon: MapPin, title: "Address", detail: "NH-20, Akuana, Nawada, Bihar - 805110" },
  { icon: Phone, title: "Phone", detail: "+91 96085 27230", href: "tel:+919608527230" },
  { icon: Mail, title: "Email", detail: "info@shardaglobalschool.in", href: "mailto:info@shardaglobalschool.in" },
  { icon: Clock, title: "Office Hours", detail: "Mon – Sat, 9:00 AM – 4:00 PM" },
];
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", relation: "", phone: "", email: "", childAge: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Thank you! We will get back to you shortly."); setFormData({ name: "", relation: "", phone: "", email: "", childAge: "", message: "" }); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })); };
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Reach out for admissions, visits, or any queries.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
                  <select name="relation" value={formData.relation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none text-muted-foreground"><option value="">Relation</option><option>Parent</option><option>Guardian</option><option>Student</option><option>Other</option></select>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <input name="childAge" value={formData.childAge} onChange={handleChange} placeholder="Child's Age (optional)" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message..." rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary outline-none resize-none" />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base"><Send className="inline mr-2 h-5 w-5" />Send Message</motion.button>
              </form>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"><info.icon className="h-5 w-5 text-primary" /></div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{info.title}</p>
                      {info.href ? <a href={info.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{info.detail}</a> : <p className="text-muted-foreground text-sm">{info.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <div className="my-20 rounded-xl overflow-hidden border border-border h-96">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5!2d85.5!3d24.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzQ4LjAiTiA4NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="School Location" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
