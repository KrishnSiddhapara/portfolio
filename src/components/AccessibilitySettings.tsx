"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Settings, X, Minus, Plus, Palette, Eye } from "lucide-react"

interface AccessibilitySettingsProps {
  onReduceMotion: (reduce: boolean) => void
  onFontSizeChange: (size: number) => void
  onContrastChange: (highContrast: boolean) => void
}

const AccessibilitySettings = ({ onReduceMotion, onFontSizeChange, onContrastChange }: AccessibilitySettingsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.max(75, Math.min(150, fontSize + delta))
    setFontSize(newSize)
    onFontSizeChange(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const handleReduceMotion = () => {
    const newValue = !reduceMotion
    setReduceMotion(newValue)
    onReduceMotion(newValue)

    if (newValue) {
      document.documentElement.style.setProperty("--animation-duration", "0.01ms")
    } else {
      document.documentElement.style.removeProperty("--animation-duration")
    }
  }

  const handleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    onContrastChange(newValue)

    if (newValue) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }

  return (
    <>
      {/* Settings Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-accent transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open accessibility settings"
      >
        <Settings size={20} />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-card rounded-lg shadow-2xl max-w-md w-full p-6 border border-border"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold text-foreground">Accessibility Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Close settings"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-6">
                {/* Font Size */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Font Size: {fontSize}%</label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleFontSizeChange(-25)}
                      className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                      aria-label="Decrease font size"
                    >
                      <Minus size={16} />
                    </button>
                    <div className="flex-1 bg-muted rounded-full h-2 relative">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-300"
                        style={{ width: `${((fontSize - 75) / 75) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={() => handleFontSizeChange(25)}
                      className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                      aria-label="Increase font size"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Reduce Motion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Eye size={20} className="text-muted-foreground" />
                    <div>
                      <div className="font-medium text-foreground">Reduce Motion</div>
                      <div className="text-sm text-muted-foreground">Minimize animations</div>
                    </div>
                  </div>
                  <button
                    onClick={handleReduceMotion}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      reduceMotion ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label="Toggle reduce motion"
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        reduceMotion ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Palette size={20} className="text-muted-foreground" />
                    <div>
                      <div className="font-medium text-foreground">High Contrast</div>
                      <div className="text-sm text-muted-foreground">Increase color contrast</div>
                    </div>
                  </div>
                  <button
                    onClick={handleHighContrast}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      highContrast ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label="Toggle high contrast"
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        highContrast ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <button
                  onClick={() => {
                    setFontSize(100)
                    setReduceMotion(false)
                    setHighContrast(false)
                    onFontSizeChange(100)
                    onReduceMotion(false)
                    onContrastChange(false)
                    document.documentElement.style.fontSize = "100%"
                    document.documentElement.style.removeProperty("--animation-duration")
                    document.documentElement.classList.remove("high-contrast")
                  }}
                  className="w-full py-2 px-4 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors font-medium"
                >
                  Reset to Defaults
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilitySettings
