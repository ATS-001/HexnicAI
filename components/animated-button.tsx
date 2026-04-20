"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  href?: string
  onClick?: () => void
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setTimeout(() => setRipple(null), 600)
    onClick?.()
  }

  const baseStyles = cn(
    "relative overflow-hidden inline-flex items-center justify-center gap-2",
    "px-6 py-3 rounded-full font-semibold text-sm",
    "transition-all duration-300 ease-out",
    "active:scale-95",
    isPressed && "scale-95"
  )

  const variantStyles = {
    primary: cn(
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white",
      "hover:from-blue-700 hover:to-blue-600",
      "hover:shadow-lg hover:shadow-blue-500/30",
      "hover:-translate-y-0.5"
    ),
    secondary: cn(
      "bg-card text-foreground border border-border",
      "hover:bg-accent hover:border-primary/50",
      "hover:shadow-md hover:-translate-y-0.5"
    ),
    ghost: cn(
      "text-foreground",
      "hover:bg-accent",
      "hover:-translate-y-0.5"
    ),
  }

  const Component = href ? "a" : "button"

  return (
    <Component
      href={href}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={cn(baseStyles, variantStyles[variant], className)}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {/* Ripple effect */}
      {ripple && (
        <span
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            animation: "ripple 0.6s linear",
          }}
        />
      )}
      
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </Component>
  )
}
