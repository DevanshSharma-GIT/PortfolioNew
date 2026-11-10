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
  Smartphone,
  Brain,
  Cloud,
  Trophy,
  GraduationCap,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import EmvokeLogo from "./logos/emvoke.jpeg"
import ExideLogo from "./logos/exide.jpeg"
import HeroA from "../public/photos/1.jpg"
import HeroC from "../public/photos/3.jpg"

const RESUME_PATH = "/Devansh_Resume.pdf"
const IOS_LETTER_PATH = "/Emvoke.pdf"
const UNIVERSITY_ACCEPTANCE_PATH = "/University_Acceptance_Letter.pdf"
const UDEMY_CERT_PATH = "/Udemy.png"
const EXIDE_CERT_PATH = "/exide.jpeg"
const CBC_CERT_PATH = "/CBC.jpg"
const BGSCET_CERT_PATH = "/BGSCET.jpg"
const EMVOKE_OFFER_PATH = "/Emvoke.pdf"


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showThemeNotification, setShowThemeNotification] = useState(true)
  const [visitorCount, setVisitorCount] = useState<number | null>(null)

  useEffect(() => {
    const duration = 3500
    const interval = 50
    const step = (interval / duration) * 100
    let progress = 0

    const progressTimer = setInterval(() => {
      progress = Math.min(progress + step, 100)
      setLoadingProgress(progress)
      if (progress >= 100) {
        clearInterval(progressTimer)
        setTimeout(() => setIsLoading(false), 400)
      }
    }, interval)

    return () => clearInterval(progressTimer)
  }, [])

  useEffect(() => {
    const key = "portfolio-visitor-count"
    const stored = localStorage.getItem(key)
    const count = stored ? parseInt(stored, 10) + 1 : 1
    localStorage.setItem(key, count.toString())
    setVisitorCount(count)
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
      <div className="fixed inset-0 bg-background/95 backdrop-blur-xl flex items-center justify-center z-50 animate-apple-fade-in">
        <div className="text-center max-w-md mx-auto px-6 animate-apple-blur-reveal">
          <div className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
            Devansh Sharma
          </div>
          <div className="text-sm md:text-base text-muted-foreground mb-10 font-light">
            Full Stack, iOS, AI, Cybersecurity
          </div>
          <div className="w-full max-w-xs mx-auto h-[2px] bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
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
                onClick={() => scrollToSection("education")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground hover:text-indigo-600 transition-colors"
              >
                Work Experience
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
                onClick={() => scrollToSection("education")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block px-3 py-2 text-foreground hover:text-indigo-600 transition-colors w-full text-left"
              >
                Work Experience
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
                <span className="block text-foreground">Devansh Sharma</span>
                <span className="block text-2xl lg:text-3xl mt-4 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Full Stack, iOS, AI, Cybersecurity
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                I build secure, scalable products across mobile, web, and AI, with a focus on healthcare, SaaS, and cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-2">
                <div className="text-foreground font-semibold">Smart India Hackathon Finalist</div>
                <div className="text-muted-foreground">DevYatra and GyaanGuru, AI-powered platforms</div>
              </div>
              <div className="space-y-2">
                <div className="text-foreground font-semibold">iOS Developer at Atlas Medical Solutions</div>
                <div className="text-muted-foreground">Swift, SwiftUI, MVVM, secure healthcare systems</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href={RESUME_PATH} download="Devansh_Sharma_Resume.pdf">
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
                  I am <span className="text-indigo-600 font-semibold">Devansh Sharma</span>, a Computer Science student specializing in
                  <span className="text-purple-600 font-semibold"> Cybersecurity</span> at
                  <span className="text-purple-600 font-semibold"> Ramaiah Institute of Technology</span>, with a current CGPA of
                  <span className="text-indigo-600 font-bold"> 8.57</span>.
                </p>

                <p className="leading-relaxed">
                  I work at <span className="text-blue-600 font-medium">Atlas Medical Solutions</span> as an iOS Developer and have also built
                  full-stack SaaS products with <span className="text-blue-600 font-medium">EMVOKE Technologies</span>. My work sits at the
                  intersection of <span className="text-foreground font-medium">iOS</span>,
                  <span className="text-foreground font-medium"> full-stack engineering</span>,
                  <span className="text-foreground font-medium"> AI</span>, and
                  <span className="text-foreground font-medium"> cybersecurity</span>, with a strong focus on building secure,
                  real-world products for healthcare and digital platforms.
                </p>

                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                  <p className="leading-relaxed">
                    I am passionate about <span className="text-foreground font-medium">AI</span>,
                    <span className="text-foreground font-medium"> full-stack development</span>,
                    <span className="text-foreground font-medium"> iOS development</span>, and
                    <span className="text-foreground font-medium"> cybersecurity</span>, combining practical experience,
                    internships, and academic learning to create impactful solutions.
                  </p>
                </div>

                <p className="leading-relaxed">
                  I have been recognized as a <span className="text-foreground font-medium">Smart India Hackathon Finalist</span> and a
                  <span className="text-foreground font-medium"> National Hackathon Top 3 finalist</span>, while continuing to build
                  solutions that combine innovation with real-world utility.
                </p>
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

      <section id="education" className="py-20 bg-muted/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wide">
            EDUCATION
          </h2>

          <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8 mb-10">
            <Card className="bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200/50 dark:border-indigo-800/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Ramaiah Institute of Technology, Bengaluru, India</CardTitle>
                <CardDescription className="text-base text-indigo-600 font-medium">Expected Aug 2027</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p className="text-xl text-foreground font-semibold">
                  B.E. in Computer Science (Cybersecurity)
                </p>
                <p>
                  <span className="text-foreground font-medium">Semester 6 SGPA:</span> <span className="text-indigo-600 font-semibold">8.57</span>
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" className="bg-white/60 dark:bg-slate-900/30 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50">
                    <a href="/reportcard.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      View Report Card
                    </a>
                  </Button>
                </div>
                <div>
                  <p className="text-foreground font-medium mb-2">Coursework:</p>
                  <p>
                    Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks,
                    Software Engineering, Cloud Computing, Cryptography, Ethical Hacking, Network
                    Security, Quantum Computing, DevOps, Generative AI
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50/60 to-teal-50/60 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200/50 dark:border-emerald-800/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-emerald-200/80 bg-white/40 dark:bg-slate-900/30 p-3">
                    <span className="text-sm font-medium text-foreground">Google Cloud Career Launchpad – Cybersecurity Track, Google Cloud (2026)</span>
                    <Button asChild variant="outline" size="sm" className="h-8 text-xs">
                      <a href="/Google-Cloud.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-emerald-200/80 bg-white/40 dark:bg-slate-900/30 p-3">
                    <span className="text-sm font-medium text-foreground">Security Operations Center in Practice, IBM SkillsBuild (2026)</span>
                    <Button asChild variant="outline" size="sm" className="h-8 text-xs">
                      <a href="/IBM-SkillsBuild.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-emerald-200/80 bg-white/40 dark:bg-slate-900/30 p-3">
                    <span className="text-sm font-medium text-foreground">Security Analyst Training, Exide Energy Solutions | iOS Development Bootcamp & Web Development Bootcamp, Udemy</span>
                    <Button asChild variant="outline" size="sm" className="h-8 text-xs">
                      <a href={UDEMY_CERT_PATH} target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Educational Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p><span className="text-foreground font-semibold">SAT:</span> 1470/1600</p>
                <p><span className="text-foreground font-semibold">TOEFL iBT:</span> 112/120</p>
                <p>Strong academic foundation in mathematics, science, and technical disciplines with demonstrated analytical performance across competitive examinations.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200/50 dark:border-violet-800/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">University Acceptance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Received admission and scholarship offers from 20+ universities, including the University of London, University of Michigan,
                  Penn State, and Purdue, among others.
                </p>
                <p>Accepted into <span className="text-foreground font-semibold">Ramaiah Institute of Technology</span>, Bengaluru, India for the B.E. in Computer Science (Cybersecurity) program.</p>
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <a href={UNIVERSITY_ACCEPTANCE_PATH} target="_blank" rel="noopener noreferrer" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF of University Acceptance
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wide">
            WORK EXPERIENCE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-blue-200 dark:bg-white/90 p-1.5 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">iOS</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">iOS Developer</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">
                        Atlas Medical Solutions Inc. (Remote)
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    Oct 2025 to Present
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-foreground">
                  <li>Led iOS development of a HIPAA-compliant medical scribe application for US clients using Swift, SwiftUI, UIKit, MVVM, Combine, and AVFoundation, personally developing core features while managing 10+ interns.</li>
                  <li>Implemented speech-to-text transcription, real-time audio processing, REST API integration, URLSession, JSON decoding, and secure patient data storage using Keychain and biometric authentication.</li>
                  <li>Performed cross-version iOS testing, XCTest unit testing, debugging, and performance optimization, while managing Git workflows, code reviews, and application reliability.</li>
                </ul>

                <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors">
                  <a href={IOS_LETTER_PATH} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View Offer Letter
                  </a>
                </Button>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Swift</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">SwiftUI</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">UIKit</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">MVVM</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Combine</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">AVFoundation</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">URLSession</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">XCTest</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-blue-200 dark:bg-white/90 p-1.5 flex items-center justify-center">
                      <Image src={EmvokeLogo} alt="EMVOKE" width={40} height={40} className="object-contain" priority />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">Full-Stack Developer</CardTitle>
                      <CardDescription className="text-indigo-600 font-medium">
                        EMVOKE Technologies Pvt. Ltd., Delhi, India
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    May 2025 to Oct 2025
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-foreground">
                  <li>Developed full-stack medical SaaS features using Angular, React, TypeScript, and Node.js, integrating REST APIs and backend services.</li>
                  <li>Built interactive dashboards, integrated AI-powered backend functionalities, and optimized frontend-backend communication.</li>
                  <li>Conducted code reviews, reviewed pull requests, and participated in daily stand-ups, ensuring code quality and seamless integration using AWS, Git, and CI/CD.</li>
                </ul>

                <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors">
                  <a href={EMVOKE_OFFER_PATH} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View Offer Letter
                  </a>
                </Button>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Angular</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">React</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Node.js</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">REST APIs</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">AWS</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Git</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">CI/CD</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 md:col-span-2">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-green-200 dark:bg-white/90 p-1.5 flex items-center justify-center">
                      <Image src={ExideLogo} alt="Exide Energy" width={40} height={40} className="object-contain" priority />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">Information Security Intern</CardTitle>
                      <CardDescription className="text-green-600 font-medium">
                        Exide Energy Solutions Ltd., Bengaluru, India
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    Nov 2024
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm text-foreground">
                  <li>Assisted in implementing basic security controls and monitored for phishing attempts and other potential incidents.</li>
                  <li>Helped run employee workshops on data protection, phishing awareness, and fraud prevention.</li>
                </ul>

                <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors">
                  <a href={EXIDE_CERT_PATH} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    View Certificate
                  </a>
                </Button>

                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Cybersecurity</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Phishing Awareness</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Data Protection</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Fraud Prevention</Badge>
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

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300 dark:hover:border-purple-700 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <CardTitle className="text-xl">DevYatra</CardTitle>
                    <CardDescription className="text-sm">AI-powered temple crowd management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="bg-green-600/90 text-white border-0">Smart India Hackathon Finalist</Badge>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  An AI-based platform for multilingual crowd prediction, real-time capacity monitoring, and safer temple visits using computer vision and intelligent assistance.
                </p>

                <div className="pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800">Next.js</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800">React</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Flask</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">YOLOv8</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">OpenCV</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Pinecone</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Gemma</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800">RAG</Badge>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors">
                      <a href={CBC_CERT_PATH} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors">
                      <a href="https://github.com/DevanshSharma-GIT/DevYatra" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <CardTitle className="text-xl">GyaanGuru</CardTitle>
                    <CardDescription className="text-sm">AI-powered personalized learning</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="bg-green-600/90 text-white border-0">Smart India Hackathon Finalist</Badge>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  A personalized learning platform that creates adaptive learning roadmaps, AI-generated study material, and multimodal mentor support aligned with educational outcomes.
                </p>

                <div className="pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Next.js</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">React</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800">Express</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Flask</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Supabase</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Manim</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Trellis</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">RAG</Badge>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors">
                      <a href={BGSCET_CERT_PATH} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-green-50 dark:hover:bg-green-950/50 transition-colors">
                      <a href="https://github.com/DevanshSharma-GIT/GyaanGuru-Enhanced" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:border-red-300 dark:hover:border-red-700 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <CardTitle className="text-xl">DevThreatPulse</CardTitle>
                    <CardDescription className="text-sm">Threat intelligence and vulnerability monitoring</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="bg-red-600/90 text-white border-0">Security focused</Badge>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  DevThreatPulse is a security-focused project built to identify vulnerabilities, summarize threat patterns, and provide actionable insights for safer web and application security workflows.
                </p>

                <div className="pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Python</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Cybersecurity</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800">Vulnerability Scanning</Badge>
                    <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Threat Intelligence</Badge>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors">
                    <a href="https://github.com/DevanshSharma-GIT/DevThreatPulse" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold mb-4 text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Java</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">Python</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">JavaScript</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">TypeScript</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">C</Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold mb-4 text-foreground">Frontend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">React</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Angular</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Next.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Redux</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">React Native</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">HTML/CSS</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">Responsive Design</Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200/50 dark:border-yellow-800/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold mb-4 text-foreground">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Node.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Express.js</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Django</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Flask</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Spring Boot</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">Spring MVC</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800">REST/GraphQL APIs</Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold mb-4 text-foreground">Mobile</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Swift</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">SwiftUI</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Objective-C</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Kotlin</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Core Data</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Combine</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Realm</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">XCTest</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">Fastlane</Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold mb-4 text-foreground">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">AWS</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Azure</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Docker</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Kubernetes</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">CI/CD</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Git</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">Postman</Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-semibold mb-4 text-foreground">Data & Security</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">MongoDB</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">MySQL</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">PostgreSQL</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Firebase</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">LangChain</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Pinecone</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Cryptography</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Ethical Hacking</Badge>
                <Badge variant="outline" className="text-xs px-2 py-1 bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800">Network Security</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-blue-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">Smart India Hackathon Finalist</CardTitle>
                    <CardDescription className="text-sm text-blue-600 font-medium">2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Secured a finalist position in one of India’s premier innovation challenges with AI-first solutions aimed at real social impact.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200/50 dark:border-green-800/50 hover:border-green-300 dark:hover:border-green-700 hover:shadow-green-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">National Hackathon Top 3</CardTitle>
                    <CardDescription className="text-sm text-green-600 font-medium">CBC, Bengaluru, May 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Built a real-time AI-powered tourism recommender and secured a top-3 finish among strong competitors.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-purple-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">National Hackathon Top 5</CardTitle>
                    <CardDescription className="text-sm text-purple-600 font-medium">ADVAYA 2K25, BGSCET, April 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Ranked among the top 5 in a competitive national event and built an AI-powered heritage platform to address real community needs.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200/50 dark:border-yellow-800/50 hover:border-yellow-300 dark:hover:border-yellow-700 hover:shadow-yellow-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">French Exchange Ambassador</CardTitle>
                    <CardDescription className="text-sm text-yellow-600 font-medium">Poitiers, France, 2019</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Represented India and led STEM workshops while building cross-cultural engagement and global learning experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-3 transition-all duration-500 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200/50 dark:border-red-800/50 hover:border-red-300 dark:hover:border-red-700 hover:shadow-red-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div>
                    <CardTitle className="text-xl text-foreground">Security & Awareness Mentor</CardTitle>
                    <CardDescription className="text-sm text-red-600 font-medium">Data Protection, Phishing Awareness</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-foreground">
                  Helped educate teams on phishing prevention, fraud awareness, and secure digital habits while contributing to a stronger cybersecurity culture.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-200/50 dark:border-indigo-800/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Personal Life</CardTitle>
            </CardHeader>
            <CardContent className="text-base text-muted-foreground leading-relaxed">
              <p>I have lived in Delhi, Kolkata, Bengaluru, and Mumbai, which shaped my perspective and helped me build a strong connection with diverse people and cultures.</p>
              <p className="mt-3">My father works as Vice President in Reliance Industries, and I come from Uttarakhand, where my roots as a pahadi continue to inspire my discipline and work ethic.</p>
              <p className="mt-3">Outside of work, I enjoy going to the gym, playing guitar for more than 10 years, gardening, and following the stock market. I am always looking for ways to improve, learn, and stay balanced while building meaningful work.</p>
            </CardContent>
          </Card>
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
              <a href={RESUME_PATH} download>
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
