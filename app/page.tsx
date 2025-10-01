import { ProjectsList } from "@/components/projects-list"
import { Cog, Laptop } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="flex items-center gap-3 px-6 py-3 border-b border-b-gray-800 justify-between">
        <div className="flex items-center gap-3">
          <Cog className="lucide lucide-cog size-8 max-sm:size-8 lg:size-8 my-2 animate-spin-slow text-white stroke-[2.5]" />
          <h1 className="text-xl font-bold text-white">MY PROJECTS</h1>
        </div>
      </div>
      <ProjectsList />
      <div className="flex justify-center py-6 border-t border-t-gray-800">
        <div className="flex items-center gap-3 px-6 py-3">
          <p className="text-white text-sm font-medium">More projects in development</p>
          <div className="flex items-center gap-1">
            <Laptop className="h-5 w-5 text-muted-foreground" />
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
