"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { loginWithGoogle, logout } from "@/actions/auth";

export default function MobileMenu({ open, onClose, navItems }) {
  const { user } = useAuthStore();

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-white dark:bg-neutral-900 p-4 shadow-xl transform transition-transform
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={onClose} className="mb-4">
          <X size={28} />
        </button>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
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
                <img src={user.photoURL!} className="w-12 h-12 rounded-full" />
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
      </div>
    </div>
  );
}
