"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Shield } from 'lucide-react'
import { useLanguage } from "./language-provider"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code2,
      title: t("services.web.title"),
      description: t("services.web.description"),
      features: [
        t("services.web.feature1"),
        t("services.web.feature2"),
        t("services.web.feature3"),
        t("services.web.feature4"),
      ],
      color: "from-cyan-500 to-blue-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pablo%20Luka%20Portfolio%20Homepage%20Overview-z0zyiFHxyqhXhAU96BRRibQP8a0TvZ.png",
    },
    {
      icon: Palette,
      title: t("services.design.title"),
      description: t("services.design.description"),
      features: [
        t("services.design.feature1"),
        t("services.design.feature2"),
        t("services.design.feature3"),
        t("services.design.feature4"),
      ],
      color: "from-purple-500 to-pink-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_A_highresolution_digital_portfolio_image_showing_a_fu_2.jpg-5wXKcV7x5rLtHT2RcVnpc0a4DwBnq4.jpeg",
    },
    {
      icon: Shield,
      title: t("services.security.title"),
      description: t("services.security.description"),
      features: [
        t("services.security.feature1"),
        t("services.security.feature2"),
        t("services.security.feature3"),
        t("services.security.feature4"),
      ],
      color: "from-red-500 to-orange-600",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_1.jpg-xytP9pJ5OA0Ag9fpDWnUUSQ47Zf4jw.jpeg",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("services.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Showcase Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold`}
                >
                  {t("services.learnMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
