import { getAllSlugs, getLawBySlug } from "@/lib/laws";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import {
  ChevronRight,
  Tag,
  Calendar,
  BookOpen,
  ArrowLeft,
  AlertTriangle,
  Github,
} from "lucide-react";

interface LawPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LawPageProps) {
  const { slug } = await params;
  const law = getLawBySlug(slug);
  if (!law) return {};
  return {
    title: `${law.title} — ${law.act} | LawGuide`,
    description:
      law.short_description ?? `${law.act}, Section ${law.section}`,
  };
}

export default async function LawPage({ params }: LawPageProps) {
  const { slug } = await params;
  const law = getLawBySlug(slug);
  if (!law) notFound();

  const breadcrumbs = [
    { label: "Browse", href: "/browse" },
    {
      label: law.jurisdiction,
      href: `/browse?jurisdiction=${law.jurisdiction}`,
    },
    { label: law.act, href: `/browse?act=${encodeURIComponent(law.act)}` },
    { label: `§ ${law.section}`, href: null },
  ];

  const statusStyle: React.CSSProperties =
    law.status === "repealed"
      ? { backgroundColor: "#FEE2E2", color: "#B91C1C" }
      : law.status === "amended"
      ? { backgroundColor: "#FEF3C7", color: "#92400E" }
      : { backgroundColor: "#D1FAE5", color: "#065F46" };

  return (
    <div
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <Link
            href="/browse"
            className="flex items-center gap-1.5 text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#6B7280" }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Browse
          </Link>
          <nav className="flex items-center gap-1 text-xs flex-wrap" style={{ color: "#8B8B8B" }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3 h-3" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:underline capitalize"
                    style={{ color: "#6B7280" }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold" style={{ color: "#0F1C2E" }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main law content */}
          <article className="flex-1 min-w-0">
            <div
              className="bg-white border rounded-2xl p-6 sm:p-8"
              style={{ borderColor: "#E8E4DF" }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#E07B39" }}
              >
                {law.act} &middot; Section {law.section}
              </span>
              <h1
                className="text-2xl sm:text-3xl font-bold mt-2 mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  color: "#0F1C2E",
                }}
              >
                {law.title}
              </h1>

              {law.status === "repealed" && (
                <div
                  className="flex items-start gap-3 rounded-xl p-4 mb-6 text-sm"
                  style={{
                    backgroundColor: "#FEF2F2",
                    border: "1px solid #FECACA",
                    color: "#B91C1C",
                  }}
                >
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    This section has been <strong>repealed</strong> and is no
                    longer in force.
                  </span>
                </div>
              )}

              <div
                className="prose prose-neutral max-w-none
                  prose-headings:text-[#0F1C2E] prose-h2:text-xl prose-h3:text-base
                  prose-p:text-[#374151] prose-p:leading-relaxed
                  prose-strong:text-[#0F1C2E]
                  prose-a:text-[#E07B39] prose-a:no-underline hover:prose-a:underline
                  prose-li:text-[#374151]
                  prose-blockquote:border-l-[#E07B39] prose-blockquote:text-[#6B7280]
                  prose-code:text-[#0F1C2E] prose-code:bg-[#F4F0EB]"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                <MDXRemote source={law.content} />
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-4">
            {/* Metadata card */}
            <div
              className="bg-white border rounded-xl p-5"
              style={{ borderColor: "#E8E4DF" }}
            >
              <h2
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: "#8B8B8B" }}
              >
                Details
              </h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs" style={{ color: "#8B8B8B" }}>Act / Code</dt>
                  <dd className="font-medium mt-0.5" style={{ color: "#0F1C2E" }}>
                    {law.act}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs" style={{ color: "#8B8B8B" }}>Section</dt>
                  <dd className="font-medium mt-0.5" style={{ color: "#0F1C2E" }}>
                    {law.section}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs" style={{ color: "#8B8B8B" }}>Jurisdiction</dt>
                  <dd className="font-medium mt-0.5 capitalize" style={{ color: "#0F1C2E" }}>
                    {law.jurisdiction}
                  </dd>
                </div>
                {law.punishment && (
                  <div>
                    <dt className="text-xs" style={{ color: "#8B8B8B" }}>Punishment</dt>
                    <dd className="font-medium mt-0.5" style={{ color: "#0F1C2E" }}>
                      {law.punishment}
                    </dd>
                  </div>
                )}
                <div className="flex items-center gap-2 pt-1">
                  <Calendar className="w-3.5 h-3.5" style={{ color: "#8B8B8B" }} />
                  <span style={{ color: "#6B7280" }}>
                    Last amended {law.last_amended}
                  </span>
                </div>
                {law.status && (
                  <div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={statusStyle}
                    >
                      {law.status}
                    </span>
                  </div>
                )}
              </dl>
            </div>

            {/* Tags */}
            {law.tags?.length > 0 && (
              <div
                className="bg-white border rounded-xl p-5"
                style={{ borderColor: "#E8E4DF" }}
              >
                <h2
                  className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5"
                  style={{ color: "#8B8B8B" }}
                >
                  <Tag className="w-3 h-3" /> Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {law.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/browse?q=${encodeURIComponent(tag)}`}
                      className="text-xs px-2.5 py-1 rounded-full transition-colors"
                      style={{
                        backgroundColor: "#F4F0EB",
                        color: "#5C7A9F",
                      }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            {law.category?.length > 0 && (
              <div
                className="bg-white border rounded-xl p-5"
                style={{ borderColor: "#E8E4DF" }}
              >
                <h2
                  className="text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5"
                  style={{ color: "#8B8B8B" }}
                >
                  <BookOpen className="w-3 h-3" /> Categories
                </h2>
                <div className="flex flex-wrap gap-2">
                  {law.category.map((cat) => (
                    <Link
                      key={cat}
                      href={`/browse?category=${cat}`}
                      className="text-xs px-2.5 py-1 rounded-full capitalize transition-colors"
                      style={{
                        backgroundColor: "rgba(15,28,46,0.06)",
                        color: "#0F1C2E",
                      }}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Edit on GitHub */}
            <div
              className="rounded-xl p-5 text-white"
              style={{ backgroundColor: "#0F1C2E" }}
            >
              <p className="text-sm font-semibold mb-1">Found an error?</p>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                Help us improve by submitting a correction on GitHub.
              </p>
              <a
                href={`https://github.com/Darkstrike03/LawGuide/blob/main/laws/${slug.join(
                  "/"
                )}.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
                style={{ color: "#E07B39" }}
              >
                <Github className="w-3.5 h-3.5" />
                Edit this page on GitHub →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
