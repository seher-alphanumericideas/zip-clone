"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const clientList = [
  { name: "Startup Jalsa", image: "/c1.png" },
  { name: "Sillver Fern", image: "/c2.png" },
  { name: "The Whole Truth", image: "/c3.png" },
  { name: "Keto with Kelly", image: "/c4.png" },
];

const Clients = () => (
  <section
    id="clients"
    className="bg-gradient-to-b from-black via-zinc-900 to-black text-yellow-400 py-28 px-6 w-full min-h-screen"
  >
    <div className="max-w-7xl mx-auto text-center">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-20 tracking-wide drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Trusted By Brands
      </motion.h3>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-24">
        {clientList.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-black bg-opacity-40 backdrop-blur-lg border border-yellow-500/20 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col items-center"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={140}
              height={140}
              className="mb-4 object-contain rounded-xl shadow-md"
            />
            <span className="text-lg font-semibold">{client.name}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Heading */}
      <motion.h4
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mb-6 text-yellow-300"
        style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
      >
        Want to become a client?
      </motion.h4>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contact"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 text-lg rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Clients;