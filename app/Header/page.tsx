"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black text-yellow-400 shadow-md sticky top-0 z-50"
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-extrabold tracking-wide">Zippinderpal Singh</h1>

        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><Link href="#about" className="hover:text-yellow-200 transition">About</Link></li>
          <li><Link href="#services" className="hover:text-yellow-200 transition">Services</Link></li>
          <li><Link href="#testimonials" className="hover:text-yellow-200 transition">Testimonials</Link></li>
          <li><Link href="#clients" className="hover:text-yellow-200 transition">Clients</Link></li>
          <li><Link href="#contact" className="hover:text-yellow-200 transition">Contact</Link></li>
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-yellow-400 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black text-yellow-400 px-6 py-4 space-y-4 text-center text-lg font-medium overflow-hidden"
          >
            {["about", "services", "testimonials", "clients", "contact"].map((item) => (
              <li key={item}>
                <Link href={`#${item}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;