"use client"

import { useEffect } from "react"

export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip navigation if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      const sections = ["home", "about", "skills", "projects", "timeline", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      const currentIndex = currentSection ? sections.indexOf(currentSection) : 0

      switch (event.key) {
        case "ArrowDown":
        case "j":
          event.preventDefault()
          if (currentIndex < sections.length - 1) {
            const nextSection = document.getElementById(sections[currentIndex + 1])
            nextSection?.scrollIntoView({ behavior: "smooth" })
          }
          break
        case "ArrowUp":
        case "k":
          event.preventDefault()
          if (currentIndex > 0) {
            const prevSection = document.getElementById(sections[currentIndex - 1])
            prevSection?.scrollIntoView({ behavior: "smooth" })
          }
          break
        case "Home":
          event.preventDefault()
          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
          break
        case "End":
          event.preventDefault()
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])
}
