import { getAllLawsMeta } from "@/lib/laws";
import LawCard from "@/components/LawCard";
import { Filter, Scale } from "lucide-react";

interface BrowsePageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    act?: string;
    jurisdiction?: string;
  }>;
}

const ACT_OPTIONS = [
  { value: "", label: "All Acts" },
  { value: "Indian Penal Code", label: "Indian Penal Code (IPC)" },
  { value: "Code of Criminal Procedure", label: "CrPC" },
  { value: "Constitution of India", label: "Constitution of India" },
  { value: "Bharatiya Nyaya Sanhita", label: "Bharatiya Nyaya Sanhita (BNS)" },
];

const CATEGORY_OPTIONS = [
  { value: "", label: "All Categories" },
  { value: "criminal", label: "Criminal" },
  { value: "constitutional", label: "Constitutional" },
  { value: "civil", label: "Civil" },
  { value: "property", label: "Property" },
  { value: "family", label: "Family" },
  { value: "cyber", label: "Cyber" },
];

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const params = await searchParams;
  const q = params.q?.toLowerCase() || "";
  const category = params.category || "";
  const act = params.act || "";
  const jurisdiction = params.jurisdiction || "";

  const allLaws = getAllLawsMeta();

  const filtered = allLaws.filter((law) => {
    if (q) {
      const searchable = `${law.title} ${law.section} ${law.act} ${
        law.tags?.join(" ") ?? ""
      } ${law.short_description ?? ""}`.toLowerCase();
      if (!searchable.includes(q)) return false;
    }
    if (category && !law.category?.includes(category)) return false;
    if (act && !law.act?.toLowerCase().includes(act.toLowerCase())) return false;
    if (
      jurisdiction &&
      law.jurisdiction?.toLowerCase() !== jurisdiction.toLowerCase()
    )
      return false;
    return true;
  });

  return (
    <div
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#0F1C2E",
            }}
          >
            Browse Laws
          </h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>
            {filtered.length} {filtered.length === 1 ? "law" : "laws"} found
            {q && (
              <span>
                {" "}
                for &quot;<strong style={{ color: "#0F1C2E" }}>{params.q}</strong>&quot;
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="lg:w-56 shrink-0">
            <div
              className="bg-white rounded-xl border p-4"
              style={{ borderColor: "#E8E4DF" }}
            >
              <div
                className="flex items-center gap-2 text-sm font-semibold mb-4"
                style={{ color: "#0F1C2E" }}
              >
                <Filter className="w-4 h-4" style={{ color: "#E07B39" }} strokeWidth={1.5} />
                Filters
              </div>

              <form method="GET">
                {q && <input type="hidden" name="q" value={params.q} />}

                <div className="mb-4">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider block mb-2"
                    style={{ color: "#8B8B8B" }}
                  >
                    Category
                  </label>
                  <select
                    name="category"
                    defaultValue={category}
                    className="w-full text-sm border rounded-lg px-3 py-2 bg-white outline-none"
                    style={{ borderColor: "#E8E4DF", color: "#0F1C2E" }}
                  >
                    {CATEGORY_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-5">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider block mb-2"
                    style={{ color: "#8B8B8B" }}
                  >
                    Act / Code
                  </label>
                  <select
                    name="act"
                    defaultValue={act}
                    className="w-full text-sm border rounded-lg px-3 py-2 bg-white outline-none"
                    style={{ borderColor: "#E8E4DF", color: "#0F1C2E" }}
                  >
                    {ACT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white text-sm py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0F1C2E" }}
                >
                  Apply Filters
                </button>

                {(q || category || act || jurisdiction) && (
                  <a
                    href="/browse"
                    className="block text-center text-xs mt-2 hover:underline"
                    style={{ color: "#8B8B8B" }}
                  >
                    Clear all filters
                  </a>
                )}
              </form>
            </div>
          </aside>

          {/* Law grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20" style={{ color: "#8B8B8B" }}>
                <Scale className="w-10 h-10 mx-auto mb-3 opacity-20" />
                <p className="text-lg font-medium" style={{ color: "#0F1C2E" }}>
                  No laws found
                </p>
                <p className="text-sm mt-1">Try a different search or filter</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map((law) => (
                  <LawCard key={law.slug.join("/")} law={law} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
