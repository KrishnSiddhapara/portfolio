export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl?: string
  features: string[]
  chartData?: any[]
}

export interface TimelineItem {
  id: string
  title: string
  organization: string
  location: string
  period: string
  description: string
  type: "education" | "experience"
  technologies?: string[]
}

export interface Skill {
  name: string
  level: number
  category: "languages" | "frameworks" | "tools" | "databases"
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
