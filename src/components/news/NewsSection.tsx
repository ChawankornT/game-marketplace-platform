"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchNews = async () => {
        setIsLoading(true);

        const res = await fetch("/api/news");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setNews(data.news);
      };

      fetchNews();
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <main className="max-w-7xl mx-auto pt-10 px-4">
        <div className="h-96 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-6">News & Updates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.length > 0 ? (
          news.map((n: NewsArticle) => <NewsCard key={n.id} article={n} />)
        ) : (
          <p>No news available</p>
        )}
      </div>
    </section>
  );
}
