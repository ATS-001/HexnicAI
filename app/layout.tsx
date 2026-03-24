import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HexnicAI (Hexnic AI) – AI Learning Platform with StudyAI, SpeakEasy & FocusAI',
  description: 'HexnicAI (also known as Hexnic AI) is an AI-powered personalized learning platform featuring StudyAI smart timetable generation, SpeakEasy accessibility tools, and FocusAI assistant.',

  keywords: [
    'HexnicAI',
    'Hexnic AI',
    'Hexnic AI learning platform',
    'Hexnic AI project',
    'HexnicAI students project',
    'StudyAI',
    'SpeakEasy Tools',
    'FocusAI',
    'AI study planner',
    'AI timetable generator',
    'student productivity AI',
    'AI learning assistant',
    'AI study tools',
    'smart study planner',
    'AI timetable generator for students',
    'study planning AI',
    'voice accessibility tools',
    'text to speech learning tools',
    'dyslexia learning tools',
    'AI education platform',
    'AI student assistant',
    'AI powered study schedule',
    'AI productivity tools for students',
    'study automation tools',
    'learning accessibility AI',
    'student time management AI',
    'smart learning platform',
    'AI academic tools',
    'AI study companion',
    'AI voice learning tools',
    'AI accessibility tools',
    'AI powered learning platform'
  ],

  authors: [{ name: 'Aaron Thalakkottor Sooraj and Team HexnicAI' }],
  generator: 'Next.js',
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
    title: 'HexnicAI (Hexnic AI) – AI Tools for Smarter Learning',
    description: 'HexnicAI (Hexnic AI) provides AI tools for students including StudyAI timetable generation, SpeakEasy accessibility tools, and FocusAI AI assistant.',
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
    title: 'HexnicAI (Hexnic AI) – AI Tools for Students',
    description: 'Study smarter with HexnicAI (Hexnic AI). Includes StudyAI timetable generator, SpeakEasy accessibility tools, and FocusAI AI assistant.',
    images: ['https://hexnicai.vercel.app/preview.png'],
  },

  appleWebApp: {
    title: 'HexnicAI',
  },

  other: {
    'theme-color': '#0f172a',
  },
}

// ✅ STRUCTURED DATA (FIXED)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HexnicAI",
  "alternateName": "Hexnic AI",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web",
  "description": "HexnicAI (Hexnic AI) is an AI-powered educational platform providing StudyAI timetable generation, SpeakEasy accessibility tools, and FocusAI AI assistant.",
  "url": "https://hexnicai.vercel.app",
  "creator": [
    {
      "@type": "Person",
      "name": "Aaron Thalakkottor Sooraj"
    },
    {
      "@type": "Person",
      "name": "Abhinav N"
    },
    {
      "@type": "Person",
      "name": "Adin Seby"
    },
    {
      "@type": "Person",
      "name": "Adithya Binesh"
    },
    {
      "@type": "Person",
      "name": "Akshay T S"
    },
    {
      "@type": "Person",
      "name": "Alwin Thomas V"
    }
  ],
  "featureList": [
    "StudyAI Smart Timetable Generator",
    "SpeakEasy Accessibility Tools",
    "FocusAI AI Assistant",
    "AI Study Planner",
    "Text-to-Speech Learning Tools",
    "Voice-Based Learning Assistance"
  ]
}

// ✅ FAQ SCHEMA (ALREADY GOOD – SLIGHTLY OPTIMIZED)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HexnicAI (Hexnic AI)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI (also known as Hexnic AI) is an AI-based personalized and inclusive learning platform designed to help students manage their studies efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "How does HexnicAI help students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI helps students by generating smart study schedules, improving productivity, and providing accessibility tools like voice interaction and text-to-speech."
      }
    },
    {
      "@type": "Question",
      "name": "What features does HexnicAI include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI includes an AI-powered timetable generator, dyslexia-friendly interface, text-to-speech tools, and voice-based learning support."
      }
    },
    {
      "@type": "Question",
      "name": "Is HexnicAI useful for students with dyslexia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, HexnicAI offers accessibility tools such as dyslexia-friendly reading modes and text-to-speech features to support inclusive learning."
      }
    },
    {
      "@type": "Question",
      "name": "Who developed HexnicAI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HexnicAI was developed by students of Vidya Academy of Science and Technology including Aaron Thalakkottor Sooraj and his team."
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