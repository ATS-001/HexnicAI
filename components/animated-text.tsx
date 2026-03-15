"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur-in"
  delay?: number
  duration?: number
}

export function AnimatedText({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animations = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-down": {
      initial: "opacity-0 -translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      initial: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "zoom-in": {
      initial: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    "blur-in": {
      initial: "opacity-0 blur-sm",
      visible: "opacity-100 blur-0",
    },
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? animations[animation].visible : animations[animation].initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Staggered text animation for individual characters/words
interface StaggeredTextProps {
  text: string
  className?: string
  staggerDelay?: number
  type?: "chars" | "words"
}

export function StaggeredText({
  text,
  className,
  staggerDelay = 30,
  type = "chars",
}: StaggeredTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const items = type === "chars" ? text.split("") : text.split(" ")

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {items.map((item, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-all duration-500 ease-out",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
          style={{
            transitionDelay: `${i * staggerDelay}ms`,
          }}
        >
          {item}
          {type === "words" && i < items.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}
