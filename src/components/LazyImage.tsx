"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
}

const LazyImage = ({ src, alt, className = "", placeholder, onLoad }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setError(true)
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img src={placeholder || "/placeholder.svg"} alt="" className="w-full h-full object-cover opacity-50" />
          ) : (
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-muted-foreground text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}

export default LazyImage
