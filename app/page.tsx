"use client";

import Link from "next/link";

export default function Home() {
  const routes = [
    "hero",
    "about",
    "services",
    "testimonials",
    "clients",
    "contact",
    "footer",
  ];

  return (
    <main className="bg-black text-yellow-400 min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-10">Welcome to Our Website</h1>
      <nav className="space-y-4">
        {routes.map((route) => (
          <Link
            key={route}
            href={`/${route}`}
            className="block text-xl font-semibold border border-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            {route.charAt(0).toUpperCase() + route.slice(1)}
          </Link>
        ))}
      </nav>
    </main>
  );
}

