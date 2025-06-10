"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { label: "PPC", value: 100 },
  { label: "Strategy", value: 90 },
  { label: "Ideas", value: 85 },
  { label: "Growth", value: 80 },
  { label: "Corporate Training", value: 80 },
];

const ventures = [
  { label: "ECO India", year: 2013 },
  { label: "YoYo Veg", year: 2015 },
  { label: "Virasat Store", year: 2017 },
  { label: "BeeZee Ventures", year: 2018 },
  { label: "Alphanumeric Ideas", year: 2019 },
];

const Circle = ({ value, label }: { value: number; label: string }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = () => {
            start += 1;
            if (start <= value) {
              setProgress(start);
              requestAnimationFrame(step);
            }
          };
          step();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [value]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-3">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#2d2d2d"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#facc15"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-yellow-400">
          {progress}%
        </span>
      </div>
      <p className="text-yellow-400 font-medium" style={{ fontFamily: "Trebuchet MS, sans-serif" }}>
        {label}
      </p>
    </div>
  );
};

const Hero = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        className="bg-black text-yellow-400 py-28 text-center flex flex-col items-center justify-center px-6"
        style={{ fontFamily: "Trebuchet MS, sans-serif" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Digital Marketing Expert
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl"
        >
          Helping businesses grow through{" "}
          <span className="underline decoration-yellow-500">effective online strategies</span>.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="bg-black text-yellow-400" style={{ fontFamily: "Trebuchet MS, sans-serif" }}>
        <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">SKILLS</h3>
        <div className="flex justify-center flex-wrap gap-10 px-6">
          {skills.map((skill, i) => (
            <Circle key={i} value={skill.value} label={skill.label} />
          ))}
        </div>
      </section>

      {/* Ventures Timeline Graph */}
      <section className="bg-black text-yellow-400 py-20 px-6" style={{ fontFamily: "Verdana, sans-serif" }}>
        <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">Zippinder's Ventures Timeline</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {ventures.map((venture, i) => {
            const duration = currentYear - venture.year;
            const widthPercent = Math.min(duration / (currentYear - 2013) * 100, 100);
            return (
              <div key={i} className="flex items-center space-x-4">
                <span className="w-36 text-left font-semibold">{venture.label}</span>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${widthPercent}%` }}
                    transition={{ delay: i * 0.2, duration: 1 }}
                    className="h-full bg-yellow-400"
                  />
                </div>
                <span className="w-12 text-right">{duration} yrs</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;