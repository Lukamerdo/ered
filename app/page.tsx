import Hero from "./components/hero"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import Templates from "./components/templates"
import LiveDemos from "./components/live-demos"
import Testimonials from "./components/testimonials"
import FloatingContact from "./components/floating-contact"
import Logo from "./components/logo"
import LanguageProvider from "./components/language-provider"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <Logo />
        <Hero />
        <Services />
        <Portfolio />
        <Templates />
        <LiveDemos />
        <Testimonials />
        <FloatingContact />
      </main>
    </LanguageProvider>
  )
}
