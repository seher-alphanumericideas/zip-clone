"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-yellow-400 py-4 px-6">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative h-20 w-52 mb-3">
          <Image
            src="/zippinder-logo.png"
            alt="The Zippinder Way Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center space-x-6 font-bold text-lg">
          {["Home", "About", "blog", "Clients", "Contact", "Hero", "Testimonials", "Services", "social"].map(
            (route) => (
              <Link
                key={route}
                href={`/${route === "home" ? "" : route}`}
                className="hover:text-white transition duration-200"
              >
                {route.charAt(0).toUpperCase() + route.slice(1).replace("-", " ")}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition duration-200"
          >
            Schedule A Meeting!
          </Link>
        </nav>
      </div>
    </header>
  );
}
