"use client"

import { useState, useEffect } from "react"
import { BrownianMotion } from "@/components/brownian-motion"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    title: "StudyAI",
    description: "AI-driven planner that adjusts study time based on subject difficulty.",
    link: "https://studyai-2026.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "Speak Easy",
    description: "Assistive tools designed for inclusive learning and speech support.",
    link: "https://speak-easy-tools.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "IT-Workshop",
    description: "VIVA & LAB Exam Questions of BTECH CSE Semester 2 IT Workshop",
    link: "https://it-workshops2-2024.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "C Program Master",
    description: "Dedicated resource for C Lab practice.",
    link: "https://c-program-nine.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "FocusAI",
    description: "Assistive tools designed for learning.",
    link: "https://focusai-study-suite.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "KTU Discrete Math",
    description: "Assistive tools designed for learning Discrete Math.",
    link: "https://discrete-maths-model-paper24.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "CImp",
    description: "Dedicated resource for C Program & Theory practice",
    link: "#",
    linkText: "Explore",
  },
  {
    title: "Coming Soon",
    description: "We are constantly building more tools for personalized learning.",
    link: null,
    linkText: null,
  },
]

export default function ModulesPage() {
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
          Loading Modules...
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
          className="inline-flex items-center gap-2 mb-8 text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <AnimatedText animation="fade-up" className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
            Our Modules
          </h1>
          <p className="text-muted-foreground text-lg mt-3">
            Explore all the AI-powered tools and resources available in the HexnicAI ecosystem.
          </p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <AnimatedCard
              key={index}
              animation="fade-up"
              delay={index * 50}
              className="bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 p-6 rounded-xl hover:shadow-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-foreground">{module.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{module.description}</p>
              {module.link ? (
                <a
                  href={module.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg"
                >
                  {module.linkText}
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-full font-semibold text-sm opacity-50 cursor-not-allowed"
                >
                  {module.linkText || "Coming Soon"}
                </button>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
