"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass flex items-center gap-6 px-8 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium transition-colors duration-300 ${
            pathname === link.href
              ? "text-cyan-300"
              : "text-white hover:text-cyan-200"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  );
}
