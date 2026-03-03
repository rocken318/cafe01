"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];

const menuItems = [
  {
    category: "Signature Coffee",
    name: "Étoile Blend",
    nameJa: "エトワール ブレンド",
    description: "Washed Ethiopian Yirgacheffe × Colombian Huila. Bergamot, dark honey, and a whisper of jasmine.",
    price: "¥980",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=85&fit=crop",
    tag: "House Signature",
  },
  {
    category: "Milk-Based",
    name: "Oat Flat White",
    nameJa: "オーツ フラット ホワイト",
    description: "Our double-ristretto espresso, silked with house-made oat milk. Velvety, balanced, and endlessly drinkable.",
    price: "¥820",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=85&fit=crop",
    tag: "Plant-Based",
  },
  {
    category: "Patisserie",
    name: "Canelé de Bordeaux",
    nameJa: "カヌレ ド ボルドー",
    description: "Classic French pastry with a caramelized crust and custardy center. Vanilla from Madagascar, rum-kissed.",
    price: "¥480",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=85&fit=crop",
    tag: "Daily Bake",
  },
  {
    category: "Seasonal",
    name: "Hojicha Tart",
    nameJa: "ほうじ茶タルト",
    description: "Roasted green tea custard on a buttery almond shell. Topped with seasonal fruit from Yamanashi.",
    price: "¥650",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=85&fit=crop",
    tag: "Seasonal",
  },
];

export default function Menu() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" ref={ref} className="section-padding bg-[#2E2A26] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #C9A97A 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A97A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: easing }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#C9A97A]" />
              <span className="text-[#C9A97A] text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400 }}>
                Our Selection
              </span>
            </div>
            <h2 className="text-[#FAF8F3] leading-[1.1]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
              Crafted with<br />
              <em style={{ fontStyle: "italic", color: "#C9A97A" }}>intention.</em>
            </h2>
          </div>
          <p className="text-[#9A9087] text-sm leading-loose max-w-xs"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>
            Every item on our menu reflects a deliberate choice — from the farm, to the roaster, to your cup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#9A9087]/10">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              className="group relative bg-[#2E2A26] overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: easing, delay: 0.1 + i * 0.1 }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img src={item.image} alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1C1713]/20 group-hover:bg-[#1C1713]/10 transition-colors duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#C9A97A]/90 text-[#1C1713] text-[9px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 500 }}>
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6 border-t border-[#9A9087]/10">
                <span className="text-[#C9A97A]/60 text-[9px] tracking-[0.35em] uppercase mb-3"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  {item.category}
                </span>
                <h3 className="text-[#FAF8F3] mb-0.5 group-hover:text-[#C9A97A] transition-colors duration-400"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "1.3rem" }}>
                  {item.name}
                </h3>
                <span className="text-[#9A9087] text-xs mb-4"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>
                  {item.nameJa}
                </span>
                <p className="text-[#6B6259] text-xs leading-loose flex-1"
                  style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 300 }}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#9A9087]/10">
                  <span className="text-[#C9A97A]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "1.2rem" }}>
                    {item.price}
                  </span>
                  <span className="text-[#9A9087] text-[9px] tracking-[0.25em] uppercase group-hover:text-[#C9A97A] transition-colors duration-400"
                    style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    Order →
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 border border-[#C9A97A]/0 group-hover:border-[#C9A97A]/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-14"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}>
          <a href="#" className="inline-flex items-center gap-4 text-[#9A9087] text-xs tracking-[0.3em] uppercase hover:text-[#C9A97A] transition-colors duration-400 group"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
            View Full Menu
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A97A]/30 to-transparent" />
    </section>
  );
}
