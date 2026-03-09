"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Scale, Menu, X, Github } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/browse?q=${encodeURIComponent(query.trim())}`);
      setMenuOpen(false);
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[#E8E4DF] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Scale className="w-6 h-6 text-[#E07B39]" strokeWidth={1.5} />
          <span
            className="font-serif font-bold text-[#0F1C2E] text-lg tracking-tight"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            LawGuide
          </span>
        </Link>

        {/* Search bar (desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 max-w-sm mx-6"
        >
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8B8B]"
              strokeWidth={1.5}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search laws, sections, acts..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-[#F4F0EB] border border-[#E8E4DF] rounded-full outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/20 transition-all placeholder:text-[#8B8B8B] text-[#0F1C2E]"
            />
          </div>
        </form>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-[#0F1C2E] shrink-0">
          <Link
            href="/browse"
            className="hover:text-[#E07B39] transition-colors"
          >
            Browse
          </Link>
          <a
            href="https://github.com/Darkstrike03/LawGuide"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E07B39] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <Link
            href="/contribute"
            className="bg-[#0F1C2E] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#E07B39] transition-colors"
          >
            Contribute
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#0F1C2E] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#E8E4DF] px-4 py-4 flex flex-col gap-4">
          <form onSubmit={handleSearch} className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8B8B]"
              strokeWidth={1.5}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search laws, sections..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#F4F0EB] border border-[#E8E4DF] rounded-full outline-none focus:border-[#E07B39] transition-all"
            />
          </form>
          <Link
            href="/browse"
            className="text-[#0F1C2E] font-medium py-1"
            onClick={() => setMenuOpen(false)}
          >
            Browse Laws
          </Link>
          <Link
            href="/contribute"
            className="text-[#0F1C2E] font-medium py-1"
            onClick={() => setMenuOpen(false)}
          >
            Contribute
          </Link>
          <a
            href="https://github.com/Darkstrike03/LawGuide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F1C2E] font-medium py-1 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
