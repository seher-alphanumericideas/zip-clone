"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-yellow-400 text-black px-6 pt-10 pb-6"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-left">
      <div>
        <h3 className="font-semibold mb-2 text-lg">About</h3>
        <p className="leading-relaxed">
          Zippinderpal Singh is a passionate marketer and entrepreneur helping
          businesses grow through digital strategy, performance marketing, and
          training programs.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
        <ul className="space-y-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-lg">Services</h3>
        <ul className="space-y-1">
          <li>PPC Management</li>
          <li>SEO Optimization</li>
          <li>Social Media Ads</li>
          <li>Website Development</li>
          <li>Corporate Training</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2 text-lg">Contact</h3>
        <p>Email: info@zippinder.com</p>
        <p>Phone: +91 98765 43210</p>
        <div className="flex space-x-4 mt-3">
          <a href="https://www.instagram.com/zippinder" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/zippinder" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>

    <div className="border-t border-black mt-10 pt-4 text-center text-xs">
      &copy; {new Date().getFullYear()} Zippinderpal Singh. All rights reserved.
    </div>
  </motion.footer>
);

export default Footer;