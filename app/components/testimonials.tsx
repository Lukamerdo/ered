"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "./language-provider"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechNova",
    company: "TechNova",
    content:
      "This developer didn't just build our app—they built our competitive advantage. Six months later, we're the market leader. The attention to detail and security focus is unmatched.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SC",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CISO, SecureBank",
    company: "SecureBank",
    content:
      "Their security audit saved us from a potential disaster. Found vulnerabilities our internal team missed. These guys think like hackers but fight for the good guys.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MR",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Founder, DesignCo",
    company: "DesignCo",
    content:
      "The UI/UX work was phenomenal. Our conversion rate increased by 180% after the redesign. Every pixel has purpose, every interaction tells a story.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=EW",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, StartupX",
    company: "StartupX",
    content:
      "Delivered our MVP 40% faster than expected. The code quality is exceptional, and the scalability planning saved us months of refactoring later.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=DK",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Testimonials Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_3.jpg-KI8ij97HkWzmnK1MKAJLwZ9feeO6GK.jpeg')`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {t("testimonials.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <Card className="bg-gray-900/50 border-gray-800 mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-gradient-to-r from-yellow-400 to-orange-500"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-8 h-8 text-yellow-400 mb-4 mx-auto md:mx-0" />
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div>
                    <div className="font-bold text-white text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                    <div className="text-yellow-400 font-semibold">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-400 mb-2">50+</div>
            <div className="text-gray-400">{t("testimonials.projects")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400">{t("testimonials.satisfaction")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-400 mb-2">180%</div>
            <div className="text-gray-400">{t("testimonials.conversion")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-yellow-400 mb-2">0</div>
            <div className="text-gray-400">{t("testimonials.breaches")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
