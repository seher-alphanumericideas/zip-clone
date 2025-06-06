"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "PPC Management",
  "SEO Optimization",
  "Corporate Training",
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 bg-black text-yellow-400">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedService(service)}
              className={`p-6 rounded-2xl text-center cursor-pointer border-2 transition-all duration-300 ${
                selectedService === service
                  ? "border-yellow-400 bg-yellow-100 text-black"
                  : "border-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xl font-semibold">{service}</span>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <motion.p
            className="mt-8 text-xl text-center text-yellow-300 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Selected Service: <span className="underline">{selectedService}</span>
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Services;