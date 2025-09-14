"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Lightbulb, Target, Users } from "lucide-react"
import { personalInfo } from "../data/portfolio"

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in MERN stack development with modern JavaScript frameworks and backend technologies.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Passionate about solving complex problems through innovative thinking and clean, efficient code.",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering high-quality solutions that meet user needs and business objectives.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and experience working in collaborative development environments.",
    },
  ]

  const stats = [
    { number: "3+", label: "Projects Completed" },
    { number: "2", label: "Internships" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Get to know more about my journey, skills, and passion for technology
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mb-4"
            >
              Passionate Computer Engineering Student
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              Currently pursuing Computer Engineering at SAL Engineering and Technical Institute, I have gained hands-on
              experience through internships at CreArt Solutions and CSRBOX IBM Skillsbuild, where I worked on
              real-world projects using the MERN stack and explored AI technologies.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
              My projects showcase my ability to build full-stack applications, from cryptocurrency trackers to employee
              management systems, always focusing on clean code, user experience, and modern development practices.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow border"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
