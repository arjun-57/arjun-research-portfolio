export interface ResearchMetric {
  metric: string;
  initialValue: string;
  finalValue: string;
  note?: string;
}

export interface ResearchData {
  title: string;
  venue: string;
  venueFull: string;
  year: number;
  authors: string[];
  status: "Accepted / In Press" | "Under Review" | "Published";
  statusNote: string;
  paperPdf: {
    url: string;
    isAvailable: boolean;
    notice: string;
  };
  abstract: string;
  dataset: {
    candidates: number;
    companies: number;
    description: string;
  };
  metrics: {
    initialParityGap: number;
    finalParityGap: number;
    accuracy: number;
  };
  comparisonTable: ResearchMetric[];
  subsections: {
    motivation: {
      title: string;
      paragraphs: string[];
    };
    approach: {
      title: string;
      paragraphs: string[];
      frameworks: string[];
    };
    results: {
      title: string;
      paragraphs: string[];
    };
    impact: {
      title: string;
      paragraphs: string[];
    };
  };
  bibtex: string;
}

export const researchData: ResearchData = {
  title: "Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning",
  venue: "ICISC 2026",
  venueFull: "International Conference on Intelligent Systems and Computing (ICISC 2026)",
  year: 2026,
  authors: ["Arjun R"],
  status: "Accepted / In Press",
  statusNote: "Official proceedings publication pending conference camera-ready release.",
  paperPdf: {
    url: "/papers/Bias_Free_AI_Placement_ICISC2026.pdf",
    isAvailable: false,
    notice: "Full paper publication link pending final conference proceedings release (ICISC 2026)."
  },
  abstract:
    "Automated campus placement screening algorithms frequently inherit demographic selection disparities present in historical recruitment data. This research develops a rule-augmented machine learning framework incorporating Fairlearn mitigation algorithms to bound demographic parity disparities without compromising selection precision across an empirical cohort of 1,200 candidates and 50 recruiting firms.",
  dataset: {
    candidates: 1200,
    companies: 50,
    description: "Evaluated on historical placement cohort records spanning 1,200 candidate profiles evaluated against recruitment requirements of 50 participating corporate firms."
  },
  metrics: {
    initialParityGap: 17.9,
    finalParityGap: 2.3,
    accuracy: 92.8
  },
  comparisonTable: [
    {
      metric: "Initial demographic parity gap",
      initialValue: "17.9%",
      finalValue: "—",
      note: "Unmitigated baseline model"
    },
    {
      metric: "Final demographic parity gap",
      initialValue: "—",
      finalValue: "2.3%",
      note: "After Fairlearn rule-augmented mitigation"
    },
    {
      metric: "Reported hiring accuracy",
      initialValue: "—",
      finalValue: "92.8%",
      note: "Classification accuracy maintained on test cohort"
    }
  ],
  subsections: {
    motivation: {
      title: "2.1 Research Motivation",
      paragraphs: [
        "Campus recruitment and entry-level talent acquisition workflows increasingly rely on algorithmic screening to evaluate candidate qualifications at scale. However, when machine learning models are trained directly on historical hiring logs, they risk amplifying systemic demographic selection disparities.",
        "In university placement ecosystems, unequal interview shortlist rates across demographic subgroups can perpetuate unfair structural disadvantages. The core research challenge addressed is mitigating demographic parity disparities in candidate shortlisting without degrading the predictive validity and operational accuracy required by hiring organizations."
      ]
    },
    approach: {
      title: "2.2 Proposed Approach",
      paragraphs: [
        "The proposed architecture couples rule-augmented pre-filtering with constrained fair classification using the open-source Fairlearn library. Rather than treating hiring decisions as an unconstrained score optimization problem, the system enforces demographic parity constraints during model optimization.",
        "Candidate attributes are processed through domain-specific deterministic business rules to ensure fundamental eligibility compliance. Subsequently, reduction algorithms (such as Exponentiated Gradient with demographic parity bounds) re-weight and optimize classifier thresholds across protected attributes, ensuring equal probability of selection regardless of demographic group identity while maximizing overall matching accuracy."
      ],
      frameworks: ["Fairlearn", "Scikit-learn", "Python", "Pandas", "Rule-Based Post-Processing"]
    },
    results: {
      title: "2.3 Experimental Results",
      paragraphs: [
        "The experimental framework was evaluated against a candidate dataset of 1,200 applicants applying to 50 distinct corporate employers. Metrics were recorded comparing the unmitigated baseline against the rule-augmented fairness-constrained model.",
        "The initial demographic parity gap measured at 17.9% in the baseline recruitment model. Under the proposed rule-augmented Fairlearn pipeline, the demographic parity gap was reduced to 2.3%—an absolute reduction of 15.6 percentage points (87.2% relative improvement)—while sustaining a high reported hiring accuracy of 92.8% on the test dataset."
      ]
    },
    impact: {
      title: "2.4 Research Impact",
      paragraphs: [
        "This study demonstrates that algorithmic fairness and commercial predictive accuracy are not mutually exclusive in institutional placement pipelines. By integrating mathematically sound fairness constraints into machine learning recruitment tools, institutions can proactively prevent demographic bias, protect student equity, and provide employers with high-caliber, unbiased talent pools.",
        "The findings emphasize the critical role of responsible AI methodologies and constraint-aware optimization in sensitive algorithmic decision-making environments."
      ]
    }
  },
  bibtex: `@inproceedings{arjun2026biasfree,
  title     = {Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning},
  author    = {Arjun, R.},
  booktitle = {Proceedings of the International Conference on Intelligent Systems and Computing (ICISC 2026)},
  year      = {2026},
  note      = {Reported demographic parity reduction: 17.9% to 2.3%; Accuracy: 92.8%}
}`
};

