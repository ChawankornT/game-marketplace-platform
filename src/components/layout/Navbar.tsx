"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { NavbarProps, NavItem } from "@/types/navbar";
import { motion } from "framer-motion";

export default function Navbar({ navItems }: NavbarProps) {
  return (
    <div>
      {/* Menu (Desktop) */}
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item: NavItem) => (
          <motion.span
            key={item.href}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={item.href} className="hover:text-blue-600">
              {item.label}
            </Link>
          </motion.span>
        ))}

        {/* Search */}
        <input
          placeholder="Search games..."
          className="px-3 py-1 border rounded-md bg-white/70 dark:bg-neutral-800"
        />

        {/* Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            0
          </span>
        </div>

        {/* Profile */}
        <ProfileDropdown />
      </nav>
    </div>
  );
}
