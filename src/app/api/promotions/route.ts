import { Promotion } from "@/types/promotion";
import { NextResponse } from "next/server";

export async function GET() {
  const promotion: Promotion = {
    id: 1,
    title: "🔥 Special Holiday Sale — Up to 70% OFF!",
    subtitle:
      "Huge discounts on top AAA titles. Limited stock and time — grab your favorite games now!",
    banner: "",
    buttonText: "Shop Deals",
    link: "/deals",
    endDate: "2025-12-31T23:59:59",
  };

  return NextResponse.json({ promotion });
}
