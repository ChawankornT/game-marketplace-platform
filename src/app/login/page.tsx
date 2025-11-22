"use client";

import { loginWithGoogle } from "@/actions/auth";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    router.push("/dashboard");
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col space-y-5 p-5 bg-white shadow-lg shadow-blue-500 rounded-lg">
        <h1 className="text-center">Login</h1>
        <button
          onClick={() => loginWithGoogle()}
          className="btn bg-blue-500 text-white"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
