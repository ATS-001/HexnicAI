"use client"

import { useState, useEffect } from "react"
import { BrownianMotion } from "@/components/brownian-motion"
import { Typewriter } from "@/components/typewriter"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedText, StaggeredText } from "@/components/animated-text"
import { Menu, X, ChevronUp, ChevronDown, Moon, Sun, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

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
    link: "https://c-imp.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "Coming Soon",
    description: "We are constantly building more tools for personalized learning.",
    link: null,
    linkText: null,
  },
]

const roadmap = [
  { title: "ATS_PDZ Formed", date: "Jan 2023", direction: "right" },
  { title: "HexnicAI Conceptualized", date: "Dec 2025", direction: "left" },
  { title: "Initial Tool (StudyAI,SpeakEasy) Release", date: "Jan 2026", direction: "right" },
  { title: "(StudyAI,SpeakEasy) Available in HexnicAI", date: "Feb 2026", direction: "left" },
  { title: "Initial Deployment of HexnicAI Prototype", date: "Feb 2026", direction: "right" },
  { title: "IT-Workshop Launch", date: "Apr 2026", direction: "left" },
  { title: "C Program Master Launch", date: "Apr 2026", direction: "right" },
  { title: "FocusAI Launch", date: "Apr 2026", direction: "left" },
  { title: "KTU Discrete Math Launch", date: "Apr 2026", direction: "right" },
  { title: "CImp Launch", date: "Apr 2026", direction: "left" },
  { title: "EEIPR Launch", date: "Apr 2026", direction: "right" },
  { title: "### Coming Soon ###", date: "2026", direction: "left" },
]

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
    role: "Co-Developer",
    linkedin: "https://www.linkedin.com/in/adhin-seby-4b6b45384/",
  },
  {
    initials: "AK",
    name: "Akshay T S",
    role: "Co-Developer",
    linkedin: "https://www.linkedin.com/in/akshay-t-s-487b90382/",
  },
]

const faqs = [
  {
    question: "What is HexnicAI (Hexnic AI)?",
    answer: "HexnicAI (also known as Hexnic AI) is an AI-based personalized and inclusive learning platform designed to help students manage their studies efficiently. It offers smart tools like timetable generation, accessibility features, and AI-powered study assistance.",
  },
  {
    question: "How does HexnicAI help students?",
    answer: "HexnicAI helps students by creating optimized study schedules, improving productivity, and providing tools like voice interaction and text-to-speech. It supports better time management and personalized learning experiences.",
  },
  {
    question: "What features does HexnicAI include?",
    answer: "HexnicAI includes an AI-powered timetable generator, balanced study scheduling, dyslexia-friendly reading interface, text-to-speech functionality, voice interaction support, and accessibility-focused learning tools.",
  },
  {
    question: "Is HexnicAI useful for students with dyslexia?",
    answer: "Yes, HexnicAI is designed with inclusivity in mind. It offers dyslexia-friendly reading modes, text-to-speech features, and accessibility tools that make learning easier for students with reading difficulties.",
  },
  {
    question: "Who developed HexnicAI?",
    answer: "HexnicAI was developed by students of Vidya Academy of Science and Technology, including Aaron Thalakkottor Sooraj and his team.",
  },
  {
    question: "Is it free?",
    answer: "The core modules are built to be accessible for all learners.",
  },
  {
    question: "What is StudyAI?",
    answer: "StudyAI is a smart planner that uses AI concepts to organize study schedules based on subject difficulty and available time. It is Developed by Aaron and Alwin",
  },
  {
    question: "What is Speak Easy?",
    answer: "Speak Easy is an accessibility tool designed to help users with speech and communication challenges interact more easily with technology. It developed by Adithya and Abhinav",
  },
  {
    question: "What is IT-Workshop?",
    answer: "IT-Workshop is a tool which includes all VIVA & LAB Exam Questions of BTECH CSE Semester 2 IT Workshop, making it easier for students to understand. It is Developed by Aaron",
  },
  {
    question: "What is FocusAI?",
    answer: "FocusAI is an AI-powered learning platform that helps students improve productivity, understand concepts, and manage their studies efficiently through smart tools like AI assistance, task tracking, and study analytics. It is Developed by Adithya",
  },
  {
    question: "What is C Program Master?",
    answer: "C Program Master is a tool which includes all Programming in C lab Questions. It is Developed by Abhinav",
  },
  {
    question: "What is KTU Discrete Math?",
    answer: "KTU Discrete Math is a tool which includes all Exam Questions of BTECH CSE Semester 2 Discrete Maths, making it easier for students to understand. It is Developed by Aaron",
  },
  {
    question: "What is CImp?",
    answer: "CImp is a tool which includes all Exam Questions of BTECH CSE Semester 2 Programming in C, making it easier for students to understand. It is Developed by Aaron",
  },
  {
    question: "Who can benefit from HexnicAI?",
    answer: "Students, educators, and learners who want structured study planning or accessibility tools for learning.",
  },
  {
    question: "Is there any other tools?",
    answer: "Yes, many tools will be launching soon in HexnicAI. Stay tuned...",
  },
]

