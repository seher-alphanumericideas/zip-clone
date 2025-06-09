"use client";

import { motion } from "framer-motion";

const testimonialVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const testimonials = [
  {
    text: "Great and professional service by Zippinder.",
    author: "Amit Dubey",
  },
  {
    text: "He's helped us progress with our Google AdWords in leaps and bounds.",
    author: "Cory Bray",
  },
  {
    text: "Zippinder completely revamped our digital marketing approach – excellent work!",
    author: "Priya Mehta",
  },
  {
    text: "Their strategies brought measurable ROI in less than 2 months. Highly recommend!",
    author: "Rahul Kapoor",
  },
  {
    text: "Clear communication, fantastic results, and a very supportive team!",
    author: "Elena Fernandez",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 bg-black w-full px-4"
    style={{ fontFamily: "Trebuchet MS, sans-serif" }}
  >
    <h3
      className="text-4xl font-extrabold mb-10 text-yellow-400 text-center"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Testimonials
    </h3>
    <div className="space-y-8 max-w-4xl mx-auto">
      {testimonials.map((t, index) => (
        <motion.blockquote
          key={index}
          className="bg-gray-900 p-8 rounded-lg shadow-lg"
          variants={testimonialVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(234,179,8,0.5)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-yellow-300 text-lg italic">
            "{t.text}"
          </p>
          <footer className="mt-4 text-yellow-400 font-semibold text-right">
            – {t.author}
          </footer>
        </motion.blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;