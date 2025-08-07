"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Send, MessageCircle, Github, Mail, ExternalLink } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              READY TO DOMINATE?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-4">💬 LET'S BUILD SOMETHING LEGENDARY.</p>
          <p className="text-lg text-gray-400">Every empire started with a single decision. Make yours today.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ui-design">UI/UX Design</option>
                      <option value="security-audit">Security Audit</option>
                      <option value="template">Custom Template</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select budget</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white py-4 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />🚀 LAUNCH MY PROJECT
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <Mail className="w-6 h-6 text-pink-400" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-400">hello@yourname.dev</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-white font-semibold">Telegram</div>
                      <div className="text-gray-400">@yourhandle</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                    <MessageCircle className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Discord</div>
                      <div className="text-gray-400">yourname#1234</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-white">Available for Projects</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Currently accepting new projects for Q2 2024. Available 24/7 for digital emergencies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-400">Web Development</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400">UI/UX Design</Badge>
                  <Badge className="bg-red-500/20 text-red-400">Security Audits</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Follow My Work</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-white hover:text-white bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-white hover:text-white bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-white hover:text-white bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-white hover:text-white bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Blog
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2024 Your Name. Built with Next.js, Tailwind CSS, and lots of ☕</p>
          <p className="text-sm text-gray-500 mt-2">"Code is poetry. Security is art. Design is magic." ✨</p>
        </div>
      </div>
    </section>
  )
}