const githubLinks = [
  { name: "StudyAI", href: "https://github.com/ATS-001/studyai-2026" },
  { name: "Speak Easy", href: "https://github.com/abhinavnixabvv-hue/speak-easy-tools" },
  { name: "IT-Workshop", href: "https://github.com/ATS-001/IT-Workshop" },
  { name: "C Program Master", href: "https://github.com/abhinavnixabvv-hue/C-program" },
  { name: "FocusAI", href: "https://github.com/Adithya-Binesh-007/focusai-study-suite" },
  { name: "KTU Discrete Math", href: "https://github.com/ATS-001/Discrete-Maths-ModelPaper24" },
  { name: "CImp", href: "https://github.com/ATS-001/CImp" },
  { name: "EEIPR", href: "https://github.com/ATS-001/EEIPR" },
  { name: "HexnicAI Core", href: "https://github.com/ATS-001/HexnicAI" },
]

export default function HexnicAI() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isGithubOpen, setIsGithubOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-10000">
        <div className="relative w-24 h-24">
          <img
            src="/logo.png"
            alt="HexnicAI Logo"
            className="w-24 h-24 object-contain"
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0 rounded-full bg-blue-500/30"
            style={{
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
        </div>
        <p
          className="mt-8 text-lg font-semibold text-blue-600 dark:text-blue-400"
          style={{
            animation: "fadeInOut 2s ease-in-out infinite",
          }}
        >
          Loading HexnicAI...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      <BrownianMotion isDark={isDark} />

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-background/80 backdrop-blur-xl z-3000 border border-border/50 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="HexnicAI Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="font-bold text-xl text-blue-600 dark:text-blue-400">
              HexnicAI
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-2">
            {[
              { label: "Modules", href: "/modules" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact", href: "/contact-us" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-lg font-semibold text-sm hover:bg-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-accent transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsGithubOpen(!isGithubOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github size={18} />
                GitHub
              </button>
              {isGithubOpen && (
                <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-2xl overflow-hidden min-w-[180px] animate-in fade-in slide-in-from-top-2 duration-200">
                  {githubLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="absolute top-full right-[5%] mt-2 bg-card border border-border rounded-xl shadow-2xl p-4 w-56 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {[
                { label: "Modules", href: "/modules" },
                { label: "About Us", href: "/about-us" },
                { label: "Contact", href: "/contact-us" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-full flex items-center gap-2 px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
              <div className="border-t border-border mt-2 pt-2">
                <button
                  onClick={() => setIsGithubOpen(!isGithubOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github size={18} />
                    Repositories
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${isGithubOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isGithubOpen && (
                  <div className="mt-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {githubLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm hover:bg-accent transition-colors rounded-lg ml-4"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 text-center">
        <div className="container mx-auto px-4">
          <AnimatedText animation="fade-up" className="mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 min-h-[90px] text-balance leading-tight">
              <Typewriter
                text="AI-Based Personalized and Inclusive Learning Platform"
                speed={50}
              />
            </h1>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={200}>
            <div className="inline-block px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold text-sm">
              Smart Planning & Inclusivity
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedText animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Development Roadmap
            </h2>
          </AnimatedText>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/30 md:-translate-x-1/2" />

            {roadmap.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "relative mb-8 flex",
                  item.direction === "left" ? "md:justify-start" : "md:justify-end"
                )}
              >
                {/* Timeline dot - centered on the line */}
                <div className="absolute left-4 md:left-1/2 top-5 w-4 h-4 bg-blue-600 rounded-full border-4 border-background -translate-x-1/2 z-10" />

                <AnimatedText
                  animation={item.direction === "left" ? "fade-right" : "fade-left"}
                  delay={i * 100}
                  className={cn(
                    "md:w-[45%] pl-12 md:pl-0",
                    item.direction === "left" ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  )}
                >
                  <div className="bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      {item.date}
                    </span>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedText animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              FAQ
            </h2>
          </AnimatedText>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedText key={i} animation="fade-up" delay={i * 50}>
                <div className="bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between font-semibold hover:bg-accent/50 transition-colors"
                  >
                    {faq.question}
                    <span
                      className={cn(
                        "text-xl transition-transform duration-300",
                        openFaq === i && "rotate-45"
                      )}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openFaq === i ? "max-h-40 pb-4" : "max-h-0"
                    )}
                  >
                    <p className="px-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 text-center shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
            <AnimatedText animation="fade-up">
              <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Help Us Improve</h2>
            </AnimatedText>
            <AnimatedText animation="fade-up" delay={100}>
              <p className="mb-8 text-muted-foreground">
                Your suggestions help make HexnicAI more inclusive for everyone.
              </p>
            </AnimatedText>
            <AnimatedText animation="fade-up" delay={200}>
              <AnimatedButton
                href="https://forms.gle/JScLaZhBx8YLofV9A"
                className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl"
              >
                Send Feedback
              </AnimatedButton>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-white relative z-10 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-slate-200">Developed by Students of Vidya Academy of Science and Technology</p>
          <p className="text-sm text-slate-400">© 2026 HexnicAI || Part of ATS_PDZ</p>
          <p className="text-sm text-slate-400">© SINCE 2023 | ATS-PDZ</p>
          <p className="text-sm text-slate-400 mb-6">ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 border border-slate-700"
            >
              Docs
            </a>
            <a
              href="/terms"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 border border-slate-700"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-slate-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 border border-slate-700"
            >
              Privacy
            </a>
          </div>
          <a
            href="mailto:aaronsooraj001@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95"
          >
            <Mail size={16} />
            <span>Contact Us</span>
          </a>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg z-999",
          "transition-all duration-300 hover:bg-blue-700 hover:scale-110 hover:-translate-y-1",
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ChevronUp size={28} />
      </button>
    </div>
  )
}
