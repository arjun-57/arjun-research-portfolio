export interface ProfileData {
  name: string;
  titles: string[];
  tagline: string;
  department: string;
  institution: string;
  location: string;
  email: string;
  phone: string;
  linkedin: {
    url: string;
    isPlaceholder: boolean;
  };
  github: {
    url: string;
    isPlaceholder: boolean;
  };
  resumePdfUrl: string;
  paperPdfUrl: string;
  abstract: string;
  keywords: string[];
  introduction: string[];
  profileAttributes: {
    attribute: string;
    details: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Arjun R",
  titles: [
    "AI Developer",
    "Research Engineer",
    "Software Developer"
  ],
  tagline: "Building intelligent systems through research, engineering, and experimentation.",
  department: "Department of Artificial Intelligence",
  institution: "SRM Institute of Science and Technology",
  location: "Chennai, India",
  email: "arjunr3773@gmail.com",
  phone: "+91 63859 20987",
  linkedin: {
    url: "https://www.linkedin.com/in/placeholder-arjunr",
    isPlaceholder: true
  },
  github: {
    url: "https://github.com/arjun-57",
    isPlaceholder: false
  },
  resumePdfUrl: "/resume/Arjun_R_Resume.pdf",
  paperPdfUrl: "/papers/Bias_Free_AI_Placement_ICISC2026.pdf",
  abstract:
    "I am an Artificial Intelligence undergraduate interested in building practical AI systems and software applications. My work spans fairness-aware machine learning, multi-agent systems, Generative AI, research automation, and adaptive learning. Through internships, research, and independent projects, I have explored how intelligent systems can improve decision-making, automate workflows, and solve real-world problems.",
  keywords: [
    "Artificial Intelligence",
    "Generative AI",
    "Multi-Agent Systems",
    "Machine Learning",
    "RAG",
    "Backend Engineering",
    "Responsible AI"
  ],
  introduction: [
    "I am currently pursuing a B.Tech in Artificial Intelligence at SRM Institute of Science and Technology.",
    "My interests lie at the intersection of AI research and software engineering. I enjoy understanding complex problems, designing systems around them, and turning those ideas into working applications.",
    "My experience includes developing software for legal and business workflows, experimenting with multi-agent AI architectures, and researching fairness-aware machine learning.",
    "I am particularly interested in building AI systems that are useful, explainable, and reliable in real-world environments."
  ],
  profileAttributes: [
    { attribute: "Education", details: "B.Tech Artificial Intelligence" },
    { attribute: "Institution", details: "SRM Institute of Science and Technology" },
    { attribute: "CGPA", details: "8.13/10" },
    { attribute: "Graduation", details: "2027" },
    { attribute: "Location", details: "Chennai, India" }
  ]
};

