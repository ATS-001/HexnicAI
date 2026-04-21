"use client"

import { useState, useEffect } from "react"
import { BrownianMotion } from "@/components/brownian-motion"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft, Linkedin } from "lucide-react"
import Link from "next/link"

const team = [
  {
    initials: "ATS",
    name: "Aaron Thalakkottor Sooraj",
    role: "Founder & Lead (HexnicAI)\nCo-Developer (StudyAI)\nDeveloper (IT-Workshop)\nDeveloper (KTU Discrete Math)\nDeveloper (CImp)\nDeveloper (EEIPR)",
    linkedin: "https://www.linkedin.com/in/aaronts127pdz/",
  },
  {
    initials: "AT",
    name: "Alwin Thomas V",
    role: "Co-Developer (StudyAI)",
    linkedin: "https://www.linkedin.com/in/alwin-thomas-v-033057384/",
  },
  {
    initials: "AN",
    name: "Abhinav N",
    role: "Co-Developer (Speak Easy Tools)\nDeveloper (C Program Master)",
    linkedin: "https://www.linkedin.com/in/abhinav-n-713a84383/",
  },
  {
    initials: "AB",
    name: "Adithya Binesh",
    role: "Lead & Co-Developer (Speak Easy Tools)\nDeveloper (FocusAI)",
    linkedin: "https://www.linkedin.com/in/adithya-binesh-631270388/",
  },
  {
    initials: "AS",
    name: "Adhin Seby",
    role: "Co-Developer & Tester",
    linkedin: "https://www.linkedin.com/in/adhin-seby-4b6b45384/",
  },
  {
    initials: "AK",
    name: "Akshay T S",
    role: "Co-Developer & Tester",
    linkedin: "https://www.linkedin.com/in/akshay-t-s-487b90382/",
  },
]

export default function AboutUsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[10000]">
        <div className="relative">
          <img
            src="/logo.png"
            alt="HexnicAI Logo"
            className="w-24 h-24 object-contain animate-pulse"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
        </div>
        <p className="mt-6 text-lg font-semibold text-blue-600 dark:text-blue-400 animate-pulse">
          Loading About Us...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BrownianMotion />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <AnimatedText animation="fade-up" className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            About the Founder
          </h1>
          <p className="text-muted-foreground text-lg">
            Meet the team behind HexnicAI (part of ATS_PDZ)
          </p>
        </AnimatedText>

        {/* Founder Section */}
        <AnimatedCard
          animation="fade-up"
          delay={0}
          className="bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 p-8 md:p-12 rounded-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-4xl">
                ATS
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-2">Aaron Thalakkottor Sooraj</h2>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                Founder & Lead Developer of HexnicAI
              </p>
              <p className="text-muted-foreground mb-3">
                Student at <strong>Vidya Academy of Science and Technology</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aaron is the visionary founder of HexnicAI, an AI-powered educational platform designed to transform how students learn. His leadership in building the HexnicAI ecosystem, combined with his technical expertise, has enabled the development of StudyAI, SpeakEasy, and other tools that benefit thousands of students. Through ATS_PDZ, he continues to innovate in educational technology.
              </p>
              <a
                href="https://www.linkedin.com/in/aaronts127pdz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </AnimatedCard>

        {/* Team Section */}
        <AnimatedText animation="fade-up" className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Team Members</h2>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <AnimatedCard
              key={index}
              animation="fade-up"
              delay={(index + 1) * 50}
              className="bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 p-6 rounded-xl text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-semibold text-sm transition-all duration-300"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
