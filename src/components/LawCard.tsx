import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import type { LawMeta } from "@/lib/types";

export default function LawCard({ law }: { law: LawMeta }) {
  const href = `/laws/${law.slug.join("/")}`;

  const statusBadge =
    law.status === "repealed"
      ? "bg-red-100 text-red-700"
      : law.status === "amended"
      ? "bg-amber-100 text-amber-700"
      : "bg-green-100 text-green-700";

  return (
    <Link
      href={href}
      className="group block bg-white border border-[#E8E4DF] rounded-xl p-5 hover:border-[#E07B39]/50 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0">
          <span className="text-xs font-bold text-[#E07B39] uppercase tracking-wider">
            {law.act} &middot; {law.section}
          </span>
          <h3
            className="font-bold text-[#0F1C2E] text-base mt-1 leading-snug group-hover:text-[#E07B39] transition-colors line-clamp-2"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            {law.title}
          </h3>
        </div>
        <ArrowRight
          className="w-4 h-4 text-[#8B8B8B] shrink-0 mt-1 group-hover:text-[#E07B39] group-hover:translate-x-0.5 transition-all"
          strokeWidth={1.5}
        />
      </div>

      {law.short_description && (
        <p className="text-sm text-[#6B7280] mb-3 line-clamp-2 leading-relaxed">
          {law.short_description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 items-center mt-3">
        {law.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-[#F4F0EB] text-[#5C7A9F] rounded-full"
          >
            <Tag className="w-2.5 h-2.5" />
            {tag}
          </span>
        ))}
        {law.status && (
          <span
            className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${statusBadge}`}
          >
            {law.status}
          </span>
        )}
      </div>
    </Link>
  );
}
