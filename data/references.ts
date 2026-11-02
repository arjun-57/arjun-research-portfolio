export interface ReferenceItem {
  id: string;
  citationKey: string;
  type: "publication" | "project-docs";
  title: string;
  authors: string[];
  venueOrPlatform: string;
  year: string;
  details: string;
  url?: string;
  isPending?: boolean;
}

export interface AppendixItem {
  id: string;
  label: string;
  description: string;
  format: "PDF Document" | "Git Repository" | "Specification";
  actionLabel: string;
  url: string;
  isAvailable: boolean;
  statusTag: "Ready for Download" | "Publication Pending" | "Placeholder Link";
}

export const referencesData: ReferenceItem[] = [
  {
    id: "ref-1",
    citationKey: "[1]",
    type: "publication",
    title: "Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning",
    authors: ["Arjun R"],
    venueOrPlatform: "Proceedings of the International Conference on Intelligent Systems and Computing (ICISC 2026)",
    year: "2026",
    details: "Focuses on Fairlearn demographic parity optimization and rule-augmented placement recommendation across a 1,200-candidate cohort.",
    isPending: true
  },
  {
    id: "ref-2",
    citationKey: "[2]",
    type: "project-docs",
    title: "Resilient Multi-Agent Microgrid Dispatch Technical Documentation",
    authors: ["Arjun R"],
    venueOrPlatform: "Technical Project Documentation & Simulation Harness",
    year: "2025",
    details: "Implementation architecture combining IEEE 33-bus Pandapower power flow simulation, trust-filtering heuristics, and LLM diagnostic copilot.",
    isPending: false
  },
  {
    id: "ref-3",
    citationKey: "[3]",
    type: "project-docs",
    title: "CONTRA: Adversarial Dialectical Research Engine Specification",
    authors: ["Arjun R"],
    venueOrPlatform: "Technical Specification & Architecture Repository",
    year: "2025",
    details: "System design for claim decomposition, dual Advocate-Skeptic agent prompt orchestration, and structured evidence ledgers.",
    isPending: false
  },
  {
    id: "ref-4",
    citationKey: "[4]",
    type: "project-docs",
    title: "Sine2Times: Diagnostic Traversal on Concept Dependency DAGs",
    authors: ["Arjun R"],
    venueOrPlatform: "Technical Project Documentation",
    year: "2025",
    details: "Bayesian Knowledge Tracing integration with SymPy deterministic mathematical equivalence checking.",
    isPending: false
  }
];

export const appendixItems: AppendixItem[] = [
  {
    id: "app-resume",
    label: "Appendix A. Curriculum Vitae",
    description: "Complete formal resume detailing technical background, internship experience, coursework, and contact information.",
    format: "PDF Document",
    actionLabel: "Download Resume (PDF)",
    url: "/resume/Arjun_R_Resume.pdf",
    isAvailable: true,
    statusTag: "Ready for Download"
  },
  {
    id: "app-paper",
    label: "Appendix B. Research Manuscript (ICISC 2026)",
    description: "Pre-print / camera-ready manuscript: 'Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning'.",
    format: "PDF Document",
    actionLabel: "View Document Notice",
    url: "/papers/Bias_Free_AI_Placement_ICISC2026.pdf",
    isAvailable: false,
    statusTag: "Publication Pending"
  },
  {
    id: "app-repos",
    label: "Appendix C. GitHub Code Repositories",
    description: "Source code repositories, benchmark harnesses, and documentation for engineering projects.",
    format: "Git Repository",
    actionLabel: "Open GitHub Profile [Placeholder]",
    url: "https://github.com/placeholder-arjunr",
    isAvailable: false,
    statusTag: "Placeholder Link"
  }
];
