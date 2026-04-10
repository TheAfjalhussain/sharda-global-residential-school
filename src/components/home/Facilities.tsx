import React from 'react'
import { AnimatedSection } from '../ui/animated-section'
import { SectionHeading } from '../ui/section-heading'

const infrastructure = [
  "⁠State-of-the-art classrooms",
  "Well Equipped Science & Computer Labs",
  "⁠Library with a vast collection of books",
  "⁠Spacious playgrounds and sports facilities",
  "⁠Safe and secure campus",
  "Transportation across Nawada",
  "CCTV Monitored Campus",
  "Hygienic & Clean Campus and Drinking Water",
];

export function Facilities() {
  return (
    <div>
      <section className="py-20 bg-muted">
              <div className="section-container">
                <AnimatedSection><SectionHeading badge="Infrastructure" title="World-Class Facilities" /></AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
                  {infrastructure.map((item, i) => (
                    <AnimatedSection key={i} delay={i * 0.05}>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
    </div>
  )
}

