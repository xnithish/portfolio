"use client"

import { useEffect, useState } from "react"
import { ProjectCard } from "@/components/project-card"

interface ProjectImage {
  src: string
  alt: string
}

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  features: string[]
  images: ProjectImage[]
  visitUrl: string
}

export function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading projects:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto" />
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="space-y-0">
        {/* Projects Grid */}
        <div className="grid gap-0 grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
