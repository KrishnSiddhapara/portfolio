"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import toast from "react-hot-toast"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react"
import { personalInfo } from "../data/portfolio"
import type { ContactForm } from "../types"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Form validation schema
  const schema = yup.object({
    name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
    email: yup.string().required("Email is required").email("Please enter a valid email address"),
    subject: yup.string().required("Subject is required").min(5, "Subject must be at least 5 characters"),
    message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create mailto link as fallback
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        data.subject,
      )}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`

      window.location.href = mailtoLink

      setIsSubmitted(true)
      toast.success("Message sent successfully! Your email client should open shortly.")
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out through any of the channels below.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon size={20} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="text-foreground font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
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
                  className="p-3 bg-card rounded-full shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-card rounded-lg shadow-lg border border-border p-8"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <motion.input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Your full name"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.name && (
                    <motion.p
                      className="mt-1 text-sm text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <motion.input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.email && (
                    <motion.p
                      className="mt-1 text-sm text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <motion.input
                    {...register("subject")}
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                      errors.subject ? "border-destructive" : "border-border"
                    }`}
                    placeholder="What's this about?"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.subject && (
                    <motion.p
                      className="mt-1 text-sm text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.subject.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.message && (
                    <motion.p
                      className="mt-1 text-sm text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
