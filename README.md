<div align="center">
  <img src="https://raw.githubusercontent.com/Darkstrike03/LawGuide/main/public/logo.svg" alt="LawGuide" width="80" />
  <h1>LawGuide</h1>
  <p><strong>India's Free, Open-Source Legal Reference</strong></p>
  <p>
    <a href="https://github.com/Darkstrike03/LawGuide/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License" />
    </a>
    <a href="https://github.com/Darkstrike03/LawGuide/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg" alt="Contributions Welcome" />
    </a>
    <img src="https://img.shields.io/badge/laws-growing-orange" alt="Growing" />
  </p>
</div>

---

LawGuide is a **community-maintained, open-source repository** of Indian laws — for the public, lawyers, and law students. Every law is stored as a plain Markdown file in this repository. Anyone can add or correct a law via a Pull Request.

No paywalls. No login. No database. Just laws in files.

## Features

- **Browse** laws by category, act, and jurisdiction
- **Search** across all sections and articles
- **GitHub-native** — contribute a law in under 5 minutes
- **Auto-validation** — GitHub Actions validates every PR
- **Auto-deploy** — site rebuilds and deploys on every merge to `main`
- **Open Content** — all law text is CC BY 4.0

## Laws Available

| Act | Sections |
|---|---|
| Indian Penal Code, 1860 | IPC 299, 300, 302, 376 |
| Code of Criminal Procedure, 1973 | CrPC 41 |
| Constitution of India | Articles 19, 21 |
| Bharatiya Nyaya Sanhita, 2023 | BNS 103 |

*More being added. See [CONTRIBUTING.md](CONTRIBUTING.md) to help.*

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Content:** Gray Matter (YAML frontmatter) + MDX
- **Hosting:** Vercel
- **CI/CD:** GitHub Actions

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Darkstrike03/LawGuide.git
cd LawGuide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full instructions.

**Quick version:**
1. Fork this repo
2. Create `laws/india/<act>/section-<n>.md`
3. Fill in the frontmatter and law text
4. Submit a Pull Request

GitHub Actions will validate your file automatically.

## Roadmap

- [x] Phase 1 — Law repository with search and browsing
- [ ] Phase 2 — Case law linking, landmark judgements, multi-language
- [ ] Phase 3 — AI assistant for legal Q&A, case similarity matching

## License

- Code: [MIT License](LICENSE)
- Law content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

Laws are public domain — the structured format and metadata are CC BY 4.0.

---

<div align="center">
  Built with ❤️ for India's 1.4 billion people.
</div>


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
