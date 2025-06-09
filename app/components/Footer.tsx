"use client";

import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-black text-yellow-400 py-6 text-center"
  >
    <p className="text-sm tracking-wide">
      &copy; {new Date().getFullYear()} Zippinderpal Singh. All rights reserved.
    </p>
  </motion.footer>
);

export default Footer;