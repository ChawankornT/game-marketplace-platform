"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { NavItem } from "@/types/navbar";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "News", href: "/news" },
    { label: "Top-up", href: "/topup" },
    { label: "Support", href: "/support" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 dark:bg-black/40 dark:border-neutral-800 "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          GameMarket
        </Link>

        {/* Menu (Desktop) */}
        <Navbar navItems={navItems} />

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="md:hidden"
          onClick={() => setOpenMenu(true)}
        >
          <Menu size={28} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        navItems={navItems}
      />
    </motion.header>
  );
}
