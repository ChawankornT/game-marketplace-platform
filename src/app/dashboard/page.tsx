"use client";

import { useAuthStore } from "@/store/auth.store";
import { redirect, RedirectType } from "next/navigation";

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const loading = useAuthStore((s) => s.loading);

  if (loading) return <div>Loading...</div>;

  if (!user) return redirect("/login", RedirectType.replace);

  return (
    <div>
      <h1>Welcome {user.displayName}!</h1>
    </div>
  );
}
