"use client";

import { Facebook, Twitter, Youtube, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white mt-10 bg-linear-to-b from-blue-400/60 to-blue-600 dark:from-black/40 dark:to-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">GameHub</h2>
            <p className="text-sm text-gray-200">
              Discover, buy, and download your favorite games — all in one
              platform designed for gamers.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: <Facebook size={18} />, url: "https://facebook.com" },
                { icon: <Twitter size={18} />, url: "https://twitter.com" },
                { icon: <Youtube size={18} />, url: "https://youtube.com" },
                { icon: <Instagram size={18} />, url: "https://instagram.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 hover:scale-110 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="uppercase text-sm font-semibold tracking-wide text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Action",
                "RPG",
                "Strategy",
                "Sports",
                "Puzzle",
                "Adventure",
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="uppercase text-sm font-semibold tracking-wide text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-purple-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-purple-400">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="uppercase text-sm font-semibold tracking-wide text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-200 mb-4">
              Subscribe to get the latest game deals & news.
            </p>

            <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 text-sm outline-none flex-1 placeholder-gray-200"
              />
              <button className="px-3 py-2 bg-purple-600 hover:bg-purple-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-white">
          <p>
            © {new Date().getFullYear()} GameHub Marketplace. All rights
            reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/terms" className="text-white hover:text-purple-400">
              Terms
            </a>
            <a href="/privacy" className="text-white hover:text-purple-400">
              Privacy
            </a>
            <a href="/cookies" className="text-white hover:text-purple-400">
              Cookies
            </a>
            <a href="/sitemap" className="text-white hover:text-purple-400">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
