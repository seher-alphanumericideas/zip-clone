"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "PPC Management",
    description:
      "We help you run efficient pay-per-click campaigns to boost your visibility and ROI using data-driven strategies.",
  },
  {
    title: "SEO Optimization",
    description:
      "Optimize your website to rank higher in search engines and drive organic traffic through modern SEO techniques.",
  },
  {
    title: "Corporate Training",
    description:
      "Empower your team with customized training programs designed to enhance skills and performance across departments.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getDescription = (title: string) =>
    services.find((s) => s.title === title)?.description || "";

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
              onClick={() => setSelectedService(service.title)}
              className={`p-6 rounded-2xl text-center cursor-pointer border-2 transition-all duration-300 ${
                selectedService === service.title
                  ? "border-yellow-400 bg-yellow-100 text-black"
                  : "border-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-xl font-semibold">{service.title}</span>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <motion.div
            className="mt-10 max-w-3xl mx-auto text-center text-yellow-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-2xl font-bold mb-4">
              {selectedService}
            </h4>
            <p className="text-lg font-medium px-4">
              {getDescription(selectedService)}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
