export interface SkillCategory {
  category: string;
  items: string[];
  classificationNote?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "SQL"],
    classificationNote: "Core systems, algorithms, backend services, and data querying."
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "FastAPI",
      "React",
      "Next.js",
      "Scikit-learn",
      "PyTorch",
      "Pandas",
      "NumPy",
      "SymPy",
      "Pandapower"
    ],
    classificationNote: "Machine learning, scientific computing, symbolic math, and web interfaces."
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Multi-Agent Systems",
      "Reinforcement Learning",
      "Transformers",
      "Anomaly Detection"
    ],
    classificationNote: "Architectures, agent coordination, evaluation frameworks, and fairness mitigation."
  },
  {
    category: "Core Fundamentals",
    items: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems"
    ],
    classificationNote: "Foundational computer science principles, complexity analysis, and systems."
  }
];

