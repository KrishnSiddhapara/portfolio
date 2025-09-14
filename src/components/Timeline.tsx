"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import { timelineData } from "../data/portfolio"
import type { TimelineItem } from "../types"

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const timelineItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const TimelineItemComponent = ({ item, index }: { item: TimelineItem; index: number }) => {
    const isEven = index % 2 === 0
    const Icon = item.type === "education" ? GraduationCap : Briefcase

    return (
      <motion.div
        variants={timelineItemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.2 }}
        className={`flex items-center mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {/* Content Card */}
        <motion.div
          className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-card rounded-lg shadow-lg border  p-6 hover:shadow-xl transition-shadow duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <motion.div
                  className={`p-2 rounded-full ${
                    item.type === "education" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={20} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-primary font-medium">{item.organization}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === "education" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                }`}
              >
                {item.type === "education" ? "Education" : "Experience"}
              </span>
            </div>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1 mb-2 sm:mb-0">
                <Calendar size={14} />
                <span>{item.period}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>{item.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

            {/* Technologies */}
            {item.technologies && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Timeline Connector */}
        <div className="hidden md:flex w-2/12 justify-center">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border"
              style={{ height: "100px", top: "-50px" }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            />
            {/* Timeline Node */}
            <motion.div
              className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
              whileHover={{ scale: 1.5 }}
            />
          </div>
        </div>

        {/* Spacer for opposite side */}
        <div className="hidden md:block w-5/12" />
      </motion.div>
    )
  }

  return (
    <section id="timeline" className="py-20 bg-background">
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
            My <span className="text-primary">Journey</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A timeline of my educational background and professional experiences
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Mobile Timeline Line */}
          <motion.div
            className="md:hidden absolute left-8 top-0 w-1 bg-border"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Timeline Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8 md:space-y-0"
          >
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-card rounded-lg shadow-lg border ">
            <div className="text-3xl font-bold text-primary mb-2">
              {timelineData.filter((item) => item.type === "education").length}
            </div>
            <div className="text-muted-foreground">Educational Milestones</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-lg border ">
            <div className="text-3xl font-bold text-primary mb-2">
              {timelineData.filter((item) => item.type === "experience").length}
            </div>
            <div className="text-muted-foreground">Professional Experiences</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-lg border ">
            <div className="text-3xl font-bold text-primary mb-2">2025</div>
            <div className="text-muted-foreground">Current Year</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
