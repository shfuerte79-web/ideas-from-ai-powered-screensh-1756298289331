import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Smart Annotation Assistant",
    "one_liner": "Turn your screenshots into organized notes with automated tagging and summarization.",
    "why_now": "Remote work and digital collaboration are at an all-time high, necessitating efficient note-taking.",
    "novel_mechanism": "Combines OCR with natural language processing to create contextual annotations.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Vision"
    ],
    "edge_use_cases": [
      "Students organizing lecture notes",
      "Professionals compiling meeting notes",
      "Researchers annotating articles"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot capture",
        "OCR text extraction",
        "Automatic tagging"
      ],
      "tools": [
        "React",
        "Firebase",
        "OpenAI API",
        "Zapier"
      ],
      "data_bootstrap": [
        "Public repository of annotated documents",
        "User-uploaded screenshots"
      ],
      "risk": [
        "User privacy concerns",
        "Accuracy of OCR"
      ],
      "mitigation": [
        "Use end-to-end encryption",
        "Implement a feedback loop to improve OCR accuracy"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Before your next meeting, take smart notes!",
        "Transform chaos into clarity instantly."
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Email newsletters targeting students and professionals"
      ],
      "pricing": {
        "free": "5 notes/month",
        "pro": "$5/month",
        "business": "$20/month for teams"
      }
    },
    "moat": [
      "User-generated training data improves model",
      "Niche targeting for student and professional markets",
      "Potential integrations with existing productivity tools"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "The combination of OCR and NLP in a context-aware annotation tool outperforms traditional note-taking methods and existing OCR tools without context."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}