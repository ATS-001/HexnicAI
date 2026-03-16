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
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
