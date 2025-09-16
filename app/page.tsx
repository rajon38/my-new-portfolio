"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import CoursesSection from "@/components/courses-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MatrixBackground from "@/components/matrix-background"
import FloatingCode from "@/components/floating-code"

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <FloatingCode />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <EducationSection />
      <CoursesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
