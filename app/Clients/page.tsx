"use client";

import { motion } from "framer-motion";

const clientList = ["Client 1", "Client 2", "Client 3", "Client 4"];

const Clients = () => (
  <section
    id="clients"
    className="bg-black text-yellow-400 py-24 px-6 w-full min-h-screen"
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-12 tracking-wider drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
      >
        Our Clients
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {clientList.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-yellow-900 text-yellow-100 py-6 px-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            {client}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;