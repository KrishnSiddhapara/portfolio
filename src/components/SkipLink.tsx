"use client"

import { motion } from "framer-motion"

const SkipLink = () => {
  return (
    <motion.a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium"
      initial={{ y: -100 }}
      whileFocus={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      Skip to main content
    </motion.a>
  )
}

export default SkipLink
