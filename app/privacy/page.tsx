"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BrownianMotion } from "@/components/brownian-motion"

export default function PrivacyPage() {
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
          Loading Privacy Policy...
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

        <h1 className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 2026</p>

        <div className="space-y-6">
          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              At HexnicAI, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Usage Data:</strong> Information about how you interact with our platform</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Learning Data:</strong> Study preferences and progress within our modules</li>
              <li><strong>Feedback:</strong> Information you provide through our feedback forms</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide and improve our educational services</li>
              <li>Personalize your learning experience</li>
              <li>Analyze platform usage to enhance features</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Ensure platform security and prevent misuse</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">6. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground">
              HexnicAI is designed for educational purposes and may be used by students of various ages. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of certain data collection practices</li>
            </ul>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this page.
            </p>
          </section>

          <section className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
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
