"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { skills } from "../data/portfolio"
import type { Skill } from "../types"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks" },
    { id: "tools", name: "Tools" },
    { id: "databases", name: "Databases" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.1 }}
        className="mb-6"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-medium text-foreground">{skill.name}</h4>
          <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    )
  }

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.05 }}
        className="p-6 bg-card rounded-lg shadow-lg border  hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
          <span className="text-sm text-primary font-bold">{skill.level}%</span>
        </div>
        <div className="relative">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-primary/10 border "
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display - Two Layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Skill Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-heading font-semibold text-foreground mb-8 text-center lg:text-left"
            >
              Proficiency Levels
            </motion.h3>
            <div className="space-y-6">
              {filteredSkills.slice(0, Math.ceil(filteredSkills.length / 2)).map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skill Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-2"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-heading font-semibold text-foreground mb-8 text-center lg:text-left"
            >
              Technology Stack
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSkills.slice(Math.ceil(filteredSkills.length / 2)).map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 p-8 bg-card rounded-lg shadow-lg border "
        >
          <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-center">Skills Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                {skills.filter((s) => s.category === "languages").length}
              </div>
              <div className="text-muted-foreground">Programming Languages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                {skills.filter((s) => s.category === "frameworks").length}
              </div>
              <div className="text-muted-foreground">Frameworks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                {skills.filter((s) => s.category === "tools").length}
              </div>
              <div className="text-muted-foreground">Tools & Libraries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                {skills.filter((s) => s.category === "databases").length}
              </div>
              <div className="text-muted-foreground">Databases</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
