"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Future of Digital Marketing",
    excerpt:
      "Explore how AI, automation, and personalization are shaping the future of digital campaigns.",
    slug: "/", // Redirect to home
    date: "June 5, 2025",
  },
  {
    title: "Top 5 PPC Strategies in 2025",
    excerpt:
      "Learn the most effective Pay-Per-Click techniques to boost your ROI in today’s market.",
    slug: "/",
    date: "May 28, 2025",
  },
  {
    title: "SEO vs PPC: What Should You Choose?",
    excerpt:
      "Discover the pros and cons of SEO and PPC and when to use which for your business goals.",
    slug: "/",
    date: "May 15, 2025",
  },
  {
    title: "Mastering Content Marketing",
    excerpt:
      "How to build trust, engage your audience, and turn readers into loyal customers through strategic content.",
    slug: "/",
    date: "April 30, 2025",
  },
  {
    title: "How Branding Impacts Sales",
    excerpt:
      "From logo to tone, uncover how your brand identity directly influences purchasing behavior.",
    slug: "/",
    date: "April 10, 2025",
  },
  {
    title: "The Rise of Voice Search in 2025",
    excerpt:
      "As smart assistants grow, discover how to optimize your content for voice-first queries.",
    slug: "/",
    date: "March 22, 2025",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogPage() {
  return (
    <main
      className="bg-black text-yellow-400 min-h-screen px-6 py-20"
      style={{ fontFamily: "Trebuchet MS, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Blog
        </motion.h1>

        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-zinc-900 rounded-xl p-6 border border-yellow-600 shadow-lg hover:shadow-yellow-400/30 duration-300"
            >
              <h2 className="text-2xl font-bold mb-2 text-yellow-300">
                {post.title}
              </h2>
              <p className="text-yellow-200 text-sm mb-4 italic">{post.date}</p>
              <p className="text-yellow-100 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={post.slug}
                className="text-yellow-400 underline underline-offset-4 hover:text-yellow-300 transition-colors"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}