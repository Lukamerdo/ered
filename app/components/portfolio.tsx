"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from "next/image"
import { useLanguage } from "./language-provider"

const projects = [
  {
    id: 1,
    title: "Pablo Luka Portfolio Showcase",
    category: "Web App",
    description: "Clean portfolio homepage featuring project showcases including Kaweh Multiservice and personal portfolio sites with modern card-based layouts.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pablo%20Luka%20Portfolio%20Homepage%20Overview-z0zyiFHxyqhXhAU96BRRibQP8a0TvZ.png",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Cyber Gaming Mobile App",
    category: "Mobile App", 
    description: "Dark-themed mobile gaming application with neon purple and blue interface, featuring game tracking, user profiles, and cyber aesthetics.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_A_highresolution_digital_portfolio_image_showing_a_fu_2.jpg-5wXKcV7x5rLtHT2RcVnpc0a4DwBnq4.jpeg",
    tech: ["React Native", "Gaming API", "Dark UI", "Neon Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Cofface Blog Platform",
    category: "Web App",
    description: "Modern content management and blog platform with clean white design, article layouts, user profiles, and professional typography.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_1.jpg-xytP9pJ5OA0Ag9fpDWnUUSQ47Zf4jw.jpeg",
    tech: ["WordPress", "PHP", "MySQL", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Professional Agency Website",
    category: "Design System",
    description: "Modern agency website with green accent colors, team photography, project showcases, and comprehensive service descriptions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_3.jpg-KI8ij97HkWzmnK1MKAJLwZ9feeO6GK.jpeg",
    tech: ["HTML5", "CSS3", "JavaScript", "Photography"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Modern Interface Collection",
    category: "Design System",
    description: "Comprehensive showcase of modern web and app interfaces including developer portfolios, SaaS solutions, and mobile banking applications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modern%20Web%20%26%20App%20Design%20Showcase-J8yUhWuYzCw1HVMHnRxOHK4hTpZjSR.png",
    tech: ["UI/UX Design", "Figma", "Design Systems", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Real Estate Agent Mobile App",
    category: "Mobile App",
    description: "Professional mobile application for real estate agents featuring property listings, dashboard analytics, and client management tools.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20App%20for%20Real%20Estate%20Agents-6dwXYz3Wn33jvEk7CuIzbRIp3N2aI0.png",
    tech: ["Flutter", "Firebase", "Real Estate API", "Maps Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Business Consulting Platform",
    category: "Web App",
    description: "Corporate website with professional imagery, team galleries, project portfolios, and comprehensive business consulting services.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_0.jpg-2hu7WHs3rwOvTTauzg73qseS8LPrTf.jpeg",
    tech: ["React", "Corporate Design", "CMS", "SEO Optimized"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Digital Interface Grid",
    category: "Design System",
    description: "Collection of modern digital interfaces showcasing SaaS solutions, mobile banking, web portfolios, and e-commerce platforms.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modern%20Digital%20Interfaces%20Grid-C66KTcoVbkdjhEovbII1HQ82k3kg55.png",
    tech: ["Interface Design", "Mobile UI", "Web Design", "UX Research"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Futuristic Gaming Platform",
    category: "Web App",
    description: "Multi-device gaming website with fantasy themes, displayed across desktop, laptop, tablet, and mobile with dark blue/purple aesthetic.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_A_highresolution_digital_portfolio_image_showing_a_fu_3.jpg-z13iGBhNNfUjgiQ5CTFgRcoxXKUYdm.jpeg",
    tech: ["Three.js", "WebGL", "Responsive Design", "Gaming UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Bodiia Design Agency",
    category: "Design System",
    description: "Creative design agency website featuring colorful product showcases, modern typography, and innovative layout designs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flux_Dev_a_professional_website_portfolio_showcasing_a_welldes_2.jpg-yw1avGr19mCyFlUZ5GZE9dzT5IgPeL.jpeg",
    tech: ["Creative Design", "Color Theory", "Typography", "Brand Identity"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { t } = useLanguage()

  const categories = [
    t("portfolio.all"),
    t("portfolio.webApp"),
    t("portfolio.mobileApp"),
    t("portfolio.designSystem"),
    t("portfolio.security"),
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t("portfolio.title")}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">{t("portfolio.subtitle")}</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                    : "border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all duration-300 group overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Eye className="w-4 h-4 mr-1" />
                      {t("portfolio.preview")}
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                      <Github className="w-4 h-4 mr-1" />
                      {t("portfolio.code")}
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-400 font-semibold">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
