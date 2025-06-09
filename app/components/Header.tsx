"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-yellow-400 flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold" style={{ fontFamily: "cursive" }}>
  The Zippinder Way
</h1>
      <nav className="space-x-6">
        {["home", "about", "clients", "contact", "hero", "testimonials", "services"].map((route) => (
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
