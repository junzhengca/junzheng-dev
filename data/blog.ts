export interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  description: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Automating Security Scans with Go",
    date: "2024-12-12",
    readTime: "5m",
    description: "Building gitscanner to efficiently audit public GitHub repositories for organizations.",
    url: "https://github.com/junzhengca/gitscanner"
  },
  {
    title: "Reflections on NotebookLM Enterprise",
    date: "2024-10-04",
    readTime: "8m",
    description: "Exploring the challenges of building secure, enterprise-grade AI collaboration tools at Google.",
    url: "#"
  },
  {
    title: "A Programmer's Guide to Cooking",
    date: "2024-01-20",
    readTime: "3m",
    description: "Why cooking at home is just like dependency management, but tastier.",
    url: "https://github.com/junzhengca/HowToCook"
  }
];

