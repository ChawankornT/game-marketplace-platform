import { HeroBanner } from "@/types/hero";
import { NextResponse } from "next/server";

export async function GET() {
  const data: HeroBanner[] = [
    {
      id: "1",
      title: "Cyber Warzone 2077",
      subtitle: "Prepare for the ultimate battle in the cyber future.",
      imageUrl: "",
      ctaText: "Play Now",
      ctaLink: "/games/1",
    },
    {
      id: "2",
      title: "Ancient Legends",
      subtitle: "Become the hero of forgotten kingdoms.",
      imageUrl: "",
      ctaText: "Explore",
      ctaLink: "/games/2",
    },
    {
      id: "3",
      title: "Galaxy Raids",
      subtitle: "Fight across galaxies and conquer alien worlds.",
      imageUrl: "",
      ctaText: "Start Adventure",
      ctaLink: "/games/3",
    },
  ];

  return NextResponse.json({ banners: data });
}
