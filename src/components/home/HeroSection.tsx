import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  GraduationCap,
  Award,
  Shield,
  Users,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/art-activity.jpg"

const badges = [
  { icon: GraduationCap, label: "Nursery to X" },
  { icon: Award, label: "Expert Faculty" },
  { icon: Shield, label: "Safe Campus" },
];

const stats = [
  { icon: Users, value: "1200+", label: "Students" },
  { icon: BookOpen, value: "50+", label: "Qualified Teachers" },
  { icon: Award, value: "15+", label: "Years Excellence" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ✅ Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero} // 👉 replace with your real image
          alt="School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl">

          {/* 🔔 Admission Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 bg-white/10 backdrop-blur-md rounded-full mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold text-white">
              Admissions Open 2026-27
            </span>
          </motion.div>

          {/* 🎯 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Shaping Future Leaders with{" "}
            <span className="text-primary">Quality Education</span>
          </motion.h1>

          {/* 📝 Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/85 mb-8 max-w-xl"
          >
            A modern English medium co-educational school in Nawada offering
            holistic education from Nursery to Class X with world-class facilities.
          </motion.p>

          {/* 🚀 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link to="/admission">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-xl hover:scale-105 transition-all group">
                Apply Now
                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-8 py-4 border border-white/40 text-white rounded-xl hover:bg-white/10 backdrop-blur transition-all">
                <Calendar className="inline mr-2 h-5 w-5" />
                Book a Visit
              </button>
            </Link>
          </motion.div>

          {/* 🏆 Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {badges.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-sm text-white">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🌊 Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}