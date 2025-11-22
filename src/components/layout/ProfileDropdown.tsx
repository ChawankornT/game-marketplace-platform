"use client";

import { loginWithGoogle, logout } from "@/actions/auth";
import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";

export default function ProfileDropdown() {
  const user = useAuthStore((s) => s.user);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-20 h-10">
      {!user ? (
        <button
          onClick={() => loginWithGoogle()}
          className="h-full w-full bg-blue-600 text-white rounded hover:cursor-pointer"
        >
          Login
        </button>
      ) : (
        <div className="relative">
          <div className="text-center">
            <button
              onClick={() => setOpen(!open)}
              className="hover:cursor-pointer"
            >
              <img
                src={user.photoURL!}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </button>
          </div>

          {open && (
            <div className="flex flex-col">
              <div className="absolute right-0 mt-2 bg-white p-3 rounded-lg shadow-lg border">
                <p className="font-medium">{user.displayName}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
                <button
                  onClick={() => {
                    setOpen(false);
                    logout();
                  }}
                  className="btn mt-2 w-full text-left bg-red-500 text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
