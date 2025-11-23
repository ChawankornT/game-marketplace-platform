"use client";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user = useAuthStore((s) => s.user);
  const loading = useAuthStore((s) => s.loading);
  const router = useRouter();

  // useEffect(() => {
  //   if (loading) return;

  //   if (!user) return router.replace("/login");
  //   return router.replace("/dashboard");
  // }, [loading]);

  return (
    <div className="text-center">
      <h1>Home Page</h1>
    </div>
  );
}
