interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: number;
  thumbnail: string;
  category: "Update" | "Event" | "Maintenance" | "Promotion";
}
