"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  Code2,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import EmvokeLogo from "./logos/emvoke.jpeg"
import ExideLogo from "./logos/exide.jpeg"
import HeroA from "../public/photos/1.jpg"
import HeroB from "../public/photos/2.jpg"
import HeroC from "../public/photos/3.jpg"
import HeroD from "../public/photos/4.jpg"
import HeroE from "../public/photos/5.jpg"


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentText, setCurrentText] = useState(0)
  const [showThemeNotification, setShowThemeNotification] = useState(true)

  const welcomeTexts = ["Welcome", "स्वागत है", "Bienvenue", "Willkommen", "ようこそ", "Bienvenido"]

  useEffect(() => {
    // Loading screen logic
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    // Text cycling for loading screen
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % welcomeTexts.length)
    }, 800)

    return () => {
      clearTimeout(timer)
      clearInterval(textInterval)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center z-50">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse">
            Devansh Sharma
          </div>
          <div className="text-xl md:text-2xl text-white/90 mb-6 font-light">
            Full-Stack Developer | Cybersecurity & AI Enthusiast
          </div>
          <div className="text-2xl md:text-3xl text-white mb-8 h-16 md:h-12 flex items-center justify-center">
            <span className="animate-fade-in-out font-medium">{welcomeTexts[currentText]}</span>
          </div>
          <div className="w-full max-w-md mx-auto h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-lime-400 rounded-full animate-loading-bar"></div>
          </div>
          <div className="text-white/80 mt-4 text-lg italic">Loading your experience...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Theme Notification */}
      {showThemeNotification && (
        <div className="fixed top-20 right-4 z-50 bg-background border-2 border-indigo-200 dark:border-indigo-800 rounded-lg shadow-lg p-4 max-w-sm animate-in slide-in-from-right duration-300 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-sm mb-1">Theme Toggle Available</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Switch between light and dark modes using the theme toggle button in the navigation bar.
              </p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowThemeNotification(false)}
                  className="text-xs h-7 px-2"
                >
                  Got it
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xs h-7 px-2"
                >
                  Try it now
                </Button>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowThemeNotification(false)}
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              devansh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setDarkMode(!darkMode)} 
                className="ml-4 hover:scale-110 transition-transform duration-200 hover:bg-accent"
                title="Toggle theme"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setDarkMode(!darkMode)}
                className="hover:scale-110 transition-transform duration-200 hover:bg-accent"
                title="Toggle theme"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("achievements")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-lime-400/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-lime-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="block text-foreground">Full-Stack Developer</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Cybersecurity & AI Enthusiast
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Building scalable, secure, and AI-powered products that impact users across the globe.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
                  <div className="space-y-2">
                    <div className="text-foreground font-semibold">
                      Top 3 Hackathon Finalist
              </div>
                    <div className="text-muted-foreground">Proven in scalable web apps & microservices</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground font-semibold">
                      Global Exposure
                    </div>
                    <div className="text-muted-foreground">Projects spanning AI, Blockchain & AR/VR</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href="/Devansh_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/devansh-sharma-9713a8292/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/DevanshSharma-GIT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden border border-white/20 relative">
              <Image src={HeroA} alt="Showcase" fill className="object-cover animated-photo" priority />
            </div>
            <div className="mt-4 text-center">
              <span className="animated-name text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Devansh Sharma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
                About Me
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  I'm <span className="text-indigo-600 font-semibold">Devansh Sharma</span>, a Full-Stack Developer and Cybersecurity Engineer, currently pursuing my B.E. in Computer Science (Cybersecurity) at <span className="text-purple-600 font-semibold">Ramaiah Institute of Technology</span>.
                </p>
                
                <p className="leading-relaxed">
                  Experienced in building <span className="text-foreground font-medium">scalable, secure, and AI-powered applications</span> with proven results at <span className="text-blue-600 font-medium">EMVOKE Technologies</span> and <span className="text-green-600 font-medium">Exide Energy</span>.
                </p>
                
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                  <p className="leading-relaxed">
                    Recognized through <span className="text-foreground font-medium">National Hackathons</span>, <span className="text-foreground font-medium">French Exchange Program</span>, and <span className="text-foreground font-medium">Global University Admits</span>.
                  </p>
                </div>
                
                <p className="leading-relaxed">
                  Outside of tech, I'm a <span className="text-foreground font-medium">guitarist with 10+ years</span> of creative discipline and a <span className="text-foreground font-medium">fitness-driven learner</span> who thrives on consistency and problem-solving.
                </p>
                
                <div className="pt-4">
                  <p className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Engineer • Innovator • Lifelong Learner
                </p>
              </div>
            </div>
            </div>
            
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden border border-border/50 relative">
                <Image src={HeroC} alt="About image" fill className="object-cover animated-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* EMVOKE Technologies */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 animate-card-float">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-blue-200 dark:bg-white/90 p-1.5 flex items-center justify-center animate-pulse">
                      <Image src={EmvokeLogo} alt="EMVOKE" width={40} height={40} className="object-contain" priority />
                     </div>
                  <div>
                      <CardTitle className="text-xl mb-1">Full Stack Developer</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-indigo-600 font-medium">
                      EMVOKE Technologies PVT LTD, Delhi
                    </CardDescription>
                  </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Calendar className="h-3 w-3" />
                    May 2025–Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Boosted app load speed <span className="text-green-600 font-bold">↑45%</span> & reduced downtime <span className="text-green-600 font-bold">↓30%</span></p>
                      <p className="text-xs text-muted-foreground">with scalable React, Node.js, and AWS solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Secured platforms with IAM, JWT, Terraform, and automated CI/CD</p>
                      <p className="text-xs text-muted-foreground">via Docker + Kubernetes (<span className="text-green-600 font-bold">↓40%</span> release cycles)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Delivered real-time UI/UX with WebSockets & Grafana</p>
                      <p className="text-xs text-muted-foreground">(<span className="text-green-600 font-bold">↑55%</span> engagement)</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 hover:bg-blue-100 transition-all duration-200 cursor-pointer">React</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 hover:bg-green-100 transition-all duration-200 cursor-pointer">Node.js</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800 hover:scale-105 hover:bg-orange-100 transition-all duration-200 cursor-pointer">AWS</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 hover:bg-blue-100 transition-all duration-200 cursor-pointer">Docker</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 hover:bg-blue-100 transition-all duration-200 cursor-pointer">Kubernetes</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 hover:bg-green-100 transition-all duration-200 cursor-pointer">MongoDB</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 hover:bg-purple-100 transition-all duration-200 cursor-pointer">Terraform</Badge>
                  </div>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="outline" className="bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/50">
                      <a href="/Emvoke.pdf" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Letter
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exide Energy */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 animate-card-float" style={{animationDelay: '1s'}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-green-200 dark:bg-white/90 p-1.5 flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                      <Image src={ExideLogo} alt="Exide Energy" width={40} height={40} className="object-contain" priority />
                     </div>
                  <div>
                      <CardTitle className="text-xl mb-1">Security Analyst Intern</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-green-600 font-medium">
                      Exide Energy Pvt Ltd, Bengaluru
                    </CardDescription>
                  </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <Calendar className="h-3 w-3" />
                    Nov 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Conducted enterprise security audits & deployed proactive threat-mitigation tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Mentored staff & fostered culture of vigilance and accountability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Implemented comprehensive training programs & advanced cybersecurity software</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">Conducted informative workshops to mitigate data leaks and fraud risks</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 hover:bg-green-100 transition-all duration-200 cursor-pointer">Cybersecurity</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 hover:bg-blue-100 transition-all duration-200 cursor-pointer">Threat Intelligence</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 hover:bg-purple-100 transition-all duration-200 cursor-pointer">Risk Audits</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800 hover:scale-105 hover:bg-orange-100 transition-all duration-200 cursor-pointer">Security Tools</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 hover:bg-red-100 transition-all duration-200 cursor-pointer">Vulnerability Assessment</Badge>
                  </div>
                  <div className="mt-4">
                    <Button asChild size="sm" variant="outline" className="bg-transparent hover:bg-green-50 dark:hover:bg-green-950/50">
                      <a href="/exide.jpeg" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          
          {/* Top 3 Flagship Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-muted-foreground">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* HeritEdge - AI Cultural Tourism Platform */}
              <Card className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-purple-500/30 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {/* removed leading project icon */}
                    <div>
                      <CardTitle className="text-xl">HeritEdge</CardTitle>
                      <CardDescription className="text-sm">AI Cultural Tourism Platform</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div>
                    <Badge className="bg-green-600/90 text-white border-0">↑ 65% engagement</Badge>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    AI-driven multilingual chatbot with gamified AR/VR tours & blockchain-secured data
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800 hover:scale-105 transition-all duration-200">Python</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800 hover:scale-105 transition-all duration-200">Flask</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">LangChain</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">AR/VR</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800 hover:scale-105 transition-all duration-200">Blockchain</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors">
                        <a href="https://github.com/DevanshSharma-GIT/HeritEdge" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors">
                        <a href="https://devanshsharma-git.github.io/HeritEdge/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                  </a>
                </Button>
                    </div>
                  </div>
              </CardContent>
            </Card>

              {/* DevFarm - AI Local Discovery App */}
              <Card className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-green-500/30 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {/* removed leading project icon */}
                    <div>
                <CardTitle className="text-xl">DevFarm</CardTitle>
                      <CardDescription className="text-sm">AI Local Discovery App</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div>
                    <Badge className="bg-green-600/90 text-white border-0">↑ 55% visibility</Badge>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    AI-powered cross-platform maps app with real-time vendor discovery & interactive maps
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">React Native</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">TypeScript</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800 hover:scale-105 transition-all duration-200">Google Maps API</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">AI</Badge>
                    </div>
                    
                <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors">
                    <a href="https://github.com/DevanshSharma-GIT/DevFarm" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                      <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors">
                    <a href="/demo-2.mp4" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                    </div>
                </div>
              </CardContent>
            </Card>

              {/* DevSecure - Website Vulnerability Scanner */}
              <Card className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:border-red-300 dark:hover:border-red-700 hover:shadow-red-500/30 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {/* removed leading project icon */}
                    <div>
                      <CardTitle className="text-xl">DevSecure</CardTitle>
                      <CardDescription className="text-sm">Website Vulnerability Scanner</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div>
                    <Badge className="bg-green-600/90 text-white border-0">↓ 80% time</Badge>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    Automated website vulnerability scanner with SSL validation & PDF audit reports
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">Python</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">Security Auditing</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800 hover:scale-105 transition-all duration-200">WeasyPrint</Badge>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors">
                      <a href="https://github.com/DevanshSharma-GIT/DevSecure" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                        GitHub
                  </a>
                </Button>
                  </div>
              </CardContent>
            </Card>
            </div>
          </div>

          {/* Secondary Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-muted-foreground">
              Additional Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* DevRAG Project */}
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-blue-500/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DR</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">DevRAG</CardTitle>
                      <CardDescription className="text-sm">DevOps Resource Aggregator</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-sm text-foreground">
                    Curated DevOps toolkit simplifying CI/CD & infra automation
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">Docker</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">Kubernetes</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">Terraform</Badge>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors">
                      <a href="https://github.com/DevanshSharma-GIT/DevRAG" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                        GitHub
                  </a>
                </Button>
                  </div>
              </CardContent>
            </Card>

            {/* DevScraping Project */}
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200/50 dark:border-indigo-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DS</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">DevScraping</CardTitle>
                      <CardDescription className="text-sm">Enterprise Review Intelligence</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-sm text-foreground">
                    AI-driven review mining → business insights automation
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800 hover:scale-105 transition-all duration-200">Python</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800 hover:scale-105 transition-all duration-200">NLP</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">LangChain</Badge>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors">
                  <a href="https://github.com/DevanshSharma-GIT/DevScraping" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                        GitHub
                  </a>
                </Button>
                  </div>
              </CardContent>
            </Card>

              {/* DevCrypto Project */}
              <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200/50 dark:border-yellow-800/50 hover:border-yellow-300 dark:hover:border-yellow-700 hover:shadow-yellow-500/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DC</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">DevCrypto</CardTitle>
                      <CardDescription className="text-sm">Cryptocurrency Tracker</CardDescription>
                    </div>
                  </div>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-sm text-foreground">
                    Real-time crypto tracker with WebSockets & advanced charting
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">Node.js</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">WebSockets</Badge>
                      <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">D3.js</Badge>
                    </div>
                    
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-yellow-50 dark:hover:bg-yellow-950/50 transition-colors">
                      <a href="https://github.com/DevanshSharma-GIT/DevCrypto" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                        GitHub
                  </a>
                </Button>
                  </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Languages */}
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200" title="Used in production at EMVOKE & Projects">Python</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">Java</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">TypeScript</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">Swift</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">Rust</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">Go</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 hover:scale-105 transition-all duration-200">C++</Badge>
              </div>
            </Card>

            {/* Frontend */}
            <Card className="text-center p-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FE</span>
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200" title="Core framework used in projects">React</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">Next.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">Angular</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">Vue.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">Tailwind</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">HTML5/CSS</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 hover:scale-105 transition-all duration-200">JavaScript (ES6+)</Badge>
              </div>
            </Card>

            {/* Backend & Databases */}
            <Card className="text-center p-6 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200/50 dark:border-yellow-800/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BE</span>
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Backend & DB</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200" title="Primary backend at EMVOKE">Node.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">Flask</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">Django</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">FastAPI</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">Spring Boot</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">SQL</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">MongoDB</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">PostgreSQL</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800 hover:scale-105 transition-all duration-200">Redis</Badge>
              </div>
            </Card>

            {/* AI, Data & Cloud */}
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h3 className="font-semibold mb-3 text-foreground">AI, Data & Cloud</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200" title="Used in DevScraping project">LangChain</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">OpenAI API</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">TensorFlow.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">PyTorch</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200" title="Used in production">AWS</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">GCP</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200" title="Used in production">Docker</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200" title="Used in production">Kubernetes</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200" title="Used in production">Terraform</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 hover:scale-105 transition-all duration-200">Cloudflare Workers</Badge>
              </div>
            </Card>

            {/* Cybersecurity & Blockchain */}
            <Card className="text-center p-6 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SEC</span>
              </div>
              <h3 className="font-semibold mb-3 text-foreground">Security & Blockchain</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200" title="Exide Energy internship">Ethical Hacking</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">Cryptography</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">WebAuthn</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">JWT</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">OWASP</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">Solidity</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">Ethereum</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800 hover:scale-105 transition-all duration-200">Smart Contracts</Badge>
              </div>
            </Card>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* iOS Development */}
                             <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">iOS</span>
              </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Udemy iOS Development Bootcamp</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive iOS development training</p>
              </div>
            </div>
                <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <a href="/Udemy.png" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View Certification
                  </a>
                </Button>
          </Card>

              {/* Web Development */}
                             <Card className="p-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Web</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Udemy Web Development Bootcamp</h4>
                    <p className="text-sm text-muted-foreground">The Complete Full-Stack Web Development Bootcamp (61.5 hours)</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="/Udemy.png" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View Certification
                  </a>
                </Button>
              </Card>

              {/* Security Training */}
                             <Card className="p-6 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Sec</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Security Analyst Training</h4>
                    <p className="text-sm text-muted-foreground">Exide Energy Solutions Ltd — Enterprise cybersecurity focus</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a href="/exide.jpeg" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          
          {/* Top Hackathons + Global Recognition */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">


            {/* National Hackathon Top 3 */}
            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  {/* icon removed */}
                  <div>
                    <CardTitle className="text-xl text-foreground">National Hackathon Top 3</CardTitle>
                    <CardDescription className="text-sm text-blue-600 font-medium">CBC, Bengaluru (May 2025)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Top 3 Finalist | Developed real-time AI tourism recommender with <span className="text-green-600 font-bold">↑ engagement</span>
                  </p>
                </div>
                <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
                  <a href="/CBC.jpg" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* National Hackathon Top 5 - BGS */}
            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-2xl hover:shadow-green-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">National Hackathon Top 5</CardTitle>
                    <CardDescription className="text-sm text-green-600 font-medium">ADVAYA 2K25, BGSCET (April 2025)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Top 5 among <span className="text-green-600 font-bold">1000+ participants</span> | Built AI-powered heritage platform (HeritEdge)
                  </p>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="/BGSCET.jpg" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* French Exchange Ambassador */}
            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200/50 dark:border-yellow-800/50 hover:border-yellow-300 dark:hover:border-yellow-700 hover:shadow-2xl hover:shadow-yellow-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">French Exchange Ambassador</CardTitle>
                    <CardDescription className="text-sm text-yellow-600 font-medium">Poitiers, France (2019)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Represented India | Led STEM workshops & raised <span className="text-green-600 font-bold">$1,500+</span> for international student initiatives
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* University Acceptances */}
            <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-purple-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  {/* icon removed */}
                  <div>
                    <CardTitle className="text-lg text-foreground">University Acceptances</CardTitle>
                    <CardDescription className="text-sm text-purple-600 font-medium">Global Scholarships</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                                  <p className="text-sm text-foreground">
                    Multiple offers from <span className="text-purple-600 font-bold">QS Top 100 universities</span> (London, Michigan, Sydney, Manchester, Purdue, etc.)
                  </p>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-purple-950/50 transition-colors">
                  <a href="/University_Acceptance_Letter.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View PDF
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Esports Athlete */}
            <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:border-red-300 dark:hover:border-red-700 hover:shadow-red-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  {/* icon removed */}
                  <div>
                    <CardTitle className="text-lg text-foreground">Esports Athlete & Creator</CardTitle>
                    <CardDescription className="text-sm text-red-600 font-medium">Partnered Creator</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                                  <p className="text-sm text-foreground">
                    Selected for <span className="text-red-600 font-bold">Epic Games' Support-A-Creator</span>, global collaborations & partnerships
                  </p>
                {/* action removed for now */}
              </CardContent>
            </Card>

            {/* Student Council Leader */}
            <Card className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200/50 dark:border-indigo-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  {/* icon removed */}
                  <div>
                    <CardTitle className="text-lg text-foreground">Student Council Leader</CardTitle>
                    <CardDescription className="text-sm text-indigo-600 font-medium">Leadership Excellence</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-foreground">
                  Directed <span className="text-indigo-600 font-bold">50+ events</span>, won <span className="text-indigo-600 font-bold">3 medals</span>, served on editorial board
                </p>
                {/* action removed for now */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
            Let's Connect
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full animate-pulse"></div>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Open to internships, collaborations, and global opportunities in <span className="text-foreground font-medium">Full-Stack Development</span>, <span className="text-foreground font-medium">AI</span>, and <span className="text-foreground font-medium">Cybersecurity</span>.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="group hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 dark:hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800"
            >
              <a href="https://github.com/DevanshSharma-GIT" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="group hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 dark:hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800"
            >
              <a href="https://www.linkedin.com/in/devansh-sharma-9713a8292/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="group hover:shadow-lg hover:shadow-green-500/20 hover:border-green-400 dark:hover:border-green-600 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-green-200 dark:border-green-800"
            >
              <a href="mailto:devansh.work6@gmail.com">
                <Mail className="mr-2 h-5 w-5 text-green-600 group-hover:scale-110 transition-transform duration-200" />
                Email
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="group hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-400 dark:hover:border-purple-600 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800"
            >
              <a href="/Devansh_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
                Resume
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center text-muted-foreground">
            <MapPin className="mr-2 h-5 w-5 text-indigo-600" />
            <span className="font-medium">Bengaluru, India</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Copyright © DEVANSH.COM | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
