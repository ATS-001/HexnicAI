"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function BrownianMotion({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Use more particles on larger screens so the network feels rich without becoming crowded.
    const particleCount = Math.min(150, Math.max(90, Math.round((window.innerWidth * window.innerHeight) / 9000)))
    particlesRef.current = []

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2.8,
        vy: (Math.random() - 0.5) * 2.8,
        radius: Math.random() * 3.5 + 1.5,
        opacity: Math.random() * 0.45 + 0.45,
      })
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, i) => {
        // Brownian motion - random walk with momentum
        particle.vx += (Math.random() - 0.5) * 0.5
        particle.vy += (Math.random() - 0.5) * 0.5

        // Damping
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Speed limit
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > 3) {
          particle.vx = (particle.vx / speed) * 3
          particle.vy = (particle.vy / speed) * 3
        }

        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw a soft halo and a crisp particle so the motion stays visible.
        const particleColor = isDark ? "59, 130, 246" : "37, 99, 235"
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 5,
        )
        glow.addColorStop(0, `rgba(${particleColor}, ${particle.opacity * 0.35})`)
        glow.addColorStop(1, `rgba(${particleColor}, 0)`)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`
        ctx.shadowBlur = 12
        ctx.shadowColor = `rgba(${particleColor}, ${particle.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 185) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const lineOpacity = (1 - distance / 185) * 0.48
            ctx.strokeStyle = isDark
              ? `rgba(59, 130, 246, ${lineOpacity})`
              : `rgba(37, 99, 235, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  )
}
