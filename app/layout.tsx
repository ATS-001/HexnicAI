import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HexnicAI | AI Learning Platform with StudyAI, SpeakEasy Tools & FocusAI',
  description: 'HexnicAI is an AI-powered learning platform that helps students study smarter. Featuring StudyAI for smart timetables, SpeakEasy accessibility tools, and FocusAI – a GPT-like AI assistant coming soon.',
  keywords: [
    'HexnicAI', 'StudyAI', 'SpeakEasy Tools', 'FocusAI', 'AI study planner',
    'AI timetable generator', 'student productivity AI', 'AI learning assistant',
    'AI study tools', 'smart study planner', 'AI timetable generator for students',
    'study planning AI', 'voice accessibility tools', 'text to speech learning tools',
    'dyslexia learning tools', 'AI education platform', 'AI student assistant',
    'AI powered study schedule', 'AI productivity tools for students',
    'study automation tools', 'learning accessibility AI', 'student time management AI',
    'smart learning platform', 'AI academic tools', 'AI study companion',
    'AI voice learning tools', 'AI accessibility tools', 'AI powered learning platform'
  ],
  authors: [{ name: 'HexnicAI Team' }],
  generator: 'v0.app',
  applicationName: 'HexnicAI',
  robots: 'index, follow',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    google: 'YdyjQQrxiPXv72EHfQr1Ilffq4IJOtRnqljLC5yKE4s',
  },
  openGraph: {
    title: 'HexnicAI – AI Tools for Smarter Learning',
    description: 'HexnicAI provides AI tools for students including StudyAI timetable generation, SpeakEasy accessibility tools, and FocusAI – a GPT-like AI assistant coming soon.',
    type: 'website',
    url: 'https://hexnicai.vercel.app',
    images: [
      {
        url: 'https://hexnicai.vercel.app/preview.png',
        width: 1200,
        height: 630,
        alt: 'HexnicAI - AI Tools for Smarter Learning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HexnicAI – AI Tools for Students',
    description: 'Study smarter with HexnicAI. Includes StudyAI timetable generator, SpeakEasy accessibility tools, and FocusAI AI assistant.',
    images: ['https://hexnicai.vercel.app/preview.png'],
  },
  appleWebApp: {
    title: 'HexnicAI',
  },
  other: {
    'theme-color': '#0f172a',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HexnicAI",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description": "HexnicAI is an AI-powered educational platform providing StudyAI timetable generation, SpeakEasy accessibility tools, and FocusAI AI assistant.",
  "url": "https://hexnicai.vercel.app",
  "creator": {
    "@type": "Organization",
    "name": "HexnicAI"
  },
  "featureList": [
    "StudyAI Smart Timetable Generator",
    "SpeakEasy Accessibility Tools",
    "FocusAI AI Assistant (Coming Soon)",
    "AI Study Planner",
    "Text-to-Speech Learning Tools",
    "Voice-Based Learning Assistance"
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HexnicAI (Hexnic AI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI (also known as Hexnic AI) is an AI-based personalized and inclusive learning platform designed to help students manage their studies efficiently. It offers smart tools like timetable generation, accessibility features, and AI-powered study assistance."
      }
    },
    {
      "@type": "Question",
      "name": "How does HexnicAI help students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI helps students by creating optimized study schedules, improving productivity, and providing tools like voice interaction and text-to-speech. It supports better time management and personalized learning experiences."
      }
    },
    {
      "@type": "Question",
      "name": "What features does HexnicAI include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI includes an AI-powered timetable generator, balanced study scheduling, dyslexia-friendly reading interface, text-to-speech functionality, voice interaction support, and accessibility-focused learning tools."
      }
    },
    {
      "@type": "Question",
      "name": "Is HexnicAI useful for students with dyslexia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, HexnicAI is designed with inclusivity in mind. It offers dyslexia-friendly reading modes, text-to-speech features, and accessibility tools that make learning easier for students with reading difficulties."
      }
    },
    {
      "@type": "Question",
      "name": "Who developed HexnicAI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI was developed by students of Vidya Academy of Science and Technology, including Aaron Thalakkottor Sooraj and his team."
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
