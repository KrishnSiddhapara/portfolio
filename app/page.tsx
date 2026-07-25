"use client"

import { useState, useEffect } from "react"

import {
  FileCode2,
  Terminal,
  Coffee,
  Layout,
  Atom,
  Server,
  Network,
  Zap,
  Table,
  GitBranch,
  Send
} from "lucide-react";
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

  const roles = ["Software Developer", "MERN Stack Developer", "Backend Developer", "AI Enthusiast"]

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
      { name: "JavaScript", level: 90, icon: FileCode2 },
      { name: "Python", level: 80, icon: Terminal },
      { name: "Java", level: 70, icon: Coffee },
      { name: "HTML/CSS", level: 95, icon: Layout },
    ],
    frameworks: [
      { name: "React.js", level: 90, icon: Atom },
      { name: "Node.js", level: 85, icon: Server },
      { name: "Express.js", level: 85, icon: Network },
      { name: "FastAPI", level: 70, icon: Zap },
    ],
    tools: [
      { name: "MongoDB", level: 85, icon: Database },
      { name: "MySQL", level: 75, icon: Table },
      { name: "Git/GitHub", level: 85, icon: GitBranch },
      { name: "Postman", level: 80, icon: Send },
    ],
  };
  const projects = [
    {
      title: "SwiftWheel — Vehicle Rental Platform",
      description:
        "A full-stack MERN vehicle rental platform for renting bikes, mopeds, and cars, with role-based Admin, Seller, and User dashboards.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "JWT Authentication"],
      features: [
        "Role-based authentication & authorization",
        "Vehicle search, filtering & pagination",
        "Secure booking flow with document upload",
        "Payment integration & booking confirmation",
        "Admin & seller panels for platform management",
      ],
      image: "/project.png",
      link: "https://swift-wheel.vercel.app/",
      github: "https://github.com/KrishnSiddhapara/Swift-Wheel",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio built with React and Framer Motion, showcasing my skills, projects, and experience with smooth animations and dark mode support.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "Animated sections with scroll-triggered reveals",
        "Dark / light mode toggle",
        "Fully responsive across devices",
        "Interactive skills, projects & timeline sections",
      ],
      image: "/p2.png",
      link: "https://krishn.vercel.app/", // Add your deployed portfolio link!
      github: "https://github.com/KrishnSiddhapara/portfolio", // Add your portfolio repo link!
    },
  ]
  const timeline = [
    {
      year: "2026",
      title: "MERN Stack Intern",
      organization: "Spectrics Solutions Pvt. Ltd.",
      location: "Ahmedabad -  (Jan 2026 – Present)",
      type: "experience",
      description:
        "Developing and maintaining full-stack web applications using the MERN stack, building reusable React components, RESTful APIs, and secure authentication & authorization flows.",
    },
    {
      year: "2025",
      title: "AI Internship",
      organization: "CSRBOX IBM SkillsBuild",
      location: "Remote",
      type: "experience",
      description: "Gained hands-on experience in AI concepts, machine learning, and neural networks.",
    },
    {
      year: "2022 – 2026",
      title: "Computer Engineering (CGPA: 7.72)",
      organization: "SAL Engineering and Technical Institute",
      location: "Ahmedabad, Gujarat, India",
      type: "education",
      description:
        "Computer Engineering graduate with hands-on experience in MERN Stack, Python, and FastAPI development.",
    },
    {
      year: "2021",
      title: "Higher Secondary Certificate (70%)",
      organization: "Krishna Science School",
      location: "Keshod, Gujarat, India",
      type: "education",
      description: "Completed H.S.C with a strong foundation in science and mathematics.",
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
            MERN Stack Developer and Computer Engineering graduate experienced in architecting full-stack web applications using React, Node.js, Express, and MongoDB. Versatile backend engineer skilled in Python and FastAPI, with a passion for integrating Generative AI models to build scalable, problem-solving software solutions from the ground up.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href={`#contact`} className="flex gap-2 items-center">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline">
              <a href={`#projects`} className="flex gap-2 items-center">

                <Github className="mr-2 h-4 w-4" />
                View Projects
              </a>

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

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Architecting Scalable Full-Stack Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                As a Computer Engineering graduate, I specialize in engineering robust, user-centric web applications from the database up to the browser. I focus on writing clean, maintainable code and turning complex engineering challenges into intuitive digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                My daily workflow revolves around the <strong>
                  MERN ecosystem
                </strong> (MongoDB, Express.js, React, Node.js), which I actively apply in my current role as a MERN Stack Developer Intern at Spectrics Solutions Pvt. Ltd. Beyond JavaScript, I leverage <strong>
                  Python and FastAPI </strong>to build high-performance APIs and integrate modern Generative AI features into real-world software.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Phone className="h-4 w-4 mr-2 text-blue-600" />
                  <span>+91 8000228415</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  <span>siddhaparakishan@gmail.com</span>
                </div>
              </div>
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
                <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 capitalize text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {category}
                    </h3>

                    {/* Inner Grid for Skills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {skillList.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all group"
                          >
                            {/* Skill Icon */}
                            {IconComponent && (
                              <IconComponent className="w-6 h-6 mb-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            )}

                            {/* Skill Name */}
                            <span className="text-xs font-semibold text-center text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-gray-600 dark:text-gray-400"
          >
            APIs: RESTful Web Services · CRUD Operations
          </motion.div>
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
                className="group h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">

                  {/* Project Image Area */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "./project.png"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Card Content Area */}
                  <CardContent className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features List */}
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5 mb-6">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons: Live Demo & GitHub */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800/80 mt-auto">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-sm flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </Button>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </Button>
                        </a>
                      )}
                    </div>

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
                          className={`px-2 py-1 rounded-full text-xs ${item.type === "education"
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

          <div className="flex justify-center mx-auto gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">

                <div className="flex justify-between items-center gap-4">
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

                </div>

                <div className="flex justify-between items-center gap-4">

                  <motion.a
                    href="https://www.linkedin.com/in/krishn-siddhapara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-gray-600 dark:text-gray-400">Krishn Siddhapara</div>
                    </div>
                  </motion.a>

                  <motion.a
                  href="https://github.com/KrishnSiddhapara"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-gray-600 dark:text-gray-400">View my projects</div>
                    </div>
                  </motion.a>

                </div>


              </div>
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
                  className="text-gray-400 hover:text-white transition-colors f"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/KrishnSiddhapara"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >

                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/krishn-siddhapara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
              <p className="text-gray-500 text-sm">© 2026 Krishn Siddhapara. All rights reserved.</p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}