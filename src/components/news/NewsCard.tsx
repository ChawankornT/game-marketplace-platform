"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { timeAgo } from "@/utils/time";
import { Share2, Facebook, Twitter, Link as LinkIcon } from "lucide-react";

const categoryColors: Record<string, string> = {
  Update: "bg-blue-600",
  Event: "bg-green-600",
  Maintenance: "bg-orange-500",
  Promotion: "bg-red-600",
};

export default function NewsCard({ article }: { article: NewsArticle }) {
  const share = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/news/${article.id}`
    );
    alert("Link copied!");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-xl overflow-hidden bg-white/5 dark:bg-white/10 border border-white/10 hover:border-purple-400/40 backdrop-blur-sm"
    >
      <div className="relative h-44 w-full">
        {article.thumbnail && (
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4">
        <span
          className={`text-xs px-2 py-1 rounded-lg text-white ${
            categoryColors[article.category]
          }`}
        >
          {article.category}
        </span>

        <h3 className="text-lg font-bold mt-3 text-gray-700 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-gray-300 line-clamp-2 mt-2">
          {article.excerpt}
        </p>

        <div className="flex justify-between mt-4 text-xs text-gray-400">
          <p>{timeAgo(article.publishDate)}</p>
          <p>{article.readTime} min read</p>
        </div>

        <p className="mt-2 text-xs text-gray-500">By {article.author}</p>

        {/* Read more + share */}
        <div className="flex items-center justify-between mt-4">
          <a
            href={`/news/${article.id}`}
            className="text-purple-400 text-sm hover:text-purple-300"
          >
            Read more →
          </a>

          <div className="flex items-center gap-3">
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${window?.location.origin}/news/${article.id}`}
              target="_blank"
              className="p-2 rounded-full bg-black/40 hover:bg-blue-600 transition"
            >
              <Facebook size={16} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${window?.location.origin}/news/${article.id}`}
              target="_blank"
              className="p-2 rounded-full bg-black/40 hover:bg-sky-500 transition"
            >
              <Twitter size={16} />
            </a>

            <button
              onClick={share}
              className="p-2 rounded-full bg-black/40 hover:bg-purple-600 transition"
            >
              <LinkIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
