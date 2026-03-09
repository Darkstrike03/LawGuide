export interface LawFrontmatter {
  id: string;
  title: string;
  act: string;
  section: string;
  jurisdiction: string;
  category: string[];
  punishment?: string;
  tags: string[];
  last_amended: number;
  status?: "active" | "repealed" | "amended";
  language?: string;
  short_description?: string;
}

export interface Law extends LawFrontmatter {
  slug: string[];
  content: string;
  filePath: string;
}

export interface LawMeta extends LawFrontmatter {
  slug: string[];
}
