"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const awards = [
  "Google Partners Academy Trainer",
  "Google Adwords Certified Individual",
  "Bing Ads Accredited Individual",
  "Ex-Google Student Ambassador - Google",
  "Online Marketing Lab Trainer - Google AdClass 2014",
  "Online Marketing Specialist - ECO India",
];

const experience = [
  "Founder & CEO - ECO India - 2013 - Present",
  "Founder & CEO - YoYo Veg - 2015 - 2017",
  "Founder & CEO - Virasat Store - 2017 - Present",
  "Co.Founder & CMO - BeeZee Ventures - 2018 - Present",
  "Advisor - Bang The Market - 2019 - Present",
  "Advisor - Legal Bhai - 2019 - Present",
  "Google Partners Academy Trainer - 2015 - Present",
  "Digital Marketing Director - Surya World College - 2012 - 15",
  "Google Student Ambassador - India - 2013 - 14",
  "Brand Ambassador - Truecaller - Oct 2014 - Dec 2014",
];

const listAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function AboutPage() {
  return (
    <section
      className="bg-black text-yellow-400 py-24 px-6"
      style={{ fontFamily: "Georgia, serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Image + Quote Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          <motion.img
            src="/zip.jpg"
            alt="Zippinderpal Singh Quote"
            className="w-[100px] md:w-[200px] max-w-full rounded shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="text-center md:text-left max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-3xl font-bold leading-snug text-yellow-400"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Knowledge Is Must But Experience Is The Power
            </p>
            <p className="mt-4 text-xl text-yellow-300 font-medium tracking-wide">
              #MindIt #TheZippinderWay
            </p>
          </motion.div>
        </section>

        {/* Header */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-6 tracking-wide drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]"
        >
          About Me
        </motion.h3>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-loose text-yellow-300 max-w-3xl mx-auto mb-16"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          I'm <span className="font-semibold text-yellow-400">Zippinderpal Singh</span>, a seasoned digital marketing
          professional with over a decade of experience in{" "}
          <span className="font-semibold">PPC</span>, <span className="font-semibold">SEO</span>, and{" "}
          <span className="font-semibold">corporate training</span>.
        </motion.p>

        {/* Awards */}
        <motion.div className="text-left mb-16">
          <motion.h4 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Awards & Certifications
          </motion.h4>
          <ul className="space-y-4">
            {awards.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listAnimation}
                className="flex items-center space-x-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <motion.div
                  className="rounded-full bg-yellow-400 text-black p-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <CheckCircle size={20} />
                </motion.div>
                <span className="text-yellow-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div className="text-left">
          <motion.h4 className="text-3xl font-bold mb-6 text-yellow-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Experience
          </motion.h4>
          <ul className="space-y-4">
            {experience.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listAnimation}
                className="flex items-center space-x-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <motion.div
                  className="rounded-full bg-yellow-400 text-black p-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.05 }}
                >
                  <CheckCircle size={20} />
                </motion.div>
                <span className="text-yellow-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}