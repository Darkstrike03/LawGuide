import Link from "next/link";
import { Search, Scale, BookOpen, Users, GitBranch, ArrowRight } from "lucide-react";
import { getAllLawsMeta } from "@/lib/laws";
import LawCard from "@/components/LawCard";

const CATEGORIES = [
  { name: "Criminal Law", slug: "criminal", icon: "⚖️", bg: "#FEF2F2", border: "#FECACA" },
  { name: "Constitutional", slug: "constitutional", icon: "🏛️", bg: "#EFF6FF", border: "#BFDBFE" },
  { name: "Civil Law", slug: "civil", icon: "📜", bg: "#F0FDF4", border: "#BBF7D0" },
  { name: "Property Law", slug: "property", icon: "🏠", bg: "#FFFBEB", border: "#FDE68A" },
  { name: "Family Law", slug: "family", icon: "👨‍👩‍👧", bg: "#FAF5FF", border: "#E9D5FF" },
  { name: "Cyber Law", slug: "cyber", icon: "💻", bg: "#ECFEFF", border: "#A5F3FC" },
];

export default function HomePage() {
  const allLaws = getAllLawsMeta();
  const recentLaws = allLaws.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6" style={{ backgroundColor: "#FAFAF9" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
            style={{ color: "#E07B39", backgroundColor: "rgba(224,123,57,0.1)" }}
          >
            <GitBranch className="w-3 h-3" />
            Open Source · Community Driven
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#0F1C2E",
            }}
          >
            The Law Should Be{" "}
            <span style={{ color: "#E07B39" }} className="italic">
              Accessible
            </span>{" "}
            to Everyone
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#6B7280" }}>
            A free, open-source repository of Indian laws — for the public, lawyers, and law
            students. Contribute directly on GitHub. No paywalls, ever.
          </p>

          {/* Hero Search */}
          <form
            action="/browse"
            className="flex items-center max-w-xl mx-auto mb-14 bg-white rounded-full border shadow-lg overflow-hidden"
            style={{ borderColor: "#E8E4DF" }}
          >
            <Search className="ml-4 w-5 h-5 shrink-0" style={{ color: "#8B8B8B" }} strokeWidth={1.5} />
            <input
              name="q"
              type="text"
              placeholder="Search IPC 302, Right to Life, Bail conditions..."
              className="flex-1 px-3 py-4 bg-transparent outline-none text-base placeholder:text-[#8B8B8B]"
              style={{ color: "#0F1C2E" }}
            />
            <button
              type="submit"
              className="px-6 py-4 font-semibold text-sm text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0F1C2E" }}
            >
              Search
            </button>
          </form>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { value: `${allLaws.length}+`, label: "Laws Indexed" },
              { value: "1", label: "Jurisdiction" },
              { value: "100%", label: "Free & Open Source" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-lora), Georgia, serif", color: "#E07B39" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm mt-0.5" style={{ color: "#6B7280" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y" style={{ borderColor: "#E8E4DF" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "var(--font-lora), Georgia, serif", color: "#0F1C2E" }}
          >
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/browse?category=${cat.slug}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border text-center hover:shadow-md transition-all duration-200"
                style={{ backgroundColor: cat.bg, borderColor: cat.border }}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-semibold" style={{ color: "#0F1C2E" }}>
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added Laws */}
      {recentLaws.length > 0 && (
        <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#FAFAF9" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-lora), Georgia, serif", color: "#0F1C2E" }}
              >
                Recently Added
              </h2>
              <Link
                href="/browse"
                className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                style={{ color: "#E07B39" }}
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentLaws.map((law) => (
                <LawCard key={law.slug.join("/")} law={law} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t" style={{ borderColor: "#E8E4DF" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-lora), Georgia, serif", color: "#0F1C2E" }}
          >
            How Contributions Work
          </h2>
          <p className="text-sm mb-10" style={{ color: "#6B7280" }}>
            Adding a new law takes less than 5 minutes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <GitBranch className="w-5 h-5" />,
                title: "Fork & Create",
                desc: "Fork the repository on GitHub and create a new Markdown file under the appropriate directory (e.g., laws/india/ipc/).",
              },
              {
                step: "02",
                icon: <BookOpen className="w-5 h-5" />,
                title: "Add the Law",
                desc: "Fill in the YAML frontmatter (ID, title, act, section) and write the law text. Follow the schema in CONTRIBUTING.md.",
              },
              {
                step: "03",
                icon: <Users className="w-5 h-5" />,
                title: "Submit a PR",
                desc: "Open a Pull Request. GitHub Actions will auto-validate your file. Once approved, the site deploys automatically.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl text-white flex items-center justify-center"
                  style={{ backgroundColor: "#0F1C2E" }}
                >
                  {item.icon}
                </div>
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#E07B39" }}
                  >
                    Step {item.step}
                  </span>
                  <h3 className="font-semibold mt-0.5 mb-1" style={{ color: "#0F1C2E" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://github.com/Darkstrike03/LawGuide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0F1C2E" }}
            >
              <Scale className="w-4 h-4" />
              Start Contributing on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
