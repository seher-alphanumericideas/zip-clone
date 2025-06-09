"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add backend submission logic
  };

  return (
    <section id="contact" className="bg-black text-yellow-400 py-24 px-6">
      <div className="max-w-5xl mx-auto" style={{ fontFamily: "Trebuchet MS, sans-serif" }}>
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-6 text-center tracking-wide drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Contact Me
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-yellow-300 max-w-2xl mx-auto text-center mb-14 leading-relaxed"
        >
          Have a question, a project in mind, or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Grid Row: Name, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-yellow-100 text-black rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-yellow-100 text-black rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 bg-yellow-100 text-black rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {/* Message Area */}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 bg-yellow-100 text-black rounded-lg shadow-inner h-40 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            whileFocus={{ scale: 1.02 }}
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;