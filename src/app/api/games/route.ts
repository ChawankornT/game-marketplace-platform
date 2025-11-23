import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // params
  const category = searchParams.get("category");
  const search = searchParams.get("search")?.toLowerCase();
  const sort = searchParams.get("sort");
  const min = Number(searchParams.get("min") || 0);
  const max = Number(searchParams.get("max") || 9999);

  // mock data
  const games: Game[] = [
    {
      id: 1,
      title: "Cyber Warzone 2077",
      developer: "NightCorp",
      price: 59,
      originalPrice: 89,
      discount: 30,
      category: "Action",
      rating: 4.8,
      reviewCount: 12000,
      image: "",
      tags: ["FPS", "Sci-Fi"],
      isNew: true,
      isTrending: true,
    },
    {
      id: 2,
      title: "Mystic Forest",
      developer: "Ancient Valley",
      price: 39,
      category: "RPG",
      rating: 4.5,
      reviewCount: 5400,
      image: "",
      tags: ["Magic", "Open World"],
    },
    {
      id: 3,
      title: "Galaxy Raiders",
      developer: "SpaceFox",
      price: 29,
      category: "Strategy",
      rating: 4.1,
      reviewCount: 2100,
      image: "",
      tags: ["Tactical", "Space"],
    },
  ];

  let result = [...games];

  // filter category
  if (category && category !== "All") {
    result = result.filter((g) => g.category === category);
  }

  // search
  if (search) {
    result = result.filter((g) => g.title.toLowerCase().includes(search));
  }

  // price filter
  result = result.filter((g) => g.price >= min && g.price <= max);

  // sort
  if (sort === "price") result.sort((a, b) => a.price - b.price);
  if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
  if (sort === "newest") result.sort((a, b) => b.id - a.id);
  if (sort === "popular") result.sort((a, b) => b.reviewCount - a.reviewCount);

  return NextResponse.json({ games: result });
}
