import { Layout } from "@/components/layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CTASection } from "@/components/home";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/assets/images/comuter.png"
import image2 from "@/assets/images/class2.png"
import image3 from "@/assets/images/com-lab.png"
import image4 from "@/assets/images/drama.png"
import image5 from "@/assets/images/lab.png"
import image6 from "@/assets/images/microscope.png"
const categories = ["All", "Campus", "Academics", "Sports", "Events"];
const galleryItems = [
  { src: image1, alt: "School Building", category: "Campus" },
  { src: image2, alt: "Classroom", category: "Academics" },
  { src: image3, alt: "Library", category: "Campus" },
  { src: image4, alt: "Basketball", category: "Sports" },
  { src: image5, alt: "School Building", category: "Campus" },
  { src: image6, alt: "School Building", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600", alt: "Classroom", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", alt: "Library", category: "Campus" },
];
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = filter === "All" ? galleryItems : galleryItems.filter(i => i.category === filter);
  return (
    <Layout>
      <section className="py-20 bg-gradient-royal text-white">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">Gallery</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">A glimpse into life at Sharda Global Residential School.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div key={item.src} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square" onClick={() => setLightbox(i)}>
                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-end">
                  <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform"><span className="text-sm font-medium text-white">{item.alt}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/80 hover:text-white"><X className="h-8 w-8" /></button>
            <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} src={filtered[lightbox].src.replace("w=600", "w=1200")} alt={filtered[lightbox].alt} className="max-w-full max-h-[85vh] rounded-xl object-contain" onClick={e => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
