"use client"

import { useLanguage } from "./language-provider"

export default function Logo() {
  const { language } = useLanguage()

  return (
    <div className="fixed top-6 left-6 z-50 flex flex-col items-center">
      {/* Logo Icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
        <span className="text-white font-black text-xl">L</span>
      </div>

      {/* LUKA Text */}
      <div className="text-white font-black text-lg tracking-wider">LUKA</div>
    </div>
  )
}
