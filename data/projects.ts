export interface ProjectArchitectureNode {
  step: number;
  label: string;
  role: string;
  detail: string;
  isCopilotOrExplanatory?: boolean;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  technologies: string[];
  abstract: string;
  problemStatement: string;
  technicalApproach: string[];
  keyContributions: string[];
  architectureTitle: string;
  architectureFigureNumber: string;
  architectureCaption: string;
  architectureFlow: ProjectArchitectureNode[];
  statusAndVerification: {
    status: string;
    implementedScope: string[];
    experimentalScope: string[];
    accuracyOrValidationNote: string;
  };
  links: {
    github: {
      url: string;
      isPlaceholder: boolean;
      label: string;
    };
    demo?: {
      url: string;
      isPlaceholder: boolean;
      label: string;
    };
  };
}

export const projectsData: ProjectData[] = [
  {
    id: "resilient-multi-agent-energy",
    number: "4.1",
    title: "Resilient Multi-Agent Energy Management System",
    tagline: "Decentralized microgrid dispatch with trust-aware anomaly filtering and explanatory LLM/RAG copilot",
    technologies: [
      "Python",
      "Pandapower",
      "Gymnasium",
      "FastAPI",
      "RAG",
      "LLMs"
    ],
    abstract:
      "An AI-based system designed to coordinate energy resources in a simulated microgrid.",
    problemStatement:
      "Modern distributed microgrids face high volatility from renewable generation, electric vehicle charging loads, and fluctuating market tariffs. Simultaneously, centralized grid controllers introduce single points of failure vulnerable to network latency, telemetry corruption, and compromised nodes. The challenge is maintaining dynamic power flow balance while screening for anomalous or compromised sensor signals, and delivering transparent, human-understandable explanations for dispatch decisions.",
    technicalApproach: [
      "Simulated an IEEE 33-bus radial distribution network utilizing Pandapower, driven by empirical German grid demand profiles and meteorological solar availability time-series.",
      "Formulated independent, decentralized resource agents representing photovoltaics (PV), battery energy storage systems (BESS), electric vehicles (EV), and wholesale market bidding.",
      "Engineered a trust-aware safety filter between agent action proposals and the simulation engine to flag potential false-data injections, out-of-bound telemetry, and network delay anomalies before power flow execution.",
      "Decoupled real-time dispatch control from natural language processing: integrated an LLM/RAG copilot strictly as an asynchronous explanatory layer that reads simulation logs and topology state to answer operator inquiries."
    ],
    keyContributions: [
      "Built a microgrid dispatcher on an IEEE 33-bus benchmark system using Pandapower and Gymnasium environments.",
      "Coordinated solar, battery, EV, and electricity market agents against German grid demand curves.",
      "Worked on a trust-aware safety filter to identify compromised nodes, false-data injection, and network delays.",
      "Integrated an LLM/RAG copilot to explain dispatch decisions and grid anomalies to operations personnel."
    ],
    architectureTitle: "Figure 1: Multi-Agent Microgrid Energy Management & Explanatory Architecture",
    architectureFigureNumber: "Figure 1",
    architectureCaption:
      "Figure 1: Information flow in the multi-agent microgrid system. Telemetry feeds individual resource agents whose proposals pass through an algorithmic trust filter before Pandapower power flow simulation. The LLM/RAG copilot operates purely as an explanatory interface for human operators, not as a real-time control actuator.",
    architectureFlow: [
      {
        step: 1,
        label: "Grid & Telemetry Inputs",
        role: "Data Ingestion",
        detail: "Solar irradiance, EV state-of-charge, market spot price, German grid demand"
      },
      {
        step: 2,
        label: "Individual Resource Agents",
        role: "Decentralized Policy",
        detail: "Dedicated agents for Solar PV, BESS storage, EV charging schedules, Market bids"
      },
      {
        step: 3,
        label: "Coordination Layer",
        role: "Multi-Agent Consensus",
        detail: "Aggregates resource schedules to balance expected load and generation targets"
      },
      {
        step: 4,
        label: "Trust & Safety Filter",
        role: "Integrity Verification",
        detail: "Flags out-of-bound sensor values, network delay deviations, and potential FDI anomalies"
      },
      {
        step: 5,
        label: "Power System Simulation",
        role: "Physics Engine (Pandapower)",
        detail: "Calculates AC load flow, bus voltage limits, and thermal branch loading on IEEE 33-bus"
      },
      {
        step: 6,
        label: "Dispatch Results & Telemetry",
        role: "Operational State",
        detail: "Optimal setpoints committed to battery storage and curtailment controls"
      },
      {
        step: 7,
        label: "LLM / RAG Explanatory Copilot",
        role: "Explanatory Interface (Not Real-time Control)",
        detail: "Provides post-hoc contextual explanations, telemetry summaries, and anomaly diagnoses to human operators",
        isCopilotOrExplanatory: true
      }
    ],
    statusAndVerification: {
      status: "Implemented Simulation & Benchmark Evaluation",
      implementedScope: [
        "IEEE 33-bus radial network model in Pandapower",
        "Deterministic heuristic & multi-agent resource coordination logic",
        "Simulated anomaly screening filter for synthetic injection testing",
        "FastAPI service with RAG document retrieval for explanatory prompts"
      ],
      experimentalScope: [
        "Multi-agent reinforcement learning (MARL) convergence under severe adversarial packet dropouts",
        "Formal verification of microgrid voltage stability boundaries"
      ],
      accuracyOrValidationNote:
        "Evaluated in synthetic simulation environments; real-time physical microgrid validation remains future experimental work."
    },
    links: {
      github: {
        url: "https://github.com/arjun-57/MARL",
        isPlaceholder: false,
        label: "GitHub Repository"
      }
    }
  },
  {
    id: "contra-adversarial-research-engine",
    number: "4.2",
    title: "CONTRA – Adversarial Multi-Agent Research Engine",
    tagline: "Autonomous dialectical research engine decomposing queries into verifiable claims under adversarial debate",
    technologies: [
      "Python",
      "FastAPI",
      "Gemini",
      "Next.js",
      "Pydantic",
      "Pandas",
      "RAG"
    ],
    abstract:
      "A research platform that breaks open-ended questions into smaller claims and examines them using opposing viewpoints.",
    problemStatement:
      "Single-prompt large language model research tools frequently display sycophancy, confirm user bias, and present superficial syntheses without stress-testing hypotheses against contradictory literature. Researchers lack tools that systematically pit affirmative evidence against skeptical counter-arguments with transparent provenance.",
    technicalApproach: [
      "Employs an initial decomposition module that converts broad, complex questions into a topological tree of discrete, falsifiable claims.",
      "Deploys two autonomous agents with specialized system prompts: an Advocate Agent instructed to find maximum confirming evidence and a Skeptic Agent instructed to identify counterexamples, methodological limitations, and conflicting studies.",
      "Implements an immutable evidence ledger with structured schema validation (Pydantic) to store excerpts, source metadata, and confidence assessments.",
      "Renders a responsive Next.js frontend displaying dialectical claim comparisons, confidence metrics, and verbatim evidence citations in real time."
    ],
    keyContributions: [
      "Developed a system that decomposes questions into verifiable claims.",
      "Used Advocate and Skeptic agents to examine supporting and opposing evidence.",
      "Implemented an evidence ledger and citation tracking.",
      "Created a real-time interface to display claims, confidence scores, and contradictory evidence."
    ],
    architectureTitle: "Figure 2: Dialectical Multi-Agent Claim Decomposition & Evidence Pipeline",
    architectureFigureNumber: "Figure 2",
    architectureCaption:
      "Figure 2: Architectural pipeline of CONTRA. User queries are decomposed into atomic claims. Opposing Advocate and Skeptic agents retrieve counterbalancing evidence into a structured ledger before final balanced synthesis.",
    architectureFlow: [
      {
        step: 1,
        label: "User Question Ingestion",
        role: "Query Processing",
        detail: "Accepts broad research queries or policy hypotheses"
      },
      {
        step: 2,
        label: "Claim Decomposition",
        role: "Pydantic Schemas",
        detail: "Extracts atomic, verifiable sub-claims requiring empirical evidence"
      },
      {
        step: 3,
        label: "Targeted Evidence Retrieval",
        role: "RAG & Corpus Search",
        detail: "Fetches relevant academic excerpts and documentation chunks"
      },
      {
        step: 4,
        label: "Advocate vs. Skeptic Agent Analysis",
        role: "Dialectical Debate",
        detail: "Advocate builds corroborating arguments; Skeptic challenges methodological validity and identifies counter-findings"
      },
      {
        step: 5,
        label: "Evidence Ledger & Citation Ledger",
        role: "Structured Storage",
        detail: "Logs claim IDs, supporting/refuting excerpts, source URLs, and confidence ratings"
      },
      {
        step: 6,
        label: "Real-Time Interface & Balanced Report",
        role: "Next.js / FastAPI UI",
        detail: "Renders side-by-side dialectical review with transparent citations and confidence indicators"
      }
    ],
    statusAndVerification: {
      status: "Functional Prototype",
      implementedScope: [
        "Claim decomposition engine utilizing structured JSON outputs via Pydantic",
        "Dual-prompt adversarial evaluation harness with Gemini API",
        "In-memory structured evidence ledger with exportable Markdown/JSON reports",
        "Next.js web interface showing comparative debate streams"
      ],
      experimentalScope: [
        "Automated Bayesian belief updating across iterative debate rounds",
        "Dynamic automated fact-checking across external paywalled research repositories"
      ],
      accuracyOrValidationNote:
        "The system surfaces conflicting viewpoints and citation trails; it does not claim total elimination of hallucinations or mathematically proven truth convergence."
    },
    links: {
      github: {
        url: "https://github.com/arjun-57/Research-Contra",
        isPlaceholder: false,
        label: "GitHub Repository"
      }
    }
  },
  {
    id: "sine2times-diagnostic-tutor",
    number: "4.3",
    title: "Sine2Times – Diagnostic Mathematics Tutor",
    tagline: "Adaptive mathematics assessment engine leveraging prerequisite concept graphs and symbolic verification",
    technologies: [
      "FastAPI",
      "React",
      "SymPy",
      "LLMs"
    ],
    abstract:
      "An adaptive mathematics learning platform that identifies knowledge gaps and adjusts learning based on student progress.",
    problemStatement:
      "When students struggle with advanced mathematical concepts (such as calculus or trigonometry), standard tutoring software often drills the failing topic repeatedly without isolating gaps in prerequisite foundations (such as algebraic factoring or trigonometric identities). Moreover, LLM-only tutors frequently make subtle arithmetic or symbolic manipulation errors.",
    technicalApproach: [
      "Modeled mathematical subject domains as a Directed Acyclic Graph (DAG) representing prerequisite relationships between core concepts.",
      "Constructed a binary-search-style diagnostic traversal engine that steps backward through prerequisite chains when a student demonstrates consistent errors, pinpointing root misconceptions in minimal steps.",
      "Implemented a Bayesian Knowledge Tracing (BKT) formulation to probabilistically update mastery estimates (slip and guess probabilities) per node.",
      "Integrated SymPy into the server backend to deterministically verify student mathematical expressions, validate algebraic equivalence, and compute exact derivative and integral solutions without relying on LLM arithmetic."
    ],
    keyContributions: [
      "Designed a prerequisite graph representing relationships between mathematical concepts.",
      "Used binary-search-style diagnosis to narrow down learning gaps.",
      "Implemented Bayesian Knowledge Tracing to estimate student mastery.",
      "Integrated SymPy to verify mathematical expressions and solutions."
    ],
    architectureTitle: "Figure 3: Diagnostic Traversal & Symbolic Verification Architecture",
    architectureFigureNumber: "Figure 3",
    architectureCaption:
      "Figure 3: Sine2Times diagnostic workflow. Student input triggers symbolic validation via SymPy, updates Bayesian mastery parameters on the prerequisite DAG, and selects targeted remediation queries.",
    architectureFlow: [
      {
        step: 1,
        label: "Student Math Input",
        role: "Expression Input",
        detail: "Step-by-step mathematical answers or algebraic derivations"
      },
      {
        step: 2,
        label: "Diagnostic Engine & Binary Traversal",
        role: "Gap Isolation",
        detail: "Traverses prerequisite hierarchy to identify root conceptual deficiency"
      },
      {
        step: 3,
        label: "Prerequisite Concept Graph",
        role: "Domain DAG",
        detail: "Directed graph linking foundational concepts to advanced mathematical topics"
      },
      {
        step: 4,
        label: "Mastery Estimation (BKT)",
        role: "Bayesian Knowledge Tracing",
        detail: "Updates concept-specific mastery probabilities incorporating slip and guess parameters"
      },
      {
        step: 5,
        label: "Adaptive Question Generator",
        role: "Remediation Engine",
        detail: "Generates targeted problem instances calibrated to the student's mastery frontier"
      },
      {
        step: 6,
        label: "SymPy Symbolic Verification",
        role: "Deterministic Engine",
        detail: "Verifies algebraic equivalence, equation solving, and calculus identities deterministically"
      },
      {
        step: 7,
        label: "Pedagogical Feedback & Remediation",
        role: "Feedback Delivery",
        detail: "Delivers step-by-step diagnostic feedback; SymPy verifies calculations, LLM structures explanatory prose"
      }
    ],
    statusAndVerification: {
      status: "Prototype Development",
      implementedScope: [
        "Curated prerequisite DAG for selected algebra and trigonometry modules",
        "FastAPI service connecting SymPy symbolic parser to evaluate student submissions",
        "Basic Bayesian Knowledge Tracing updating state variables per concept node",
        "React frontend for math formula rendering and response logging"
      ],
      experimentalScope: [
        "Automated extraction of arbitrary textbook prerequisite graphs",
        "Large-scale pedagogical trials across school cohorts"
      ],
      accuracyOrValidationNote:
        "SymPy deterministically verifies algebraic equivalence and math operations; qualitative natural-language explanations provided by LLMs are not formally proven by SymPy."
    },
    links: {
      github: {
        url: "https://github.com/arjun-57/Sin2Times",
        isPlaceholder: false,
        label: "GitHub Repository"
      }
    }
  }
];

