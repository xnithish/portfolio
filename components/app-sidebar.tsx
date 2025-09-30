"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
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
        <img src={icon} alt={alt} className="h-6 w-6" />
      </a>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </div>
  )
}

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-r-gray-800 [&_[data-sidebar=sidebar]]:bg-[#080808] [&_[data-slot=sidebar-inner]]:bg-[#080808]">
      <SidebarContent className="px-6 bg-[#080808] justify-between flex flex-col h-full pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 pt-6">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.jpg" alt="Jacob Treb" />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-white">@Jacob_Treb</span>
        </div>
        <div className="space-y-2">
            <h1 className="text-2xl font-bold leading-tight text-white">
              Hi I am Nithish Gowda 👋
            </h1>
            <p className="text-sm text-gray-400 leading-snug">
            Frontend developer focused on crafting smooth, engaging interfaces. Currently exploring backend to become a more versatile developer.
            </p>
          </div>

          <div className="flex gap-2">
            <Button size="default" className="rounded-full text-sm">
              Schedule Call
            </Button>
            <Button
              size="default"
              variant="secondary"
              className="rounded-full gap-2 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Chat
            </Button>
          </div>
        </div>
        <div>
          <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <h2 className="text-xl font-bold text-white mb-2 group">
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
                      className="px-2 py-1 text-xs text-white bg-muted rounded-full hover:bg-muted/80 transition-all">
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
                      className="px-2 py-1 text-xs text-white bg-muted rounded-full hover:bg-muted/80 transition-all"
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
                      className="px-2 py-1 text-xs text-white bg-muted rounded-full hover:bg-muted/80 transition-all"
                    >
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="mt-4 flex items-center space-x-3">
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-muted-foreground">LINKS:</span>
          </div>
          <div className="flex space-x-2">
            <SocialLink
              href="https://github.com/xnithish"
              icon="/brand_logos_mono/github.svg"
              alt="GitHub"
              label="github"
            />
            <SocialLink
              href="https://www.linkedin.com/in/xnithish/"
              icon="/brand_logos_mono/linkedin.svg"
              alt="LinkedIn"
              label="linkedin"
            />
            <SocialLink
              href="https://x.com/xniithish"
              icon="/brand_logos_mono/x.svg"
              alt="X (Twitter)"
              label="x"
            />
            <SocialLink
              href="mailto:niiithish@example.com"
              icon="/brand_logos_mono/gmail.svg"
              alt="Gmail"
              label="gmail"
            />
          </div>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="px-6 py-2 bg-[#080808]">
        {/* <div className="mt-2 flex items-center space-x-4">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-muted-foreground">LINKS:</span>
          </div>
          <div className="flex space-x-3">
            <SocialLink
              href="https://github.com/xnithish"
              icon="/brand_logos_mono/github.svg"
              alt="GitHub"
              label="github"
            />
            <SocialLink
              href="https://www.linkedin.com/in/xnithish/"
              icon="/brand_logos_mono/linkedin.svg"
              alt="LinkedIn"
              label="linkedin"
            />
            <SocialLink
              href="https://x.com/xniithish"
              icon="/brand_logos_mono/x.svg"
              alt="X (Twitter)"
              label="x"
            />
            <SocialLink
              href="mailto:niiithish@example.com"
              icon="/brand_logos_mono/gmail.svg"
              alt="Gmail"
              label="gmail"
            />
          </div>
        </div> */}
      </SidebarFooter>
    </Sidebar>
  )
}
