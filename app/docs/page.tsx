"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BrownianMotion } from "@/components/brownian-motion"

export default function DocsPage() {
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
          Loading Documentation...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BrownianMotion />
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">Documentation</h1>

        <div className="space-y-8">
          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to HexnicAI! This platform combines AI-powered learning tools designed to make education more personalized and accessible for everyone.
            </p>
            <p className="text-muted-foreground">
              Explore our modules below to find the tools that best suit your learning needs.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Modules</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">StudyAI</h3>
                <p className="text-muted-foreground mb-2">
                  An AI-driven study planner that intelligently adjusts your study time based on subject difficulty and your learning patterns.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Personalized study schedules</li>
                  <li>Difficulty-based time allocation</li>
                  <li>Progress tracking and analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Speak Easy</h3>
                <p className="text-muted-foreground mb-2">
                  Assistive tools designed for inclusive learning and speech support, helping users communicate more effectively.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Text-to-speech functionality</li>
                  <li>Speech recognition support</li>
                  <li>Accessibility-first design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">FocusAI</h3>
                <p className="text-muted-foreground mb-2">
                  Coming soon - Assistive tools designed to help you maintain focus and improve learning outcomes.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Support</h2>
            <p className="text-muted-foreground mb-4">
              Need help? Have questions or suggestions? We are here to assist you.
            </p>
            <p className="text-muted-foreground">
              Contact us at:{" "}
              <a href="mailto:aaronsooraj001@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                aaronsooraj001@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
