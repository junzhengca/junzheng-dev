import type { IconName } from '@/components/Icon';

export interface ExperienceItem {
  company: string;
  icon: IconName;
  role: string;
  period: string;
  description: string;
  stack: string[];
  projects?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Google",
    icon: "sparkles",
    role: "Software Engineer",
    period: "2021-09 -> Present",
    description: "Building the future of AI collaboration.",
    stack: ["C++", "Java", "TypeScript", "Angular"],
    projects: ["Gemini Enterprise", "NotebookLM Enterprise", "Vertex AI Search", "Retail AI", "Google Chat"]
  },
  {
    company: "Royal Bank of Canada",
    icon: "briefcase",
    role: "Software Developer Intern",
    period: "2019-05 -> 2019-08",
    description: "Technology and Operations division.",
    stack: ["Java", "Spring Boot"]
  }
];

