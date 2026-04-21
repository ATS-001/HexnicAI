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
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-10000">
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
      <BrownianMotion isDark={false} />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <ArrowLeft size={18} />
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
            <h2 className="text-2xl font-bold mb-4">StudyAI</h2>
            <p className="text-muted-foreground mb-4">
              An AI-driven study planner that intelligently adjusts your study time based on subject difficulty and your learning patterns.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Create personalized study schedules based on your subjects and availability</li>
              <li>AI adjusts difficulty levels based on your performance</li>
              <li>Track progress and get insights on your learning patterns</li>
              <li>Balance study time across multiple subjects intelligently</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Speak Easy</h2>
            <p className="text-muted-foreground mb-4">
              Assistive tools designed for inclusive learning and speech support, helping users communicate more effectively and learn at their own pace.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Text-to-speech functionality for better accessibility</li>
              <li>Speech recognition support for hands-free interaction</li>
              <li>Dyslexia-friendly reading modes and formatting</li>
              <li>Voice-based learning assistance</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">FocusAI</h2>
            <p className="text-muted-foreground mb-4">
              Assistive tools designed to help you maintain focus and improve learning outcomes with AI-powered recommendations.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Focus-enhancing features for better concentration</li>
              <li>AI-powered study assistance and guidance</li>
              <li>Personalized learning recommendations</li>
              <li>Progress tracking and performance insights</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Community Tools</h2>
            <p className="text-muted-foreground mb-4">
              Beyond the main platform, we've developed educational tools to support specific learning needs.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>IT-Workshop:</strong> VIVA & LAB exam questions for BTECH CSE courses</li>
              <li><strong>C Program Master:</strong> Comprehensive C programming practice and resources</li>
              <li><strong>KTU Discrete Math:</strong> Discrete mathematics study materials and problems</li>
              <li><strong>CImp:</strong> C program theory and implementation practice</li>
              <li><strong>EEIPR:</strong> Engineering, Entrepreneurship and Intellectual Property Rights repository</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Accessibility & Inclusivity</h2>
            <p className="text-muted-foreground mb-4">
              HexnicAI is built with inclusivity at its core, ensuring all students can access quality education.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Support for students with dyslexia and learning disabilities</li>
              <li>Multiple accessibility modes and preferences</li>
              <li>Keyboard navigation and screen reader support</li>
              <li>Customizable fonts, colors, and reading modes</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Support & Contact</h2>
            <p className="text-muted-foreground mb-4">
              Need help? Have questions or suggestions? Our team is here to support you.
            </p>
            <p className="text-muted-foreground mb-4">
              Contact us at:{" "}
              <a href="mailto:aaronsooraj001@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                aaronsooraj001@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              For more information, visit our <a href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</a> page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
