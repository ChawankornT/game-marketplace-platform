"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "News", href: "/news" },
    { label: "Top-up", href: "/topup" },
    { label: "Support", href: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 dark:bg-black/40 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          GameMarket
        </Link>

        {/* Menu (Desktop) */}
        <Navbar navItems={navItems} />

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpenMenu(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        navItems={navItems}
      />
    </header>
  );
}
