"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-yellow-400 min-h-screen font-sans">
      {/* Hero */}
      <section
        className="text-center py-24 px-6"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <motion.h2
          className="text-6xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ZIPPINDERPAL SINGH
        </motion.h2>
        <motion.p
          className="text-2xl font-light opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Serial Entrepreneur & Digital Marketing Mentor
        </motion.p>
      </section>

      {/* Tagline */}
      <section className="py-12 px-6 text-center">
        <motion.p
          style={{ fontFamily: "Courier New, monospace" }}
          className="text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          "Corporate Trainer for Digital Marketing | Google Partners Academy Trainer | 
          Digital Marketer | Performance Marketer | Serial Entrepreneur"
        </motion.p>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-black">
        <motion.div
          className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {["PPC", "Strategy", "Ideas", "Growth", "Corporate Training"].map((skill, i) => (
            <motion.div
              key={i}
              className="px-6 py-4 border-2 border-yellow-400 rounded-full"
              style={{ fontFamily: "Lucida Handwriting, cursive" }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/contact">
            <div
              className="inline-flex items-center gap-4 bg-yellow-400 text-black font-medium px-8 py-4 rounded-full cursor-pointer hover:bg-yellow-300 transition"
              style={{ fontFamily: "Trebuchet MS, sans-serif" }}
            >
              Let’s Work Together On Your Next Project!
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-black">
        <motion.h3
          className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
          style={{ fontFamily: "Palatino Linotype, serif" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Testimonials
        </motion.h3>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { text: "Great and professional service by Zippinder.", author: "Amit Dubey" },
            { text: "He's helped us progress with our Google AdWords in leaps and bounds.", author: "Cory Bray" },
          ].map((t, idx) => (
            <motion.blockquote
              key={idx}
              className="bg-gray-900 p-8 rounded-lg border-l-4 border-yellow-400 italic"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.6 }}
            >
              <p className="text-yellow-300 mb-4">{t.text}</p>
              <footer className="text-yellow-400 font-semibold">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <Link href="/testimonials">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition" style={{ fontFamily: "Trebuchet MS, sans-serif" }}>
              See More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}