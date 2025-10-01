"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"

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

export function ProjectCard({ project }: { project: Project }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <>
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button - improved for mobile */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsLightboxOpen(false)
            }}
            className="absolute top-4 right-4 z-10 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 touch-manipulation"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 md:h-7 md:w-7 text-white" />
          </button>

          {/* Image container */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[70vh] md:max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}

      <div className="bg-card border border-none overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Image Gallery - Left */}
          <div className="md:w-2/5 space-y-3">
            {/* Large Main Image */}
            <div
              className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover object-center transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Click to enlarge
                </span>
              </div>
            </div>
          </div>

          {/* Content - Right */}
          <div className="md:w-3/5 space-y-4">
        {/* Title and Visit Button */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium">{project.title}</h3>
          <a
            href={project.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm px-3 py-1 border border-border rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            visit
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-3 flex-wrap">
          <h4 className="text-xs font-semibold text-muted-foreground">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs text-gray-400 bg-[rgba(29,29,29,0.46)] rounded-full hover:bg-muted/80 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Description
        <p className="text-muted-foreground text-sm">{project.description}</p> */}

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Features</h4>
          <ul className="space-y-1.5 text-sm text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      </div> 
      
      {/* Divider Lines */}
      <div className="w-full h-4 relative">
        <Image
          src="/lines.png"
          alt="Section divider"
          fill
          className="object-cover"
        />
      </div>
    </>
  )
}
