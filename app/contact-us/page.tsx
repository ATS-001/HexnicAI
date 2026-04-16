"use client"

import { useState, useEffect } from "react"
import { BrownianMotion } from "@/components/brownian-motion"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedText } from "@/components/animated-text"
import { ArrowLeft, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const team = [
  {
    initials: "ATS",
    name: "Aaron Thalakkottor Sooraj",
    role: "Founder & Lead",
    linkedin: "https://www.linkedin.com/in/aaronts127pdz/",
    email: "aaronsooraj001@gmail.com",
  },
  {
    initials: "AT",
    name: "Alwin Thomas V",
    role: "Co-Developer",
    linkedin: "https://www.linkedin.com/in/alwin-thomas-v-033057384/",
  },
  {
    initials: "AN",
    name: "Abhinav N",
    role: "Co-Developer",
    linkedin: "https://www.linkedin.com/in/abhinav-n-713a84383/",
  },
  {
    initials: "AB",
    name: "Adithya Binesh",
    role: "Lead & Co-Developer",
    linkedin: "https://www.linkedin.com/in/adithya-binesh-631270388/",
  },
  {
    initials: "AJ",
    name: "Adithya Jayakrishnan",
    role: "Co-Developer",
    linkedin: "https://www.linkedin.com/in/adithya-jayakrishnan-92a46b338/",
  },
]

export default function ContactUsPage() {
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
          Loading Contact Us...
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

        <AnimatedText animation="fade-up" className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with our team members directly or send us your feedback. We'd love to hear from you!
          </p>
        </AnimatedText>

        {/* Team Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <AnimatedCard
              key={index}
              animation="fade-up"
              delay={index * 50}
              className="bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 p-6 rounded-xl text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.role}</p>
              <div className="flex gap-2 justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300"
                  >
                    <Mail size={18} />
                  </a>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Feedback Section */}
        <AnimatedCard
          animation="fade-up"
          delay={300}
          className="bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 text-center"
        >
          <AnimatedText animation="fade-up">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Send Us Your Feedback
            </h2>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={100}>
            <p className="text-muted-foreground mb-8">
              Help us improve HexnicAI by sharing your thoughts and suggestions.
            </p>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={200}>
            <AnimatedButton
              href="https://forms.gle/JScLaZhBx8YLofV9A"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              <Mail size={16} />
              Send Feedback
            </AnimatedButton>
          </AnimatedText>
        </AnimatedCard>
      </div>
    </div>
  )
}
