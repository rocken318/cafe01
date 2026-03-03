"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const hours = [
  { day: "Monday — Friday", time: "8:00 — 19:00" },
  { day: "Saturday", time: "9:00 — 20:00" },
  { day: "Sunday", time: "10:00 — 18:00" },
];

export default function InfoFooter() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <section id="access" ref={ref} className="section-padding bg-[#1C1713] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A97A]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div className="mb-16"
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: easing }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#C9A97A]" />
              <span className="text-[#C9A97A] text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400 }}>Visit Us</span>
            </div>
            <h2 className="text-[#FAF8F3] leading-[1.1]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
              Find your<br />
              <em style={{ fontStyle: "italic", color: "#C9A97A" }}>quiet corner.</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div className="space-y-10"
              initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: easing, delay: 0.1 }}>
              <div>
                <div className="flex items-start gap-4">
                  <MapPin size={14} className="text-[#C9A97A] mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[#9A9087] text-[9px] tracking-[0.35em] uppercase mb-2"
                      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>Address</p>
                    <p className="text-[#EDE8DF] text-sm leading-loose"
                      style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>
                      2-15-8 Minami-Aoyama<br />
                      Minato-ku, Tokyo 107-0062<br />
                      <span className="text-[#9A9087] text-xs">東京都港区南青山2-15-8</span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <Clock size={14} className="text-[#C9A97A] mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <p className="text-[#9A9087] text-[9px] tracking-[0.35em] uppercase mb-4"
                      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>Opening Hours</p>
                    <div className="space-y-3">
                      {hours.map((h) => (
                        <div key={h.day} className="flex items-center justify-between border-b border-[#2E2A26] pb-3">
                          <span className="text-[#9A9087] text-xs"
                            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>{h.day}</span>
                          <span className="text-[#EDE8DF] text-xs"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={14} className="text-[#C9A97A] flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[#9A9087] text-[9px] tracking-[0.35em] uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>Reservations</p>
                  <a href="tel:+81-3-1234-5678" className="text-[#EDE8DF] text-sm hover:text-[#C9A97A] transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>+81-3-1234-5678</a>
                </div>
              </div>

              <div className="pt-4">
                <a href="tel:+81-3-1234-5678"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 border border-[#C9A97A]/50 text-[#C9A97A] text-xs tracking-[0.3em] uppercase overflow-hidden hover:text-[#1C1713] transition-colors duration-500"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400 }}>
                  <span className="relative z-10">Reserve a Table</span>
                  <span className="absolute inset-0 bg-[#C9A97A] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: easing, delay: 0.2 }}>
              <div className="relative w-full h-80 lg:h-full min-h-[320px] bg-[#2E2A26] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A97A" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <line x1="0" y1="45%" x2="100%" y2="45%" stroke="#C9A97A" strokeWidth="2" opacity="0.6" />
                    <line x1="0" y1="70%" x2="100%" y2="68%" stroke="#C9A97A" strokeWidth="1" opacity="0.4" />
                    <line x1="35%" y1="0" x2="38%" y2="100%" stroke="#C9A97A" strokeWidth="2" opacity="0.5" />
                    <line x1="65%" y1="0" x2="62%" y2="100%" stroke="#C9A97A" strokeWidth="1" opacity="0.4" />
                    <line x1="0" y1="25%" x2="100%" y2="22%" stroke="#C9A97A" strokeWidth="0.8" opacity="0.3" />
                  </svg>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#C9A97A] shadow-[0_0_20px_rgba(201,169,122,0.6)] animate-pulse" />
                  <div className="w-px h-6 bg-[#C9A97A]/60 mt-1" />
                  <div className="mt-3 bg-[#1C1713]/80 backdrop-blur-sm px-4 py-2 border border-[#C9A97A]/30">
                    <p className="text-[#C9A97A] text-xs text-center"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400 }}>Café Étoile</p>
                    <p className="text-[#9A9087] text-[9px] tracking-widest text-center uppercase mt-0.5"
                      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>Minami-Aoyama</p>
                  </div>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 px-4 py-2 bg-[#C9A97A]/10 border border-[#C9A97A]/30 text-[#C9A97A] text-[9px] tracking-[0.3em] uppercase hover:bg-[#C9A97A]/20 transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>Open in Maps →</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1C1713] border-t border-[#2E2A26] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[#EDE8DF] text-base tracking-[0.25em]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}>CAFÉ ÉTOILE</span>
            <div className="flex items-center gap-8">
              {["Menu", "Concept", "Gallery", "Access"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="text-[#6B6259] text-[10px] tracking-[0.25em] uppercase hover:text-[#C9A97A] transition-colors duration-300"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>{item}</a>
              ))}
            </div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-[#6B6259] hover:text-[#C9A97A] transition-colors duration-300" aria-label="Instagram">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
          </div>
          <div className="divider-sand my-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6259] text-[10px] tracking-[0.2em]"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>
              © 2025 Café Étoile. All rights reserved.
            </p>
            <p className="text-[#6B6259]/50 text-[10px] tracking-[0.15em] italic"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic" }}>
              &quot;A moment of serenity in every cup.&quot;
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
