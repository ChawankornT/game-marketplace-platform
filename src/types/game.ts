interface Game {
  id: number;
  title: string;
  developer: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: "Action" | "RPG" | "Strategy" | "Sports" | "Puzzle";
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
}
