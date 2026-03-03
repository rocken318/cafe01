"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=85&fit=crop", alt: "Café interior — morning light", span: "row-span-2", caption: "Morning Light" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=85&fit=crop", alt: "Espresso pour", span: "", caption: "The Pour" },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=85&fit=crop", alt: "Latte art", span: "", caption: "Latte Art" },
  { src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=85&fit=crop", alt: "Coffee beans", span: "col-span-2", caption: "Origin" },
  { src: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=600&q=85&fit=crop", alt: "Café exterior at dusk", span: "", caption: "Dusk" },
  { src: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=85&fit=crop", alt: "Pastries on display", span: "", caption: "La Pâtisserie" },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" ref={ref} className="section-padding bg-[#EDE8DF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div className="mb-14 md:mb-18"
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C9A97A]" />
            <span className="text-[#C9A97A] text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400 }}>Gallery</span>
          </div>
          <h2 className="text-[#2E2A26] leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
            A space made for<br />
            <em style={{ fontStyle: "italic", color: "#9A9087" }}>slow mornings.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className={`group relative overflow-hidden ${img.span} ${i === 0 ? "aspect-[2/3]" : i === 3 ? "aspect-[2/1]" : "aspect-square"}`}
              initial={{ opacity: 0, scale: 0.96 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.85, ease: easing, delay: i * 0.08 }}
            >
              <img src={img.src} alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1C1713]/0 group-hover:bg-[#1C1713]/40 transition-all duration-500 flex items-end p-5 md:p-6">
                <span className="text-[#FAF8F3] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontStyle: "italic", fontSize: "1.1rem" }}>
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-14"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#9A9087] text-xs tracking-[0.3em] uppercase hover:text-[#C9A97A] transition-colors duration-400 group"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:scale-110">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow us on Instagram @cafe.etoile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
