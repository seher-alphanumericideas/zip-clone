"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Business Strategies",
    description:
      "Crafting tailored business plans to maximize ROI and structure your growth path effectively.",
    image: "/bs.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "End-to-end digital campaigns—including PPC, SEO, and social media—to elevate your online presence.",
    image: "/dm.jpg",
  },
  {
    title: "Performance Optimization",
    description:
      "Ongoing analytics, A/B testing, and performance tweaking to continually improve results.",
    image: "/po.png",
  },
];

const Services = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const getDesc = (t: string) => services.find((s) => s.title === t)?.description;

  return (
    <section
      id="services"
      className="py-24 bg-black text-yellow-400 min-h-screen"
      style={{ fontFamily: "Trebuchet MS, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          className="text-5xl font-extrabold text-center mb-16 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(svc.title)}
              className={`border-2 border-yellow-400 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
                selected === svc.title
                  ? "bg-yellow-100 text-black scale-105"
                  : "bg-black hover:bg-yellow-400 hover:text-black"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={svc.image}
                alt={svc.title}
                className="w-48 h-36 object-cover rounded-xl mb-4"
              />
              <span className="text-2xl font-semibold mb-2">{svc.title}</span>
              <p className="text-sm mb-4">{svc.description}</p>
              <Link href="/contact">
                <button className="mt-auto bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300 transition">
                  Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {selected && (
          <motion.div
            className="mt-12 text-center max-w-3xl mx-auto text-yellow-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-2xl font-bold mb-4">{selected}</h4>
            <p className="text-lg leading-relaxed px-4">{getDesc(selected)}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;