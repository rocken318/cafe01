"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const pillars = [
  {
    number: "01",
    title: "Single-Origin Roast",
    body: "私たちのコーヒーは、エチオピア・イエメン・コロンビアの厳選された農園から直輸入。自家焙煎により、豆の持つ本来の複雑なフレーバーを最大限に引き出します。",
    en: "Sourced. Roasted. Served with care.",
  },
  {
    number: "02",
    title: "Organic & Local",
    body: "季節の食材にこだわった焼き菓子は、地域の有機農家と連携して生まれます。余分なものを加えず、自然の甘さと質感を大切に。",
    en: "From the earth, to your table.",
  },
  {
    number: "03",
    title: "Space as Design",
    body: "空間は、沈黙の中に言葉があるように設計されています。自然光と無垢材、ミニマルな家具が生み出す静寂は、日常からの逸脱を約束します。",
    en: "Architecture of stillness.",
  },
];

export default function Concept() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="section-padding bg-[#F8F4EE] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2E2A26 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: easing }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C9A97A]" />
            <span
              className="text-[#C9A97A] text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400 }}
            >
              Our Philosophy
            </span>
          </div>
          <h2
            className="text-[#2E2A26] leading-[1.1]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            }}
          >
            Three principles<br />
            <em style={{ fontStyle: "italic", color: "#9A9087" }}>that define us.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 items-start">
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: easing }}
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85&fit=crop"
                  alt="Coffee being brewed"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 md:-right-10 w-44 md:w-52 bg-[#2E2A26] p-6 hidden sm:block">
                <p
                  className="text-[#C9A97A] text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
                >
                  2019
                </p>
                <p
                  className="text-[#9A9087] text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                >
                  Est. in Tokyo
                </p>
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l border-t border-[#C9A97A]/40" />
            </div>
          </motion.div>

          <div className="lg:col-span-3 lg:pl-20 xl:pl-28 space-y-0">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: easing }}
              >
                <div className="group py-8 border-b border-[#2E2A26]/10 last:border-0">
                  <div className="flex items-start gap-6 md:gap-8">
                    <span
                      className="text-[#C9A97A]/40 text-xs tracking-[0.3em] mt-1 flex-shrink-0 group-hover:text-[#C9A97A] transition-colors duration-400"
                      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
                    >
                      {pillar.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-[#2E2A26] mb-3 group-hover:text-[#C9A97A] transition-colors duration-400"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontWeight: 400,
                          fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className="text-[#6B6259] text-sm leading-loose mb-3"
                        style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}
                      >
                        {pillar.body}
                      </p>
                      <span
                        className="text-[#C9A97A]/60 text-[10px] tracking-[0.3em] uppercase"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}
                      >
                        {pillar.en}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="pt-12 pl-8 md:pl-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: easing }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=85&fit=crop"
                  alt="Café interior atmosphere"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
