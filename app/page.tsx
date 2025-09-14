"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Computer Engineer", "React Developer", "MERN Stack Developer", "AI Enthusiast"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const skills = {
    languages: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "C", level: 75 },
    ],
    frameworks: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "FastAPI", level: 70 },
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 75 },
    ],
  }

  const projects = [
    {
      title: "CryptoPlace",
      description: "A responsive cryptocurrency price tracker with real-time data from CoinGecko API",
      tech: ["React.js", "CoinGecko API", "React Google Charts"],
      features: ["Real-time price tracking", "Search functionality", "Historical charts", "Multi-currency support"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "To-Do List App",
      description: "A fully responsive task management application with dynamic UI updates",
      tech: ["React.js", "React Hooks", "Local Storage"],
      features: ["Add/Edit/Delete tasks", "Real-time updates", "Responsive design", "State management"],
      image: "/api/placeholder/400/250",
    },
    {
      title: "Employee Management System",
      description: "Full-stack MERN application for managing employee records and authentication",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: ["CRUD operations", "Authentication", "RESTful APIs", "Responsive UI"],
      image: "/api/placeholder/400/250",
    },
  ]

  const timeline = [
    {
      year: "2025",
      title: "Computer Engineering Student",
      organization: "SAL Engineering and Technical Institute",
      location: "Ahmedabad, Gujarat, India",
      type: "education",
      description: "Currently pursuing Computer Engineering with focus on modern web technologies and AI.",
    },
    {
      year: "2025",
      title: "MERN Stack Internship",
      organization: "CreArt Solutions Pvt. Ltd.",
      location: "Remote",
      type: "experience",
      description: "Developed full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      year: "2025",
      title: "AI Internship",
      organization: "CSRBOX IBM Skillsbuild",
      location: "Remote",
      type: "experience",
      description: "Gained hands-on experience in AI concepts, machine learning, and neural networks.",
    },
    {
      year: "2021",
      title: "Higher Secondary Certificate",
      organization: "Krishna Science School",
      location: "Keshod, Gujarat, India",
      type: "education",
      description: "Completed H.S.C with strong foundation in science and mathematics.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Krishn Siddhapara
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Timeline", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-2">
                {["Home", "About", "Skills", "Projects", "Timeline", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => {
                      setActiveSection(item.toLowerCase())
                      setIsMenuOpen(false)
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <img
              src="/api/placeholder/200/200"
              alt="Krishn Siddhapara"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Krishn</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate Computer Engineering student with expertise in React, MERN stack, and AI. I create innovative web
            solutions and love pushing the boundaries of technology.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-gray-400"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Passionate Developer & Innovator</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a dedicated Computer Engineering student with a relentless work ethic and commitment to excellence.
                I thrive in dynamic environments where challenges fuel innovation and push the boundaries of what's
                possible.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                With hands-on experience in the MERN stack, AI technologies, and modern web development, I create
                solutions that are not just functional, but innovative and user-centric.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <span>+91 8000228415</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  <span>siddhaparakishan@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: "Projects", count: "10+" },
                { icon: Database, title: "Technologies", count: "15+" },
                { icon: Globe, title: "Experience", count: "2+ Years" },
                { icon: Smartphone, title: "Responsive", count: "100%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <div className="text-2xl font-bold mb-2">{stat.count}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 capitalize text-center">{category}</h3>
                    <div className="space-y-4">
                      {skillList.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-blue-600 mr-3">{item.year}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.type === "education"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{item.organization}</p>
                      <p className="text-sm text-gray-500 mb-3">{item.location}</p>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:siddhaparakishan@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600 dark:text-gray-400">siddhaparakishan@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918000228415"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-600 dark:text-gray-400">+91 8000228415</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-gray-600 dark:text-gray-400">Connect with me</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-gray-600 dark:text-gray-400">View my projects</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Krishn Siddhapara
              </h3>
              <p className="text-gray-400 mb-6">Building the future, one line of code at a time.</p>
              <div className="flex justify-center space-x-6 mb-8">
                <motion.a
                  href="mailto:siddhaparakishan@gmail.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
              <p className="text-gray-500 text-sm">© 2025 Krishn Siddhapara. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
