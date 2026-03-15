"use client"

import { useState, useEffect } from "react"
import { BrownianMotion } from "@/components/brownian-motion"
import { Typewriter } from "@/components/typewriter"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedText, StaggeredText } from "@/components/animated-text"
import { Menu, X, ChevronUp, Moon, Sun, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const modules = [
  {
    title: "StudyAI",
    description: "AI-driven planner that adjusts study time based on subject difficulty.",
    link: "#",
    linkText: "Explore",
  },
  {
    title: "Speak Easy",
    description: "Assistive tools designed for inclusive learning and speech support.",
    link: "https://speak-easy-tools.vercel.app/",
    linkText: "Explore",
  },
  {
    title: "FocusAI",
    description: "Assistive tools designed for learning.",
    link: "#",
    linkText: "Launching Soon",
  },
  {
    title: "Coming Soon",
    description: "We are constantly building more tools for personalized learning.",
    link: null,
    linkText: null,
  },
]

const roadmap = [
  { title: "ATS-PDZ Formed", date: "Jan 2023", direction: "right" },
  { title: "HexnicAI Conceptualized", date: "Dec 2025", direction: "left" },
  { title: "Initial Tool Release", date: "Jan 2026", direction: "right" },
  { title: "Available in HexnicAI", date: "Jan 2026", direction: "left" },
  { title: "Initial Deployment", date: "Feb 2026", direction: "right" },
  { title: "FocusAI Launch", date: "Mar 2026", direction: "left" },
  { title: "### Coming Soon ###", date: "Mar 2026", direction: "right" },
]

const team = [
  {
    initials: "ATS",
    name: "Aaron Thalakkottor Sooraj",
    role: "Founder & Lead (HexnicAI)\nCo-Developer (StudyAI)",
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
    role: "Co-Developer (Speak Easy Tools)",
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
    question: "What is HexnicAI?",
    answer:
      "HexnicAI is a platform that combines AI-powered study planning with accessibility tools to support personalized and inclusive learning.",
  },
  {
    question: "Is it free?",
    answer: "The core modules are built to be accessible for all learners.",
  },
  {
    question: "What is StudyAI?",
    answer:
      "StudyAI is a smart planner that uses AI concepts to organize study schedules based on subject difficulty and available time.",
  },
  {
    question: "What is Speak Easy?",
    answer:
      "Speak Easy is an accessibility tool designed to help users with speech and communication challenges interact more easily with technology.",
  },
  {
    question: "Who can benefit from HexnicAI?",
    answer:
      "Students, educators, and learners who want structured study planning or accessibility tools for learning.",
  },
  {
    question: "Is there any other tools?",
    answer: "Yes, many tools will be launching soon in HexnicAI, Stay tuned...",
  },
]

const githubLinks = [
  { name: "StudyAI", href: "https://github.com/ATS-001/studyai-2026" },
  { name: "Speak Easy", href: "https://github.com/abhinavnixabvv-hue/speak-easy-tools" },
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
          Loading HexnicAI...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500">
      <BrownianMotion isDark={isDark} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-[3000] border-b border-border/50">
        <div className="flex items-center justify-between w-[90%] max-w-7xl mx-auto py-3">
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
            {["Modules", "Roadmap", "Team", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg font-semibold text-sm hover:bg-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                {item}
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
              {["Modules", "Roadmap", "Team", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  {item}
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
                {githubLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-accent transition-colors rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
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
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold text-sm">
              Smart Planning & Inclusivity
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedText animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Our Modules
            </h2>
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {modules.map((module, i) => (
              <AnimatedCard key={module.title} delay={i * 100}>
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {module.description}
                </p>
                {module.link && (
                  <AnimatedButton href={module.link}>{module.linkText}</AnimatedButton>
                )}
              </AnimatedCard>
            ))}
          </div>
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/30 -translate-x-1/2" />

            {roadmap.map((item, i) => (
              <AnimatedText
                key={i}
                animation={item.direction === "left" ? "fade-right" : "fade-left"}
                delay={i * 100}
                className={cn(
                  "relative mb-8 md:w-[46%]",
                  item.direction === "left"
                    ? "md:mr-auto md:text-right md:pr-8"
                    : "md:ml-auto md:text-left md:pl-8",
                  "pl-12 md:pl-0"
                )}
              >
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute w-4 h-4 bg-blue-600 rounded-full border-4 border-background top-4",
                      "left-[-2rem] md:left-auto",
                      item.direction === "left"
                        ? "md:right-[-2.5rem]"
                        : "md:left-[-2.5rem]"
                    )}
                  />
                  <div className="bg-card p-4 rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                      {item.date}
                    </span>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedText animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Built by <strong>Students</strong> from <strong>VAST</strong>
            </h2>
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <AnimatedCard key={member.name} delay={i * 50} className="text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{member.name}</h3>
                    <p className="text-muted-foreground text-xs whitespace-pre-line mt-1">
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold mt-2 hover:underline transition-all duration-300 hover:gap-2"
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </AnimatedCard>
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText animation="fade-up">
            <h2 className="text-3xl font-bold mb-4">Help Us Improve</h2>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={100}>
            <p className="mb-8 opacity-90">
              Your suggestions help make HexnicAI more inclusive for everyone.
            </p>
          </AnimatedText>
          <AnimatedText animation="fade-up" delay={200}>
            <AnimatedButton
              href="https://forms.gle/JScLaZhBx8YLofV9A"
              className="bg-white text-blue-600 hover:bg-white/90 hover:shadow-xl"
            >
              Send Feedback
            </AnimatedButton>
          </AnimatedText>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Developed by Students of Vidya Academy of Science and Technology</p>
          <p className="text-sm opacity-70">© 2026 HexnicAI || Part of ATS_PDZ</p>
          <p className="text-sm opacity-70">© SINCE 2023 | ATS-PDZ</p>
          <p className="text-sm opacity-70 mb-6">ALL RIGHTS RESERVED.</p>
          <AnimatedButton
            href="mailto:aaronsooraj001@gmail.com"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <Mail size={16} />
            Contact Us
          </AnimatedButton>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg z-[999]",
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
