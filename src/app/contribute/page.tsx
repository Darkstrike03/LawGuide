import Link from "next/link";
import { GitBranch, FileText, Check, Github, BookOpen } from "lucide-react";

const SCHEMA_EXAMPLE = `---
id: IPC-302
title: "Punishment for Murder"
act: "Indian Penal Code, 1860"
section: "302"
jurisdiction: "india"
category: ["criminal", "homicide"]
punishment: "Death, or imprisonment for life, and fine"
tags: ["murder", "culpable homicide", "ipc"]
last_amended: 1860
status: "active"
short_description: "Prescribes the punishment for the offence of murder as defined under Section 300."
---

## Section 302 — Punishment for Murder

Whoever commits **murder** shall be punished with **death**, or
**imprisonment for life**, and shall also be liable to fine.

### Related Sections

- [Section 299 — Culpable Homicide](/laws/india/ipc/section-299)
- [Section 300 — Murder (definition)](/laws/india/ipc/section-300)`;

const STEPS = [
  {
    step: "01",
    icon: <Github className="w-5 h-5" />,
    title: "Fork the repository",
    desc: 'Click "Fork" on the GitHub repository page to create your own copy.',
    code: "https://github.com/Darkstrike03/LawGuide",
  },
  {
    step: "02",
    icon: <GitBranch className="w-5 h-5" />,
    title: "Create a new branch",
    desc: "Create a branch named after the law you are adding.",
    code: "git checkout -b add/ipc-section-302",
  },
  {
    step: "03",
    icon: <FileText className="w-5 h-5" />,
    title: "Create the law file",
    desc: "Add a new .md file in the correct path under the laws/ directory.",
    code: "laws/india/ipc/section-302.md",
  },
  {
    step: "04",
    icon: <Check className="w-5 h-5" />,
    title: "Submit a Pull Request",
    desc: "GitHub Actions will automatically validate your file. A maintainer will review and merge it.",
    code: null,
  },
];

export default function ContributePage() {
  return (
    <div
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6"
      style={{ backgroundColor: "#FAFAF9" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-3 block"
            style={{ color: "#E07B39" }}
          >
            Open Source
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#0F1C2E",
            }}
          >
            How to Contribute a Law
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#6B7280" }}>
            LawGuide is entirely community-driven. Every law in this database was added by a
            contributor via a GitHub Pull Request. You can do the same in under 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-14">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border p-6 flex gap-5"
              style={{ borderColor: "#E8E4DF" }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl text-white flex items-center justify-center"
                style={{ backgroundColor: "#0F1C2E" }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#E07B39" }}
                >
                  Step {item.step}
                </span>
                <h3
                  className="font-semibold text-base mt-0.5 mb-1"
                  style={{ color: "#0F1C2E" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "#6B7280" }}>
                  {item.desc}
                </p>
                {item.code && (
                  <code
                    className="text-xs px-3 py-1.5 rounded-lg font-mono block w-fit"
                    style={{
                      backgroundColor: "#F4F0EB",
                      color: "#0F1C2E",
                    }}
                  >
                    {item.code}
                  </code>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* File structure */}
        <div className="mb-14">
          <h2
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#0F1C2E",
            }}
          >
            Directory Structure
          </h2>
          <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
            Files must follow this path convention:
          </p>
          <div
            className="rounded-xl p-4 font-mono text-sm leading-relaxed"
            style={{ backgroundColor: "#0F1C2E", color: "#E8E4DF" }}
          >
            <div style={{ color: "#8B8B8B" }}>laws/</div>
            <div className="ml-4">
              <span style={{ color: "#E07B39" }}>india/</span>
            </div>
            <div className="ml-8">
              <span style={{ color: "#5C7A9F" }}>ipc/</span>
              <span className="ml-2" style={{ color: "#8B8B8B" }}>
                ← Indian Penal Code
              </span>
            </div>
            <div className="ml-12" style={{ color: "#FAFAF9" }}>
              section-302.md
            </div>
            <div className="ml-8">
              <span style={{ color: "#5C7A9F" }}>constitution/</span>
            </div>
            <div className="ml-12" style={{ color: "#FAFAF9" }}>
              article-21.md
            </div>
            <div className="ml-8">
              <span style={{ color: "#5C7A9F" }}>crpc/</span>
            </div>
            <div className="ml-8">
              <span style={{ color: "#5C7A9F" }}>bns/</span>
              <span className="ml-2" style={{ color: "#8B8B8B" }}>
                ← Bharatiya Nyaya Sanhita
              </span>
            </div>
          </div>
        </div>

        {/* Schema example */}
        <div className="mb-14">
          <h2
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#0F1C2E",
            }}
          >
            File Format
          </h2>
          <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
            Every law file must have a YAML frontmatter block with required fields:
          </p>
          <pre
            className="rounded-xl p-5 text-xs leading-relaxed overflow-x-auto"
            style={{ backgroundColor: "#0F1C2E", color: "#E8E4DF" }}
          >
            {SCHEMA_EXAMPLE}
          </pre>
        </div>

        {/* Required fields */}
        <div className="mb-14">
          <h2
            className="text-xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#0F1C2E",
            }}
          >
            Required Fields
          </h2>
          <div
            className="bg-white rounded-xl border overflow-hidden"
            style={{ borderColor: "#E8E4DF" }}
          >
            {[
              { field: "id", type: "string", desc: "Unique identifier, e.g. IPC-302" },
              { field: "title", type: "string", desc: "Full name of the section" },
              { field: "act", type: "string", desc: "Full name of the Act or Code" },
              { field: "section", type: "string", desc: "Section or article number" },
              { field: "jurisdiction", type: "string", desc: "Country code, e.g. india" },
              { field: "category", type: "string[]", desc: "Array of categories: criminal, civil, constitutional, etc." },
              { field: "tags", type: "string[]", desc: "Searchable keywords" },
              { field: "last_amended", type: "number", desc: "Year of last amendment or original enactment" },
            ].map((row, i) => (
              <div
                key={row.field}
                className={`flex items-start gap-4 px-4 py-3 text-sm ${
                  i !== 0 ? "border-t" : ""
                }`}
                style={{ borderColor: "#E8E4DF" }}
              >
                <code
                  className="font-mono font-semibold w-32 shrink-0"
                  style={{ color: "#E07B39" }}
                >
                  {row.field}
                </code>
                <code
                  className="w-20 shrink-0 text-xs"
                  style={{ color: "#5C7A9F" }}
                >
                  {row.type}
                </code>
                <span style={{ color: "#6B7280" }}>{row.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#0F1C2E" }}
        >
          <BookOpen className="w-8 h-8 mx-auto mb-3" style={{ color: "#E07B39" }} />
          <h3
            className="text-xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Ready to contribute?
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            Every section you add helps thousands of people understand their rights.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Darkstrike03/LawGuide/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#E07B39" }}
            >
              <Github className="w-4 h-4" />
              Fork on GitHub
            </a>
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "white",
              }}
            >
              Browse Existing Laws
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
