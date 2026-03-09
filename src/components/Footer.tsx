import Link from "next/link";
import { Scale, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F1C2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-[#E07B39]" strokeWidth={1.5} />
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              LawGuide
            </span>
          </div>
          <p className="text-sm text-white/60 max-w-xs leading-relaxed">
            A free, open-source legal reference for the public, lawyers, and
            law students. Built by the community, for the community.
          </p>
          <a
            href="https://github.com/Darkstrike03/LawGuide"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#E07B39] transition-colors"
          >
            <Github className="w-4 h-4" />
            Open Source on GitHub
          </a>
        </div>

        {/* Browse */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
            Browse
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link
                href="/browse?act=Indian+Penal+Code"
                className="hover:text-[#E07B39] transition-colors"
              >
                Indian Penal Code
              </Link>
            </li>
            <li>
              <Link
                href="/browse?act=Code+of+Criminal+Procedure"
                className="hover:text-[#E07B39] transition-colors"
              >
                CrPC
              </Link>
            </li>
            <li>
              <Link
                href="/browse?act=Constitution+of+India"
                className="hover:text-[#E07B39] transition-colors"
              >
                Constitution of India
              </Link>
            </li>
            <li>
              <Link
                href="/browse?act=Bharatiya+Nyaya+Sanhita"
                className="hover:text-[#E07B39] transition-colors"
              >
                Bharatiya Nyaya Sanhita
              </Link>
            </li>
          </ul>
        </div>

        {/* Project */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
            Project
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link
                href="/contribute"
                className="hover:text-[#E07B39] transition-colors"
              >
                How to Contribute
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Darkstrike03/LawGuide/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E07B39] transition-colors"
              >
                Report an Error
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Darkstrike03/LawGuide/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E07B39] transition-colors"
              >
                Discussions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/30">
        Laws are public domain. LawGuide content is licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          className="underline hover:text-white/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY 4.0
        </a>
        . Code under{" "}
        <a
          href="https://github.com/Darkstrike03/LawGuide/blob/main/LICENSE"
          className="underline hover:text-white/60"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT License
        </a>
        .
      </div>
    </footer>
  );
}
