import { NextResponse } from "next/server";

export async function GET() {
  const news: NewsArticle[] = [
    {
      id: 1,
      title: "Cyber Warzone 2077 — New Balance Patch Released",
      excerpt:
        "Major weapon balancing, bug fixes, and performance improvements included.",
      author: "GameHub Editorial",
      publishDate: "2025-01-10",
      readTime: 4,
      thumbnail: "",
      category: "Update",
    },
    {
      id: 2,
      title: "Galaxy Raiders Winter Event Is Now Live",
      excerpt:
        "Join the limited-time quests, unlock exclusive skins, and earn rare rewards.",
      author: "Luna Orbit",
      publishDate: "2025-01-14",
      readTime: 3,
      thumbnail: "",
      category: "Event",
    },
    {
      id: 3,
      title: "Mystic Forest Scheduled Maintenance",
      excerpt:
        "Servers will be down for database upgrades and backend improvements.",
      author: "Admin Team",
      publishDate: "2025-01-17",
      readTime: 2,
      thumbnail: "",
      category: "Maintenance",
    },
    {
      id: 4,
      title: "New Year Promotion — Up to 60% Off",
      excerpt: "Massive discounts across top titles. Limited-time offer!",
      author: "GameHub Deals",
      publishDate: "2025-01-20",
      readTime: 1,
      thumbnail: "",
      category: "Promotion",
    },
  ];

  return NextResponse.json({ news });
}
