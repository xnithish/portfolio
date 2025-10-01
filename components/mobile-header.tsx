"use client"

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface SocialLinkProps {
  href: string
  icon: string
  alt: string
  label: string
}

function SocialLink({ href, icon, alt, label }: SocialLinkProps) {
  return (
    <div className="group/social relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg border border-border bg-background shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer inline-block"
      >
        <Image src={icon} alt={alt} width={20} height={20} className="h-5 w-5" />
      </a>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
        {label}
      </div>
    </div>
  )
}

export function MobileHeader() {
  return (
    <div className="md:hidden bg-[#080808] border-b border-border px-4 py-4 space-y-6">
      {/* Profile Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.jpg" alt="Jacob Treb" />
            <AvatarFallback>NG</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-white">@0xnithish</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold leading-tight text-white">
            Hi I am Nithish Gowda 👋
          </h1>
          <p className="text-sm text-gray-400 leading-snug">
            Frontend developer focused on crafting smooth, engaging interfaces. Currently exploring backend to become a more versatile developer.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            size="default"
            className="rounded-full text-sm"
            asChild
          >
            <a
              href="https://calendly.com/0xnithish"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Call
            </a>
          </Button>
          <Button
            size="default"
            variant="secondary"
            className="rounded-full gap-2 text-sm"
            asChild
          >
            <a
              href="https://x.com/0xnithish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Chat
            </a>
          </Button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-white group">
          <span className="inline-block">{"{"}</span>
          <span className="ml-2 inline-block hover:translate-x-1 transition-transform duration-200"> {"}"}TECH STACK</span>
        </h2>

        <div className="space-y-2">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-1">Frontend</h3>
            <div className="flex flex-wrap gap-1">
              {["JavaScript (ES6+)",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "React Router",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Vite",
                  "HTML",
                  "CSS"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-gray-400 bg-[rgba(29,29,29,0.46)] rounded-full hover:bg-muted/80 transition-all">
                {tech}
              </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-1">Backend</h3>
            <div className="flex flex-wrap gap-1">
              {["npm", "pnpm", "Node.js", "Express.js(Learning)"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-gray-400 bg-[rgba(29,29,29,0.46)] rounded-full hover:bg-muted/80 transition-all"
              >
                {tech}
              </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground mb-1">Db & Services</h3>
            <div className="flex flex-wrap gap-1">
              {["Supabase", "Clerk Auth", "Better Auth"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-gray-400 bg-[rgba(29,29,29,0.46)] rounded-full hover:bg-muted/80 transition-all"
              >
                {tech}
              </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-muted-foreground">LINKS:</span>
        <div className="flex space-x-2">
          <SocialLink
            href="https://github.com/0xnithish"
            icon="/brand_logos_mono/github.svg"
            alt="GitHub"
            label="github"
          />
          <SocialLink
            href="https://www.linkedin.com/in/0xnithish/"
            icon="/brand_logos_mono/linkedin.svg"
            alt="LinkedIn"
            label="linkedin"
          />
          <SocialLink
            href="https://x.com/0xnithish"
            icon="/brand_logos_mono/x.svg"
            alt="X (Twitter)"
            label="x"
          />
          <SocialLink
            href="mailto:niiithish@gmail.com"
            icon="/brand_logos_mono/gmail.svg"
            alt="Gmail"
            label="gmail"
          />
        </div>
      </div>
    </div>
  )
}