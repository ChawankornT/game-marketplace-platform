"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { loginWithGoogle, logout } from "@/actions/auth";
import { NavItem } from "@/types/navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({
  open,
  onClose,
  navItems,
}: {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}) {
  const { user } = useAuthStore();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className={`fixed right-0 top-0 h-fit w-64 bg-white dark:bg-neutral-900 p-4`}
          >
            <button onClick={onClose} className="mb-4">
              <X size={28} />
            </button>

            <nav className="flex flex-col gap-4">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-lg"
                >
                  {item.label}
                </Link>
              ))}

              {/* Auth */}
              {!user ? (
                <button
                  onClick={() => loginWithGoogle()}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Login
                </button>
              ) : (
                <>
                  <div className="mt-3">
                    <img
                      src={user.photoURL!}
                      className="w-12 h-12 rounded-full"
                    />
                    <p className="font-medium">{user.displayName}</p>
                  </div>

                  <button
                    onClick={() => logout()}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
