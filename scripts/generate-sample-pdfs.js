const fs = require('fs');
const path = require('path');

function createPdf(title, subtitle, lines, outputPath) {
  // Simple PDF 1.4 generator with basic Helvetica text stream
  const contentStream = [
    'BT',
    '/F1 18 Tf',
    '50 780 Td',
    `(${escapePdf(title)}) Tj`,
    '/F1 12 Tf',
    '0 -24 Td',
    `(${escapePdf(subtitle)}) Tj`,
    '0 -16 Td',
    '(------------------------------------------------------------------------------------------------) Tj',
    '0 -24 Td',
    '/F1 10 Tf',
  ];

  let currentYOffset = 0;
  for (const line of lines) {
    if (line === '') {
      contentStream.push('0 -14 Td');
    } else {
      contentStream.push(`(${escapePdf(line)}) Tj`);
      contentStream.push('0 -14 Td');
    }
  }

  contentStream.push('ET');
  const streamData = contentStream.join('\n');
  const streamLength = Buffer.byteLength(streamData, 'utf-8');

  const pdfData = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595.28 841.89]
  /Resources <<
    /Font <<
      /F1 4 0 R
    >>
  >>
  /Contents 5 0 R
>>
endobj
4 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
5 0 obj
<<
  /Length ${streamLength}
>>
stream
${streamData}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000262 00000 n 
0000000341 00000 n 
trailer
<<
  /Size 6
  /Root 1 0 R
>>
startxref
${450 + streamLength}
%%EOF`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pdfData);
}

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

const resumeLines = [
  'ARJUN R - AI Developer | Research Engineer | Software Developer',
  'Location: Chennai, India | Email: arjunr3773@gmail.com | Phone: +91 63859 20987',
  'Education: B.Tech in Artificial Intelligence, SRM Institute of Science and Technology (2023-2027), CGPA: 8.13/10',
  '',
  'SUMMARY:',
  'Artificial Intelligence undergraduate with engineering internship experience and applied machine learning research.',
  'Focused on fairness-aware ML, multi-agent systems, Generative AI, RAG, and backend software engineering.',
  '',
  'RESEARCH CONTRIBUTIONS:',
  '- Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning (ICISC 2026)',
  '  Demographic parity disparity reduced from 17.9% to 2.3% with 92.8% hiring classification accuracy.',
  '  Evaluated across 1,200 candidate records and 50 corporate recruiting profiles.',
  '',
  'ENGINEERING INTERNSHIPS:',
  '- KNS Law Chambers (Software Developer Intern, Jan 2025 - Dec 2025)',
  '  * Built agentic property intelligence system indexing multi-bank auction records and flagging ownership conflicts.',
  '  * Developed internal compliance auditing platform with structured verification check gates.',
  '- Grand Magnum Housing Pvt. Ltd. (Software Developer Intern, Jun 2025 - Aug 2025)',
  '  * Developed executive operations dashboard to monitor cross-department activities and task escalation.',
  '',
  'TECHNICAL PROJECTS:',
  '- Resilient Multi-Agent Energy Management System (FastAPI, Pandapower, Gymnasium, RAG, LLM Copilot)',
  '- CONTRA: Adversarial Multi-Agent Research Engine (FastAPI, Gemini, Next.js, Pydantic, RAG)',
  '- Sine2Times: Diagnostic Mathematics Tutor (FastAPI, React, SymPy, Bayesian Knowledge Tracing)',
  '',
  'TECHNICAL SKILLS:',
  'Languages: Python, Java, C, C++, SQL | ML/AI: Generative AI, LLMs, RAG, Multi-Agent Systems, Scikit-learn, PyTorch',
  'Frameworks: FastAPI, React, Next.js, Pandapower, SymPy | Fundamentals: Algorithms, DBMS, OOP, OS',
  '',
  'Note: Full formal CV document placeholder. Replace with your camera-ready PDF file.'
];

const paperLines = [
  'ICISC 2026 Conference Manuscript Notice',
  'Title: Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning',
  'Author: Arjun R (Department of Artificial Intelligence, SRM Institute of Science and Technology)',
  'Venue: International Conference on Intelligent Systems and Computing (ICISC 2026)',
  '',
  'ABSTRACT:',
  'Automated campus placement screening algorithms frequently inherit demographic selection disparities',
  'present in historical recruitment data. This research develops a rule-augmented machine learning framework',
  'incorporating Fairlearn mitigation algorithms to bound demographic parity disparities without compromising',
  'selection precision across an empirical cohort of 1,200 candidates and 50 recruiting firms.',
  '',
  'REPORTED EMPIRICAL METRICS:',
  '- Initial Demographic Parity Gap: 17.9% (Baseline Unmitigated Model)',
  '- Final Demographic Parity Gap: 2.3% (Rule-Augmented Fairlearn Mitigation)',
  '- Reported Hiring Accuracy: 92.8% (Test Cohort Classification Validity)',
  '- Relative Disparity Improvement: 87.2% reduction in demographic selection gap',
  '',
  'PUBLICATION STATUS:',
  'This pre-print manuscript placeholder is pending official conference camera-ready proceedings publication.',
  'For full manuscript inquiries or review access, contact: arjunr3773@gmail.com'
];

createPdf(
  'Curriculum Vitae - Arjun R',
  'Academic and Engineering Profile | B.Tech Artificial Intelligence',
  resumeLines,
  path.join(__dirname, '../public/resume/Arjun_R_Resume.pdf')
);

createPdf(
  'Research Manuscript - ICISC 2026',
  'Bias-Free AI-Driven Placement Automation Using Rule-Augmented Machine Learning',
  paperLines,
  path.join(__dirname, '../public/papers/Bias_Free_AI_Placement_ICISC2026.pdf')
);

console.log('Sample PDFs generated successfully!');
