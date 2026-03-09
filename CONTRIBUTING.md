# Contributing to LawGuide

Thank you for helping make the law accessible to everyone. LawGuide is a community-maintained, open-source repository of laws. Every contribution matters.

---

## How to Add a Law

### 1. Fork the Repository

Click **Fork** on [github.com/Darkstrike03/LawGuide](https://github.com/Darkstrike03/LawGuide).

### 2. Create a Branch

```bash
git checkout -b add/ipc-section-420
```

### 3. Create a Law File

Add a new `.md` file in the correct path:

```
laws/
└── india/
    ├── ipc/           ← Indian Penal Code
    ├── crpc/          ← Code of Criminal Procedure
    ├── constitution/  ← Constitution of India
    └── bns/           ← Bharatiya Nyaya Sanhita, 2023
```

**File naming convention:** `section-<number>.md` or `article-<number>.md`  
Example: `laws/india/ipc/section-420.md`

### 4. Fill in the Frontmatter

Every file **must** start with a YAML frontmatter block:

```yaml
---
id: IPC-420
title: "Cheating and Dishonestly Inducing Delivery of Property"
act: "Indian Penal Code, 1860"
section: "420"
jurisdiction: "india"
category: ["criminal", "fraud"]
punishment: "Imprisonment up to 7 years and fine"
tags: ["cheating", "fraud", "dishonesty", "property", "ipc"]
last_amended: 1860
status: "active"
short_description: "Prescribes punishment for cheating in cases where the deceived person is induced to deliver property or alter a document."
---
```

### 5. Write the Law Text

After the frontmatter, write the law in plain Markdown. Include:
- The full text of the section/article
- Sub-sections, provisos, explanations
- Landmark judgements (if any)
- Related sections with links

### 6. Submit a Pull Request

Push your branch and open a PR. GitHub Actions will automatically:
- ✅ Validate your frontmatter against the schema
- ✅ Check for duplicate IDs
- ✅ Run a full build to confirm nothing is broken

A maintainer will review and merge your PR.

---

## Required Frontmatter Fields

| Field | Type | Example | Description |
|---|---|---|---|
| `id` | `string` | `IPC-420` | Unique identifier. Use `ACT-SECTION` format. |
| `title` | `string` | `"Cheating..."` | Full name of the section |
| `act` | `string` | `"Indian Penal Code, 1860"` | Full name of the Act |
| `section` | `string` | `"420"` | Section/article number |
| `jurisdiction` | `string` | `"india"` | Country code, lowercase |
| `category` | `string[]` | `["criminal", "fraud"]` | Categories (see below) |
| `tags` | `string[]` | `["cheating", "fraud"]` | Search keywords |
| `last_amended` | `number` | `1860` | Year of last amendment |

### Optional Fields

| Field | Type | Description |
|---|---|---|
| `punishment` | `string` | Short punishment description |
| `status` | `"active"` \| `"repealed"` \| `"amended"` | Default: `"active"` |
| `short_description` | `string` | 1–2 sentence plain-language summary |

### Valid Categories

`criminal` · `civil` · `constitutional` · `property` · `family` · `cyber` · `commercial` · `labour` · `environmental` · `procedural`

---

## Accuracy Standards

- Copy the **exact text** of the law from official sources.
- Use [India Code](https://www.indiacode.nic.in/) or [Legislative.gov.in](https://legislative.gov.in/) as primary sources.
- Do not paraphrase the law text — record it verbatim.
- If a section has been amended, note the amendment year in `last_amended`.
- If a section has been repealed by a newer act, set `status: "repealed"` and add a note in the content.

---

## Code of Conduct

By contributing, you agree that all content you submit is:
- Accurate and sourced from official government publications
- Not paraphrased or summarised in the law text section
- Free from personal legal opinions or advice

For questions, open a [GitHub Discussion](https://github.com/Darkstrike03/LawGuide/discussions).
