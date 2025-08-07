"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Star } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "./language-provider"

const templates = [
  {
    id: 1,
    name: "Portfolio Showcase Template",
    description: "Clean portfolio template with project cards and modern layouts, perfect for showcasing creative work",
    price: "$49",
    rating: 4.9,
    downloads: 1200,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pablo%20Luka%20Portfolio%20Homepage%20Overview-z0zyiFHxyqhXhAU96BRRibQP8a0TvZ.png",
    tags: ["Portfolio", "Showcase", "Modern"],
    featured: false,
  },
  {
    id: 2,
    name: "Gaming Mobile App UI",
    description: "Dark-themed mobile gaming interface with neon colors and cyber aesthetics",
    price: "$79",
    rating: 5.0,
    downloads: 850,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_A_highresolution_digital_portfolio_image_showing_a_fu_2.jpg-5wXKcV7x5rLtHT2RcVnpc0a4DwBnq4.jpeg",
    tags: ["Mobile", "Gaming", "Dark Theme"],
    featured: true,
  },
  {
    id: 3,
    name: "Blog Platform Template",
    description: "Professional content management system with clean design and user profiles",
    price: "$99",
    rating: 4.8,
    downloads: 2100,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_1.jpg-xytP9pJ5OA0Ag9fpDWnUUSQ47Zf4jw.jpeg",
    tags: ["Blog", "CMS", "Clean"],
    featured: true,
  },
  {
    id: 4,
    name: "Agency Website Template",
    description: "Modern agency template with team showcases and service descriptions",
    price: "$69",
    rating: 4.7,
    downloads: 950,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_3.jpg-KI8ij97HkWzmnK1MKAJLwZ9feeO6GK.jpeg",
    tags: ["Agency", "Business", "Professional"],
    featured: false,
  },
  {
    id: 5,
    name: "Interface Design Collection",
    description: "Comprehensive UI/UX design system with multiple interface examples",
    price: "$149",
    rating: 4.9,
    downloads: 650,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modern%20Web%20%26%20App%20Design%20Showcase-J8yUhWuYzCw1HVMHnRxOHK4hTpZjSR.png",
    tags: ["UI Kit", "Design System", "Collection"],
    featured: true,
  },
  {
    id: 6,
    name: "Real Estate Mobile App",
    description: "Professional real estate application with property listings and agent tools",
    price: "$89",
    rating: 4.6,
    downloads: 1100,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20App%20for%20Real%20Estate%20Agents-6dwXYz3Wn33jvEk7CuIzbRIp3N2aI0.png",
    tags: ["Real Estate", "Mobile", "Professional"],
    featured: false,
  },
  {
    id: 7,
    name: "Business Consulting Site",
    description: "Corporate website template with professional imagery and service portfolios",
    price: "$199",
    rating: 4.9,
    downloads: 420,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_0.jpg-2hu7WHs3rwOvTTauzg73qseS8LPrTf.jpeg",
    tags: ["Corporate", "Consulting", "Professional"],
    featured: true,
  },
  {
    id: 8,
    name: "Digital Interface Grid",
    description: "Modern interface collection showcasing various digital solutions and platforms",
    price: "$79",
    rating: 4.7,
    downloads: 890,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modern%20Digital%20Interfaces%20Grid-C66KTcoVbkdjhEovbII1HQ82k3kg55.png",
    tags: ["Interface", "Modern", "Collection"],
    featured: false,
  },
  {
    id: 9,
    name: "Gaming Platform Template",
    description: "Futuristic gaming website with multi-device responsive design and fantasy themes",
    price: "$89",
    rating: 4.8,
    downloads: 670,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_A_highresolution_digital_portfolio_image_showing_a_fu_3.jpg-z13iGBhNNfUjgiQ5CTFgRcoxXKUYdm.jpeg",
    tags: ["Gaming", "Futuristic", "Multi-device"],
    featured: false,
  },
  {
    id: 10,
    name: "Creative Agency Template",
    description: "Colorful design agency website with modern typography and creative layouts",
    price: "$129",
    rating: 4.6,
    downloads: 540,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_2.jpg-yw1avGr19mCyFlUZ5GZE9dzT5IgPeL.jpeg",
    tags: ["Creative", "Agency", "Colorful"],
    featured: false,
  },
]

export default function Templates() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              {t("templates.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">{t("templates.subtitle")}</p>
          <p className="text-lg text-gray-500">{t("templates.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="bg-gray-900/50 border-gray-800 hover:border-green-500 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                {template.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold">
                    🔥 {t("templates.popular")}
                  </Badge>
                )}
                <Image
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      {t("templates.preview")}
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      {t("templates.buy")}
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{template.name}</h3>
                  <span className="text-2xl font-bold text-green-400">{template.price}</span>
                </div>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{template.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{template.downloads}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full">
            🛒 {t("templates.browseAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
