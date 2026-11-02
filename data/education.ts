export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  duration: string;
  cgpa: string;
  location: string;
  courseworkHighlights?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  badgeType: "Cloud & AI" | "Engineering & Security" | "Academic Workshop" | "Foundational";
}

export const educationData: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Artificial Intelligence",
  institution: "SRM Institute of Science and Technology",
  duration: "August 2023 – 2027",
  cgpa: "8.13 / 10.0",
  location: "Chennai, India",
  courseworkHighlights: [
    "Machine Learning & Pattern Recognition",
    "Deep Learning Architectures",
    "Data Structures & Design of Algorithms",
    "Database Management Systems",
    "Operating Systems & Distributed Systems"
  ]
};

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-azure-ai",
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    badgeType: "Cloud & AI"
  },
  {
    id: "cert-github-copilot",
    name: "GitHub Copilot for Cloud and Development",
    issuer: "GitHub",
    badgeType: "Engineering & Security"
  },
  {
    id: "cert-google-cybersecurity",
    name: "Google Foundations of Cybersecurity & Risk Management",
    issuer: "Google",
    badgeType: "Engineering & Security"
  },
  {
    id: "cert-iitm-technobyte",
    name: "IIT Madras Techno Byte Workshop – AI, ML & Deep Learning",
    issuer: "IIT Madras",
    badgeType: "Academic Workshop"
  },
  {
    id: "cert-c-programming",
    name: "Mastering C Programming for Beginners",
    issuer: "Udemy",
    badgeType: "Foundational"
  }
];

