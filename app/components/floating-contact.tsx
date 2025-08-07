"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, Send, X, Globe } from 'lucide-react'
import { useLanguage } from "./language-provider"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const phoneNumber = "+989016306426" // Your phone number with Iran country code
  const displayNumber = "09016306426" // Display format

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self")
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace("+", "")}`, "_blank")
  }

  const handleTelegram = () => {
    window.open(`https://t.me/PABLO_LUKA`, "_blank") // Updated Telegram username
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en")
  }

  return (
    <>
      {/* Language Toggle Button */}
      <Button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full w-12 h-12 p-0 shadow-lg"
      >
        <Globe className="w-5 h-5" />
      </Button>

      {/* Language Indicator */}
      <div className="fixed top-20 right-6 z-40 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold border border-gray-700">
        {language === "en" ? "EN" : "فا"}
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 bg-gray-900/95 backdrop-blur-sm border-gray-700 shadow-2xl animate-in slide-in-from-bottom-2">
            <CardContent className="p-4 w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-lg">{language === "fa" ? "تماس با لوکا" : "Contact LUKA"}</h3>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-1 h-auto"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleCall}
                  className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">{t("contact.call")}</div>
                    <div className="text-xs opacity-90">{displayNumber}</div>
                  </div>
                </Button>

                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">{t("contact.whatsapp")}</div>
                    <div className="text-xs opacity-90">{language === "fa" ? "پیام سریع" : "Quick Message"}</div>
                  </div>
                </Button>

                <Button
                  onClick={handleTelegram}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white justify-start"
                >
                  <Send className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">{t("contact.telegram")}</div>
                    <div className="text-xs opacity-90">@PABLO_LUKA</div>
                  </div>
                </Button>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-center text-xs text-gray-400">
                  {language === "fa" ? "۲۴/۷ در دسترس" : "Available 24/7"}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full w-16 h-16 shadow-2xl animate-bounce"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </>
  )
}
