import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import NavBar from "@/app/navbar"
import { Button } from "@/components/ui/button"
import "@/app/globals.css";

export default function SiteHeader() {
  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-md rounded-2xl shadow-lg px-6 py-2"
    >
      <div className="flex items-center gap-4">
        <h1 className="text-base font-medium text-purple-200">Hack United</h1>
        <NavBar />
        <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
          <a
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            className="text-purple-200"
          >
            LinkedIn
          </a>
        </Button>
      </div>
    </header>
  );
}

