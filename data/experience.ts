export interface ExperienceItem {
  id: string;
  sectionNumber: string;
  organization: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  isEngineeringInternship: boolean;
  contributions: {
    title?: string;
    details: string[];
  }[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "kns-law-chambers",
    sectionNumber: "3.1",
    organization: "KNS LAW CHAMBERS",
    role: "Software Developer Intern",
    duration: "January 2025 – December 2025",
    location: "Chennai, India",
    summary: "Worked on software solutions for legal operations and property intelligence.",
    isEngineeringInternship: true,
    contributions: [
      {
        title: "Agentic Property Intelligence System",
        details: [
          "Engineered an agentic property intelligence system that indexes multi-bank auction listings and distressed asset collateral notices.",
          "Implemented algorithms to detect duplicate property records across disparate institutional registries and flag potential ownership conflicts for senior legal review."
        ]
      },
      {
        title: "Internal Compliance Auditing Platform",
        details: [
          "Developed an internal compliance auditing platform to improve workflow tracking and evidence verification across active legal matters.",
          "Established structured logging and procedural check gates to maintain verifiable audit trails for regulatory and procedural compliance."
        ]
      }
    ]
  },
  {
    id: "grand-magnum-housing",
    sectionNumber: "3.2",
    organization: "GRAND MAGNUM HOUSING PVT. LTD.",
    role: "Software Developer Intern",
    duration: "June 2025 – August 2025",
    location: "Chennai, India",
    summary: "Worked on software solutions for business operations and management.",
    isEngineeringInternship: true,
    contributions: [
      {
        title: "Executive Operations Dashboard & Task Tracking",
        details: [
          "Built a centralized executive operations dashboard to monitor departmental activities and operational deliverables in real time.",
          "Engineered task progress tracking mechanisms and automated escalation pathways for overdue milestones.",
          "Contributed to improving cross-team communication, reporting fidelity, and overall operational visibility for management."
        ]
      }
    ]
  },
  {
    id: "aiesec-in-chennai",
    sectionNumber: "3.3",
    organization: "AIESEC IN CHENNAI",
    role: "Senior MB Member & Team Leader",
    duration: "February 2024 – February 2025",
    location: "Chennai, India",
    summary: "Student leadership in operations, planning, and cross-functional team coordination.",
    isEngineeringInternship: false,
    contributions: [
      {
        title: "Operations & Leadership",
        details: [
          "Led student operations across logistics, budget planning, and exchange programs.",
          "Coordinated cross-functional student teams and advanced through progressive leadership roles within the organization."
        ]
      }
    ]
  }
];
