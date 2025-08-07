"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Shield, Palette } from 'lucide-react'
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { t } = useLanguage()
  const [glitchText, setGlitchText] = useState("DEVELOPER")
  const glitchWords = ["DEVELOPER", "DESIGNER", "HACKER", "CREATOR"]

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(glitchWords[Math.floor(Math.random() * glitchWords.length)])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modern%20Web%20%26%20App%20Design%20Showcase-J8yUhWuYzCw1HVMHnRxOHK4hTpZjSR.png')`,
          }}
        />
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main Headline with Glitch Effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LUKA
            </span>
          </h1>
          <div className="mb-6">
            <p className="text-xl md:text-2xl text-gray-300 font-semibold tracking-wide">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white glitch-text">{glitchText}</h2>
            <div className="absolute inset-0 text-4xl md:text-6xl font-bold text-red-500 opacity-70 animate-pulse">
              {glitchText}
            </div>
          </div>
        </div>

        {/* Professional Taglines */}
        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-gray-300 font-light">{t("hero.subtitle1")}</p>
          <p className="text-xl md:text-2xl text-gray-300 font-light">{t("hero.subtitle2")}</p>
          <p className="text-xl md:text-2xl text-gray-300 font-light">{t("hero.subtitle3")}</p>
          <p className="text-xl md:text-2xl text-gray-300 font-light">{t("hero.subtitle4")}</p>
        </div>

        {/* Expertise Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center group cursor-pointer">
            <Code className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm mt-2 text-gray-400 font-semibold">{t("hero.development")}</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <Palette className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm mt-2 text-gray-400 font-semibold">{t("hero.design")}</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <Shield className="w-12 h-12 text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm mt-2 text-gray-400 font-semibold">{t("hero.security")}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all">
            🔥 {t("hero.cta1")}
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all bg-transparent"
          >
            💬 {t("hero.cta2")}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
      `}</style>
    </section>
  )
}
