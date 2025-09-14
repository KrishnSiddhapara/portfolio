"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, X } from "lucide-react"
import { Chart } from "react-google-charts"
import { projects } from "../data/portfolio"
import type { Project } from "../types"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-card rounded-lg shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -10, scale: 1.02 }}
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                aria-label="View GitHub Repository"
              >
                <Github size={16} />
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="View Live Demo"
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* View Details Button */}
          <motion.button
            className="w-full py-2 bg-primary/10 text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    )
  }

  const ProjectModal = ({ project }: { project: Project }) => {
    const chartOptions = {
      title: `${project.title} - Performance Data`,
      titleTextStyle: {
        color: "#374151",
        fontSize: 16,
        bold: true,
      },
      backgroundColor: "transparent",
      legend: {
        position: "bottom",
        textStyle: { color: "#6b7280" },
      },
      hAxis: {
        textStyle: { color: "#6b7280" },
        titleTextStyle: { color: "#374151" },
      },
      vAxis: {
        textStyle: { color: "#6b7280" },
        titleTextStyle: { color: "#374151" },
      },
      colors: ["#15803d", "#84cc16", "#d97706", "#dc2626"],
      animation: {
        startup: true,
        easing: "out",
        duration: 1000,
      },
    }

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          className="bg-card rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-foreground">{project.title}</h2>
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close Modal"
            >
              <X size={24} />
            </motion.button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-8">
            {/* Project Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Chart Section */}
            {project.chartData && (
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Project Analytics</h3>
                <div className="bg-muted/30 rounded-lg p-4">
                  <Chart
                    chartType="LineChart"
                    width="100%"
                    height="300px"
                    data={project.chartData}
                    options={chartOptions}
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="mr-2" />
                View Source Code
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A showcase of my recent work and projects that demonstrate my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
          <motion.a
            href="https://github.com/krishnsiddhapara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} />}</AnimatePresence>
    </section>
  )
}

export default Projects
