"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <>
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.images[selectedImage].src}
              alt={project.images[selectedImage].alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}

      <div className="bg-card border border-border  overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row gap-4 p-6">
          {/* Image Gallery - Left Column */}
          <div className="md:w-2/5 space-y-3">
            {/* Large Main Image */}
            <div 
              className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={project.images[selectedImage].src}
                alt={project.images[selectedImage].alt}
                fill
                className="object-cover object-center transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Click to enlarge
                </span>
              </div>
            </div>

          {/* Two Thumbnail Images
          <div className="grid grid-cols-2 gap-3">
            {project.images.slice(0, 3).map((image, index) => {
              if (index === selectedImage) return null
              return (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="relative aspect-video bg-muted rounded-lg overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                  />
                </button>
              )
            })}
          </div> */}

        </div>

        {/* Content - Right Column */}
        <div className="md:w-3/5 space-y-4">
        {/* Title and Visit Button */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="shrink-0 bg-white text-black hover:bg-gray-100"
          >
            <a
              href={project.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              VISIT
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Description
        <p className="text-muted-foreground">{project.description}</p> */}

        {/* Tech Stack */}
        <div className="flex items-center gap-3 flex-wrap">
          <h4 className="text-sm font-semibold shrink-0">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-muted rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Features</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
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
