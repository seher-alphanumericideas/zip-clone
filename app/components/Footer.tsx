"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

// Social Links
const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/zippinder",
    icon: <FaInstagram size={24} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/zippinder",
    icon: <FaTwitter size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zippinder",
    icon: <FaLinkedin size={24} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/zippinder",
    icon: <FaFacebook size={24} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@zippinder",
    icon: <FaYoutube size={24} />,
  },
];

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-yellow-400 text-black px-8 pt-14 pb-6"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
      {/* Profile Section */}
      <div className="flex flex-col items-start">
        <Image
          src="/zip.jpg" // Update with your actual image path
          alt="Zippinderpal Singh"
          width={80}
          height={80}
          className="rounded mb-3 bg-white"
        />
        <h2 className="font-bold text-md mb-3">Zippinderpal Singh</h2>
        <ul className="space-y-1">
          {["Home", "About", "Gallery", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:underline hover:text-gray-800 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* About Section */}
      <div>
        <h3 className="font-semibold mb-3 text-md">About Me</h3>
        <p className="leading-6 text-sm">
          Corporate Trainer for Digital Marketing |
          Google Partners Academy Trainer | Digital Marketer |
          Performance Marketer | Serial Entrepreneur
        </p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="font-semibold mb-3 text-md">Get In Touch With Me!</h3>
        <div className="flex flex-wrap gap-4 mt-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-800 transition"
            >
              {social.icon}
              <span className="text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="font-semibold mb-3 text-md">Subscribe</h3>
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-2 rounded-full w-full outline-none mb-2"
        />
        <button className="bg-black text-yellow-400 font-semibold px-4 py-2 w-full rounded-full hover:bg-gray-800 transition">
          Subscribe
        </button>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 border-t border-black pt-4 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
      <p>
        &copy; {new Date().getFullYear()} Zippinder.com - All Rights Reserved | Developed by{" "}
        <span className="font-bold hover:underline hover:text-gray-800">
          Alphanumeric Ideas
        </span>
      </p>
      <a
        href="#"
        className="flex items-center gap-1 text-sm hover:text-gray-800 transition"
      >
        <FaArrowUp /> Back to Top
      </a>
    </div>
  </motion.footer>
);

export default Footer;