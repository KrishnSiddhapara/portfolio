"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { personalInfo } from "../data/portfolio"

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 1000 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === "") {
        // Move to next role
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
      } else {
        // Continue typing or deleting
        setDisplayText((prev) => {
          if (isDeleting) {
            return currentRole.substring(0, prev.length - 1)
          } else {
            return currentRole.substring(0, prev.length + 1)
          }
        })
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0">
        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-muted-foreground mb-4">
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-foreground mb-6 text-balance"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">{personalInfo.name}</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div variants={itemVariants} className="h-16 sm:h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-primary">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-accent transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Send Email"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.resume}
              download
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Download Resume"
            >
              <Download size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-accent transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              aria-label="Scroll to About section"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
