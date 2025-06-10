"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/zippinder",
    icon: <FaInstagram size={40} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/zippinder",
    icon: <FaTwitter size={40} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zippinder",
    icon: <FaLinkedin size={40} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/zippinder",
    icon: <FaFacebook size={40} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@zippinder",
    icon: <FaYoutube size={40} />,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SocialPage() {
  return (
    <main
      className="bg-black text-yellow-400 min-h-screen px-6 py-24"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Social
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-yellow-200 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
        >
          Stay connected with Zippinder on all your favorite platforms. Get the latest insights, updates,
          and behind-the-scenes moments from the world of digital marketing. We’d love to connect!
        </motion.p>

        {/* Icons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-center items-center"
        >
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center text-yellow-300 hover:text-yellow-100 transition-colors"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            >
              <div className="mb-2">{social.icon}</div>
              <span className="text-sm font-medium">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}