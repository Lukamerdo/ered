"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Hero Section
    "hero.title": "LUKA",
    "hero.subtitle": "FULL-STACK ENGINEER | PRODUCT ARCHITECT",
    "hero.subtitle1": '✔ "From Concept to Market-Dominant Brand"',
    "hero.subtitle2": '✔ "Engineering Solutions That Demand Attention"',
    "hero.subtitle3": '🔐 "Ethical Hacker — Securing Tomorrow\'s Tech Today"',
    "hero.subtitle4": '🚀 "High-Conversion Apps. Scalable Platforms. Zero Fluff."',
    "hero.development": "Code",
    "hero.design": "Design",
    "hero.security": "Cyber Resilience",
    "hero.cta1": "🔥 SEE MY WORK",
    "hero.cta2": "💬 LET'S TALK",

    // Services Section
    "services.title": "WHAT I DO",
    "services.subtitle": "Three superpowers. One mission: Making your digital presence unstoppable.",
    "services.web.title": "Web/App Development",
    "services.web.description":
      "Full-stack applications that scale. React, Next.js, Node.js, Flutter - I speak all the languages that matter.",
    "services.web.feature1": "Custom Web Apps",
    "services.web.feature2": "Mobile Development",
    "services.web.feature3": "API Integration",
    "services.web.feature4": "Database Design",
    "services.design.title": "UI/UX Design",
    "services.design.description":
      "Interfaces that don't just look good - they convert. Every pixel has a purpose, every interaction tells a story.",
    "services.design.feature1": "User Research",
    "services.design.feature2": "Wireframing",
    "services.design.feature3": "Prototyping",
    "services.design.feature4": "Design Systems",
    "services.security.title": "Ethical Hacking & Security",
    "services.security.description":
      "I think like an attacker to protect like a guardian. Your digital fortress needs a security expert.",
    "services.security.feature1": "Penetration Testing",
    "services.security.feature2": "Vulnerability Assessment",
    "services.security.feature3": "Security Audits",
    "services.security.feature4": "Code Review",
    "services.learnMore": "Learn More",

    // Portfolio Section
    "portfolio.title": "DIGITAL TROPHIES",
    "portfolio.subtitle": "Projects that don't just work—they dominate. Each one a testament to code that conquers.",
    "portfolio.all": "All",
    "portfolio.webApp": "Web App",
    "portfolio.mobileApp": "Mobile App",
    "portfolio.designSystem": "Design System",
    "portfolio.security": "Security",
    "portfolio.preview": "Preview",
    "portfolio.code": "Code",

    // Templates Section
    "templates.title": "TEMPLATE STORE",
    "templates.subtitle": '⚡ "Ready-made templates — just plug and launch"',
    "templates.description": "Skip months of development. Get from zero to hero in days, not months.",
    "templates.popular": "🔥 POPULAR",
    "templates.preview": "Preview",
    "templates.buy": "Buy",
    "templates.browseAll": "🛒 Browse All Templates",

    // Live Demos Section
    "demos.title": "LIVE DEMOS",
    "demos.subtitle": "Interactive tools and app previews that showcase real functionality",
    "demos.password.title": "Password Generator",
    "demos.password.description": "Generate cryptographically secure passwords",
    "demos.ip.title": "IP Checker",
    "demos.ip.description": "Analyze IP addresses and security info",
    "demos.mobile.title": "Mobile UI Preview",
    "demos.mobile.description": "Interactive mobile app demonstrations",
    "demos.live": "LIVE",
    "demos.generate": "Generate Secure Password",
    "demos.analyze": "Analyze Current IP",
    "demos.viewDemo": "View Full Mobile Demo",

    // Testimonials Section
    "testimonials.title": "BATTLE STORIES",
    "testimonials.subtitle": "Real clients. Real results. Real impact on their digital dominance.",
    "testimonials.projects": "Projects Delivered",
    "testimonials.satisfaction": "Client Satisfaction",
    "testimonials.conversion": "Avg. Conversion Boost",
    "testimonials.breaches": "Security Breaches",

    // Floating Contact
    "contact.call": "Call Now",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",
  },
  fa: {
    // Hero Section
    "hero.title": "لوکا",
    "hero.subtitle": "مهندس فول‌استک | معمار محصول",
    "hero.subtitle1": '✔ "از مفهوم تا برند غالب بازار"',
    "hero.subtitle2": '✔ "مهندسی راه‌حل‌هایی که توجه را می‌طلبند"',
    "hero.subtitle3": '🔐 "هکر اخلاقی — امنیت فناوری فردا امروز"',
    "hero.subtitle4": '🚀 "اپ‌های پرتبدیل. پلتفرم‌های مقیاس‌پذیر. بدون پرحرفی."',
    "hero.development": "کد",
    "hero.design": "طراحی",
    "hero.security": "مقاومت سایبری",
    "hero.cta1": "🔥 کارهای من را ببینید",
    "hero.cta2": "💬 بیایید صحبت کنیم",

    // Services Section
    "services.title": "کاری که انجام می‌دهم",
    "services.subtitle": "سه قدرت فوق‌العاده. یک ماموریت: حضور دیجیتال شما را غیرقابل توقف کردن.",
    "services.web.title": "توسعه وب/اپلیکیشن",
    "services.web.description":
      "اپلیکیشن‌های فول‌استک که مقیاس‌پذیر هستند. React، Next.js، Node.js، Flutter - من تمام زبان‌هایی که مهم هستند را بلدم.",
    "services.web.feature1": "اپلیکیشن‌های وب سفارشی",
    "services.web.feature2": "توسعه موبایل",
    "services.web.feature3": "یکپارچه‌سازی API",
    "services.web.feature4": "طراحی پایگاه داده",
    "services.design.title": "طراحی UI/UX",
    "services.design.description":
      "رابط‌هایی که فقط زیبا نیستند - آن‌ها تبدیل می‌کنند. هر پیکسل هدفی دارد، هر تعامل داستانی می‌گوید.",
    "services.design.feature1": "تحقیق کاربر",
    "services.design.feature2": "وایرفریمینگ",
    "services.design.feature3": "نمونه‌سازی",
    "services.design.feature4": "سیستم‌های طراحی",
    "services.security.title": "هکینگ اخلاقی و امنیت",
    "services.security.description":
      "من مثل یک مهاجم فکر می‌کنم تا مثل یک نگهبان محافظت کنم. قلعه دیجیتال شما به یک متخصص امنیت نیاز دارد.",
    "services.security.feature1": "تست نفوذ",
    "services.security.feature2": "ارزیابی آسیب‌پذیری",
    "services.security.feature3": "ممیزی امنیت",
    "services.security.feature4": "بررسی کد",
    "services.learnMore": "بیشتر بدانید",

    // Portfolio Section
    "portfolio.title": "جوایز دیجیتال",
    "portfolio.subtitle": "پروژه‌هایی که فقط کار نمی‌کنند—آن‌ها تسلط دارند. هر کدام گواهی بر کدی که پیروز می‌شود.",
    "portfolio.all": "همه",
    "portfolio.webApp": "اپلیکیشن وب",
    "portfolio.mobileApp": "اپلیکیشن موبایل",
    "portfolio.designSystem": "سیستم طراحی",
    "portfolio.security": "امنیت",
    "portfolio.preview": "پیش‌نمایش",
    "portfolio.code": "کد",

    // Templates Section
    "templates.title": "فروشگاه قالب",
    "templates.subtitle": '⚡ "قالب‌های آماده — فقط وصل کنید و راه‌اندازی کنید"',
    "templates.description": "ماه‌ها توسعه را رد کنید. از صفر به قهرمان در روزها، نه ماه‌ها برسید.",
    "templates.popular": "🔥 محبوب",
    "templates.preview": "پیش‌نمایش",
    "templates.buy": "خرید",
    "templates.browseAll": "🛒 مرور همه قالب‌ها",

    // Live Demos Section
    "demos.title": "نمایش‌های زنده",
    "demos.subtitle": "ابزارهای تعاملی و پیش‌نمایش اپلیکیشن که عملکرد واقعی را نشان می‌دهند",
    "demos.password.title": "تولیدکننده رمز عبور",
    "demos.password.description": "تولید رمزهای عبور امن رمزنگاری‌شده",
    "demos.ip.title": "بررسی‌کننده IP",
    "demos.ip.description": "تجزیه و تحلیل آدرس‌های IP و اطلاعات امنیتی",
    "demos.mobile.title": "پیش‌نمایش UI موبایل",
    "demos.mobile.description": "نمایش‌های تعاملی اپلیکیشن موبایل",
    "demos.live": "زنده",
    "demos.generate": "تولید رمز عبور امن",
    "demos.analyze": "تجزیه و تحلیل IP فعلی",
    "demos.viewDemo": "مشاهده نمایش کامل موبایل",

    // Testimonials Section
    "testimonials.title": "داستان‌های نبرد",
    "testimonials.subtitle": "مشتریان واقعی. نتایج واقعی. تأثیر واقعی بر تسلط دیجیتال آن‌ها.",
    "testimonials.projects": "پروژه‌های تحویل‌شده",
    "testimonials.satisfaction": "رضایت مشتری",
    "testimonials.conversion": "میانگین افزایش تبدیل",
    "testimonials.breaches": "نقض امنیت",

    // Floating Contact
    "contact.call": "تماس بگیرید",
    "contact.whatsapp": "واتساپ",
    "contact.telegram": "تلگرام",
  },
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === "fa" ? "rtl" : "ltr"} dir={language === "fa" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
