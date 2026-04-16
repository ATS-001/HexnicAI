"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BrownianMotion } from "@/components/brownian-motion"

export default function TermsPage() {
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
          Loading Terms of Service...
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

        <h1 className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="space-y-6">
          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using HexnicAI, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground">
              HexnicAI provides AI-powered educational tools including StudyAI, Speak Easy, and other learning modules. These services are designed to enhance personalized and inclusive learning experiences.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">As a user of HexnicAI, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use the platform for lawful educational purposes only</li>
              <li>Not attempt to disrupt or interfere with the platform services</li>
              <li>Not misuse or exploit any AI-generated content</li>
              <li>Respect the intellectual property rights of HexnicAI and ATS-PDZ</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, features, and functionality of HexnicAI are owned by ATS-PDZ and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
            <p className="text-muted-foreground">
              HexnicAI is provided &quot;as is&quot; without warranties of any kind. While we strive to provide accurate and helpful AI-powered tools, we do not guarantee the accuracy, completeness, or usefulness of any information provided through our platform.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of any significant changes by updating the &quot;Last updated&quot; date at the top of this page.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:{" "}
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
