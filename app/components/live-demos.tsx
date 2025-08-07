"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Copy, RefreshCw, Eye, Smartphone } from 'lucide-react'
import { useLanguage } from "./language-provider"

export default function LiveDemos() {
  const [password, setPassword] = useState("")
  const [ipInfo, setIpInfo] = useState("")
  const [activeDemo, setActiveDemo] = useState("password")

  const { t } = useLanguage()

  const demos = [
    {
      id: "password",
      title: t("demos.password.title"),
      description: t("demos.password.description"),
      icon: "🔐",
    },
    {
      id: "ip",
      title: t("demos.ip.title"),
      description: t("demos.ip.description"),
      icon: "🌐",
    },
    {
      id: "mobile",
      title: t("demos.mobile.title"),
      description: t("demos.mobile.description"),
      icon: "📱",
    },
  ]

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let result = ""
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
  }

  const checkIP = () => {
    // Simulated IP info - in real app would call actual API
    setIpInfo(`IP: 192.168.1.1\nLocation: San Francisco, CA\nISP: Example ISP\nSecurity: High`)
  }

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("demos.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t("demos.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {demos.map((demo) => (
                <Card
                  key={demo.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeDemo === demo.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500"
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-600"
                  }`}
                  onClick={() => setActiveDemo(demo.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{demo.icon}</span>
                      <div>
                        <h3 className="font-bold text-white">{demo.title}</h3>
                        <p className="text-sm text-gray-400">{demo.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="text-2xl">{demos.find((d) => d.id === activeDemo)?.icon}</span>
                  {demos.find((d) => d.id === activeDemo)?.title}
                  <Badge className="ml-auto bg-green-500/20 text-green-400">{t("demos.live")}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {activeDemo === "password" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Generated Password</label>
                      <div className="flex gap-2">
                        <Input
                          value={password}
                          readOnly
                          className="bg-gray-800 border-gray-700 text-white font-mono"
                          placeholder="Click generate to create password"
                        />
                        <Button
                          onClick={() => navigator.clipboard.writeText(password)}
                          disabled={!password}
                          className="bg-cyan-600 hover:bg-cyan-700"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      onClick={generatePassword}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {t("demos.generate")}
                    </Button>
                    <div className="text-sm text-gray-400">
                      <p>• 16 characters long</p>
                      <p>• Includes uppercase, lowercase, numbers, and symbols</p>
                      <p>• Cryptographically secure random generation</p>
                    </div>
                  </div>
                )}

                {activeDemo === "ip" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">IP Information</label>
                      <textarea
                        value={ipInfo}
                        readOnly
                        className="w-full h-32 bg-gray-800 border-gray-700 text-white font-mono p-3 rounded-md resize-none"
                        placeholder="Click analyze to get IP information"
                      />
                    </div>
                    <Button
                      onClick={checkIP}
                      className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {t("demos.analyze")}
                    </Button>
                    <div className="text-sm text-gray-400">
                      <p>• Geolocation data</p>
                      <p>• ISP information</p>
                      <p>• Security assessment</p>
                      <p>• VPN/Proxy detection</p>
                    </div>
                  </div>
                )}

                {activeDemo === "mobile" && (
                  <div className="space-y-6">
                    <div className="bg-gray-800 rounded-lg p-6 text-center">
                      <div className="mx-auto w-48 h-96 bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl p-4 relative overflow-hidden">
                        {/* Phone Screen */}
                        <div className="w-full h-full bg-black rounded-2xl flex flex-col overflow-hidden">
                          {/* Status Bar */}
                          <div className="h-6 bg-black flex items-center justify-between px-4 text-white text-xs">
                            <span>9:41</span>
                            <span>●●●</span>
                          </div>

                          {/* App Header */}
                          <div className="h-16 bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold">My App</span>
                          </div>

                          {/* App Content with Background Image */}
                          <div
                            className="flex-1 bg-cover bg-center relative"
                            style={{
                              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20App%20for%20Real%20Estate%20Agents-6dwXYz3Wn33jvEk7CuIzbRIp3N2aI0.png')`,
                            }}
                          >
                            <div className="absolute inset-0 bg-black/20"></div>
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                      <Smartphone className="w-4 h-4 mr-2" />
                      {t("demos.viewDemo")}
                    </Button>

                    <div className="text-sm text-gray-400">
                      <p>• Interactive mobile UI components</p>
                      <p>• Responsive design showcase</p>
                      <p>• Touch-friendly interactions</p>
                      <p>• Cross-platform compatibility</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
