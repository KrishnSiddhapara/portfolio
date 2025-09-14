"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LoadingScreen from "./components/LoadingScreen"
import SkipLink from "./components/SkipLink"
import AccessibilitySettings from "./components/AccessibilitySettings"
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation"
import { useReducedMotion } from "./hooks/useReducedMotion"

// Lazy load components for better performance
const About = lazy(() => import("./components/About"))
const Skills = lazy(() => import("./components/Skills"))
const Projects = lazy(() => import("./components/Projects"))
const Timeline = lazy(() => import("./components/Timeline"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    return false
  })

  // Custom hooks for accessibility
  useKeyboardNavigation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  // Apply reduced motion preference
  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms")
    } else {
      document.documentElement.style.removeProperty("--animation-duration")
    }
  }, [prefersReducedMotion])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleReduceMotion = (reduce: boolean) => {
    if (reduce) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms")
    } else {
      document.documentElement.style.removeProperty("--animation-duration")
    }
  }

  const handleFontSizeChange = (size: number) => {
    document.documentElement.style.fontSize = `${size}%`
  }

  const handleContrastChange = (highContrast: boolean) => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipLink />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main id="main-content" role="main">
              <Hero />
              <Suspense fallback={<SectionLoader />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <Timeline />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Settings */}
      <AccessibilitySettings
        onReduceMotion={handleReduceMotion}
        onFontSizeChange={handleFontSizeChange}
        onContrastChange={handleContrastChange}
      />
    </div>
  )
}

export default App
