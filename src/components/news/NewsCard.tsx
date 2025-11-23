"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsCard({ article }: { article: NewsArticle }) {
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
        <span className="text-xs px-2 py-1 bg-purple-600 text-white rounded-lg">
          {article.category}
        </span>

        <h3 className="text-lg font-bold mt-3 text-white">{article.title}</h3>

        <p className="text-sm text-gray-300 line-clamp-2 mt-2">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
          <p>{new Date(article.publishDate).toLocaleDateString("en-US")}</p>
          <p>{article.readTime} min read</p>
        </div>

        <p className="mt-2 text-xs text-gray-500">By {article.author}</p>
      </div>
    </motion.div>
  );
}
