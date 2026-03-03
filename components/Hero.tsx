"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: easing }}
      >
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=85&fit=crop"
          alt="Café Étoile interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1713]/60 via-[#1C1713]/40 to-[#1C1713]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1713]/30 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A97A]/60 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 0.5, ease: easing }}
      />

      <motion.nav
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <span
          className="font-display text-[#FAF8F3] text-xl tracking-[0.2em] font-light"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          CAFÉ ÉTOILE
        </span>
        <div className="hidden md:flex items-center gap-10">
          {["Menu", "Concept", "Access"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#EDE8DF]/80 text-xs tracking-[0.25em] uppercase hover:text-[#C9A97A] transition-colors duration-300"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-24">
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        >
          <div className="h-px w-12 bg-[#C9A97A]/60" />
          <span
            className="text-[#C9A97A] text-[10px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400 }}
          >
            Est. 2019 — Tokyo, Japan
          </span>
          <div className="h-px w-12 bg-[#C9A97A]/60" />
        </motion.div>

        <motion.h1
          className="text-[#FAF8F3] leading-[1.05] mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "-0.01em",
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: easing }}
        >
          A moment of<br />
          <em className="text-gradient-sand" style={{ fontStyle: "italic" }}>serenity</em>
          <br />
          in every cup.
        </motion.h1>

        <motion.p
          className="text-[#EDE8DF]/70 text-sm md:text-base tracking-[0.08em] mb-14 max-w-sm mx-auto"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
        >
          Single-origin roasts. Organic pastries.<br />A sanctuary in the heart of the city.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.1, ease: easing }}
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#C9A97A] text-[#1C1713] text-xs tracking-[0.3em] uppercase overflow-hidden transition-colors duration-500"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 500 }}
          >
            <span className="relative z-10">View Menu</span>
            <span className="relative z-10 w-4 h-px bg-[#1C1713] group-hover:w-7 transition-all duration-300" />
            <span className="absolute inset-0 bg-[#DFC09A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </a>
          <a
            href="#access"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#EDE8DF]/40 text-[#EDE8DF]/80 text-xs tracking-[0.3em] uppercase hover:border-[#C9A97A]/60 hover:text-[#C9A97A] transition-all duration-400"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        <span
          className="text-[#EDE8DF]/40 text-[9px] tracking-[0.35em] uppercase"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A97A]/60 to-transparent animate-pulse" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A97A]/30 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, delay: 1.2, ease: easing }}
      />
    </section>
  );
}
