"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clientList = ["Client 1", "Client 2", "Client 3", "Client 4"];

const Clients = () => (
  <section
    id="clients"
    className="bg-black text-yellow-400 py-24 px-6 w-full min-h-screen"
  >
    <div className="max-w-6xl mx-auto text-center">
      {/* Section Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-12 tracking-wider drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Our Clients
      </motion.h3>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {clientList.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-yellow-900 text-yellow-100 py-6 px-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            style={{ fontFamily: "Verdana, sans-serif" }}
          >
            {client}
          </motion.div>
        ))}
      </div>

      {/* Subheading */}
      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-6 text-yellow-300"
        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
      >
        Want to become a client?
      </motion.h4>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors"
          style={{ fontFamily: "'Segoe UI', sans-serif" }}
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Clients;