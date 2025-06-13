"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-yellow-400 flex justify-between items-center px-6 py-4">
      <div className="w-70 relative h-24">
        <Image
          src="/zippinder-logo.png" // Ensure this path matches your public folder
          alt="The Zippinder Way Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <nav className="space-x-6">
        {["home", "about", "blog", "clients", "contact", "hero", "testimonials", "services", "social"].map((route) => (
          <Link
            key={route}
            href={`/${route === "home" ? "" : route}`}
            className="hover:text-white font-medium"
          >
            {route.charAt(0).toUpperCase() + route.slice(1).replace("-", " ")}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300"
        >
          Schedule A Meeting!
        </Link>
      </nav>
    </header>
  );
}